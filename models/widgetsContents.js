let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} = graphql;

const widgetContents = {};

const model =  new GraphQLObjectType({
	name: 'widgetContents',
	fields: () => ({
		data: { // JSON의 형태
			type: GraphQLString 
		},
		name: { // n coloum, n row // JSON의 형태
			type: GraphQLString
		},
		widgetID: {
			type: GraphQLID
		}
	})
});

const query = { 
	type: model,
	args: {
		id: {
			type: GraphQLID
		},
		data: { // JSON의 형태
			type: GraphQLString 
		},
		name: { // n coloum, n row // JSON의 형태
			type: GraphQLString
		},
		widgetID: {
			type: GraphQLID
		}
	},
	resolve: (_, args) => {
		return db.widgetContents.findAll({
			where: args
		})
	}
};

const mutation = {
	type: model,
	args: {
		data: { // JSON의 형태
			type: GraphQLString 
		},
		name: { // n coloum, n row // JSON의 형태
			type: GraphQLString
		},
		widgetID: {
			type: GraphQLID
		}
	},
	resolve: (_, args) => {
		return db.widgetContents.upsert(args, {
			id: args.id
		})
	}
};

widgetContents.model = model;
widgetContents.query = query;
widgetContents.mutation = mutation;

module.exports = widgetContents;