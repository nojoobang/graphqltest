let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLEnumType
} = graphql;

const widgets = {};

const widgetEnum = new GraphQLEnumType({
	name: 'widgetEnum',
	values: {
		header: {value: 0},
		footer: {value: 1}
	}
});

const model = new GraphQLObjectType({
	name: 'widgets',
	fields: () => ({
		widgetType: {
			type: widgetEnum
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
		widgetType: {
			type: widgetEnum
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
		widgetType: {
			type: widgetEnum
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