let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID
} = graphql;

const users = {};

const model = new GraphQLObjectType({
	name: 'users',
	fields: () => ({
		id: {
			type: GraphQLID
		}
	})
});

const query = { 
	type: model,
	args: {
		id: {
			type: GraphQLID
		}
	},
	resolve: (_, args) => {
		return db.users.findAll({
			where: args
		})
	}
};

users.model = model;
users.query = query;

module.exports = users;