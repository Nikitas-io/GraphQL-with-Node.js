// To instantiate an Apollo GraphQL server we need to first import the server.
const {ApolloServer} = require ('apollo-server');

const {typeDefs} = require('./schema');
const {Query} = require('./resolvers/Query');
const {Product} = require('./resolvers/Product');
const {Category} = require('./resolvers/Category');

const {products, categories} = require('./db');

// Instantiate a new Apollo GraphQL server using a 'Type Definition' and a 'Resolver'.
const server = new ApolloServer({ 
    typeDefs, 
    resolvers: {
        Query,
        Product,
        Category
    },
    context: {
        hello: () => console.log('Hello world!'),
        products,
        categories,
    }
});

// Listen to the server asynchronously.
server.listen().then( ({url}) => {
    console.log("Server is ready at " + url);
})