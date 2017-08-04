const graphql = require('graphql'),
	{
		GraphQLObjectType,
		GraphQLID,
		GraphQLString,
		GraphQLList
	} = graphql,
	block = {},
	data = require('../data.js');

const model = new GraphQLObjectType({
	name: 'block',
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
		}
	},
	resolve: (_, args) => {
		return new Promise((res, rej) => {
			let rv;
			data.block.map((val) => {
				if (val.id === Number(args.id)) {
					rv = val;
					return;
				}
			});
			res(rv);
		});
		// return db.menu.findAll({
		// 	where: args
		// })
	}
};

const mutation = {
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
		// return db.menu.upsert(args, {
		// 	id: args.id
		// })
		return new Promise((res, rej) => {
			res();
		})
	}
};

block.model = model;
block.query = query;
block.mutation = mutation;

module.exports = block;