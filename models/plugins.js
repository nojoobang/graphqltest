let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLBoolean
} = graphql;

const plugins = {};

const model = new GraphQLObjectType({
	name: 'plugins',
	fields: () => ({
		name: {
			type: GraphQLString
		},
		src: {
			type: GraphQLString
		},
		isActive: {
			type: GraphQLBoolean
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
		},
		src: {
			type: GraphQLString
		},
		isActice: {
			type: GraphQLBoolean
		}
	},
	resolve: (_, args) => {
		return db.plugins.findAll({
			where: args
		})
	}
};

const mutation = {
	type: model,
	args: {
		name: {
			type: GraphQLString
		},
		src: {
			type: GraphQLString
		},
		isActive: {
			type: GraphQLBoolean
		}
	},
	resolve: (_, args) => {
		return db.plugins.upsert(args, {
			id: args.id
		})
	}
};

plugins.model = model;
plugins.query = query;
plugins.mutation = mutation;

module.exports = plugins;