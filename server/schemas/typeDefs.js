const {gql} = require('apollo-server-express');

const typeDefs = gql`
scalar Email
type User {
    _id: ID! 
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


type Query {
    GetSingleUser(username: String!, _id: ID!): User

}

type Mutuations : 
    NewUser(username: String!, email: Email, password: String!):User
`;

module.exports = typeDefs