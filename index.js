let express = require('express');
let graphqlHTTP = require('express-graphql');
let graphql = require('graphql');
let {
  GraphQLSchema
} = graphql;
let models = require('./models/index.js');

const app = express();

const schema = new GraphQLSchema(models);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');