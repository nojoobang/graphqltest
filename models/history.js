let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} = graphql;

const history = {};

const model = new GraphQLObjectType({
	name: 'history',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		who: {
			type: GraphQLID
		},
		reason: {
			type: GraphQLString
		}
	})
});

const query = { 
	type: model,
	args: {
		id: {
			type: GraphQLID
		},
		who: {
			type: GraphQLID
		}
	},
	resolve: (_, args) => {
		return db.history.findAll({
			where: args
		})
	}
};

const mutation = {
	type: model,
	args: {
		who: {
			type: GraphQLID
		},
		reason: {
			type: GraphQLString
		}
	},
	resolve: (_, args) => {
		return db.history.upsert(args, {
			id: args.id
		})
	}
};

history.model = model;
history.query = query;
history.mutation = mutation;

module.exports = history;