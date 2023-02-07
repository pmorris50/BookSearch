const {gql} = require('apollo-server-express');

const typeDefs = gql`
scalar Email
type User {
    username: String! @unique
    email: Email!
    password: String!

}
    type Book {
        authors:[String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

`;

module.exports = typeDefs