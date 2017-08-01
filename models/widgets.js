let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLEnumType
} = graphql;

const widgets = {};

const model = new GraphQLObjectType({
	name: 'widgets',
	fields: () => ({
		type: {
			type: new GraphQLEnumType({
				values: {
					header: {value: 0},
					footer: {value: 1}
				}
			})
		},
		layout: { // n coloum, n row // JSON의 형태
			type: GraphQLString
		},
		code: { // template이 다 들어간다.
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
		return db.widgets.findAll({
			where: args
		})
	}
};

const mutation = {
	type: model,
	args: {
		type: {
			type: new GraphQLEnumType({
				values: {
					header: {value: 0},
					footer: {value: 1}
				}
			})
		},
		layout: { // n coloum, n row // JSON의 형태
			type: GraphQLString
		},
		code: { // template이 다 들어간다.
			type: GraphQLString
		}
	},
	resolve: (_, args) => {
		return db.widgets.upsert(args, {
			id: args.id
		})
	}
};

widgets.model = model;
widgets.query = query;
widgets.mutation = mutation;

module.exports = widgets;