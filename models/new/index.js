const menu = require('./menu.js'),
	block = require('./block.js'),
	content = require('./content.js'),
	theme = require('./theme.js'),
	graphql = require('graphql'),
 	{ GraphQLObjectType } = graphql;

const query = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		menu: menu.query,
		block: block.query,
		content: content.query,
		theme: theme.query
	})
});

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		menu: menu.mutation,
		block: block.mutation,
		content: content.mutation,
		theme: theme.mutation
	})
});

module.exports = {query, mutation};

