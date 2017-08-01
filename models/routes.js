let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLBoolean
} = graphql;

const routes = {};

const model = new GraphQLObjectType({
	name: 'routes',
	fields: () => ({
		path: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		children: { // 하위 페이지의 ids
			type: GraphQLID
		},
		contents: { //contents의 ids
			type: new GraphQLList(contents),
			resolve: () => {

			}
		}
	})
});

const query = { 
	type: model,
	args: {
		id: {
			type: GraphQLID
		},
		path: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		children: {
			type:
		},
		contents: {
			type: 
		}
	},
	resolve: (_, args) => {
		return db.routes.findAll({
			where: args
		})
	}
};

const mutation = {
	type: model,
	args: {
		path: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		children: { // 하위 페이지의 ids
			type: GraphQLID
		},
		contents: { //contents의 ids
			type: new GraphQLList(contents),
			resolve: () => {

			}
		}
	},
	resolve: (_, args) => {
		return db.routes.upsert(args, {
			id: args.id
		})
	}
};

routes.model = model;
routes.query = query;
routes.mutation = mutation;

module.exports = routes;