const graphql = require('graphql'),
	{
		GraphQLObjectType,
		GraphQLID,
		GraphQLString,
		GraphQLList
	} = graphql,
	content = {},
	data = require('../data.js');

const model = new GraphQLObjectType({
	name: 'content',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString // header, footer, navi...같은..
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
		return new Promise((res, rej) => {
			let rv;
			data.content.map((val) => {
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
		// return db.menu.upsert(args, {
		// 	id: args.id
		// })
		return new Promise((res, rej) => {
			res();
		})
	}
};

content.model = model;
content.query = query;
content.mutation = mutation;

module.exports = content;