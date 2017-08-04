const graphql = require('graphql'),
	{
		GraphQLObjectType,
		GraphQLID,
		GraphQLInt,
		GraphQLString,
		GraphQLList,
		GraphQLScalarType
	} = graphql,
	menu = {},
	blockType = require('./block.js'),
	contentType = require('./content.js'),
	themeType = require('./theme.js'),
	data = require('../data.js');

const odd = new GraphQLScalarType({
	name: 'Odd',
	serialize: () => {
		return JSON.parse(value);
	},
	parseValue: () => {
		return JSON.parse(value);
	},
	parseLiteral: (ast) => {
		if (ast.kind === Kind.INT) {
			return JSON.parse(ast.value);
		}
		return null;
	}
});

const model = new GraphQLObjectType({
	name: 'menu',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString // header, footer, navi...같은..
		},
		struct: {
			type: odd
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
			type: odd
		}
	},
	resolve: (_, args) => {
		return new Promise((res, rej) => {
			let rv;
			data.menu.map((val) => {
				if (val.id === Number(args.id)) {
					rv = val;
					return;
				}
			});
			res(rv);
		})
	}
};

const mutation = {
	type: model,
	args: {
		name: {
			type: GraphQLString
		}
	},
	resolve: (_, args) => {
		return new Promise((res, rej) => {
			res(rv);
		})
	}
};

menu.model = model;
menu.query = query;
menu.mutation = mutation;

module.exports = menu;