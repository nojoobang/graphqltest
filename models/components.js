let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} = graphql;

const components = {};

const model = new GraphQLObjectType({
	name: 'components',
	fields: () => ({
		desc: {
			type: GraphQLString 
		},
		name: {
			type: GraphQLString
		},
		code: {
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
		name: {
			type: GraphQLString
		}
	},
	resolve: (_, args) => {
		return db.components.findAll({
			where: args
		})
	}
};

const mutation = {
	type: model,
	args: {
		desc: {
			type: GraphQLString 
		},
		name: {
			type: GraphQLString
		},
		code: {
			type: GraphQLString
		}
	},
	resolve: (_, args) => {
		return db.components.upsert(args, {
			id: args.id
		})
	}
};

components.model = model;
components.query = query;
components.mutation = mutation;

module.exports = components;