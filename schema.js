const {gql} = require ('apollo-server');

// Define the Type Definitions by providing them inside the backticks.
// In here we specify all of the things that we're able to fetch.
exports.typeDefs = gql`
    type Query {
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }
`