let conponents = require('./components.js'),
	contents = require('./contents.js'),
	history = require('./history.js'),
	plugins = require('./plugins.js'),
	routes = require('./routes.js'),
	users = require('./users.js'), //mutation 없음.
	widget = require('./widget.js'),
	widgetContents = require('./widgetContents.js'),
	graphql = require('graphql'),
 	{ GraphQLObjectType } = graphql;

const query = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		conponents: conponents.query
		contents: contents.query
		history: history.query
		plugins: plugins.query
		routes: routes.query
		users: users.query
		widget: widget.query
		widgetContents: widgetContents.query
	})
});

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		conponents: conponents.mutation
		contents: contents.mutation
		history: history.mutation
		plugins: plugins.mutation
		routes: routes.mutation
		widget: widget.mutation
		widgetContents: widgetContents.mutation
	})
});

module.exports = {
	query: query,
	mutation: mutation
};

