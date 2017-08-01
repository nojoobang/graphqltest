let graphql = require('graphql');
let {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLEnumType
} = graphql;

const contents = {};

const model = new GraphQLObjectType({
	name: 'contents',
	fields: () => ({
		data: { // JSON의 형태
			type: GraphQLString 
		},
		name: {
			type: GraphQLString
		},
		conponentID: {
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
		name: {
			type: GraphQLString
		}
	},
	resolve: (_, args) => {
		return db.contents.findAll({
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
		name: {
			type: GraphQLString
		},
		conponentID: {
			type: GraphQLID
		}
	},
	resolve: (_, args) => {
		return db.contents.upsert(args, {
			id: args.id
		})
	}
};

contents.model = model;
contents.query = query;
contents.mutation = mutation;

module.exports = contents;