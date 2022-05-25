/* typeDefs is short for typeDefinitions */
const { gql } = require('apollo-server-express');

// Queries and Mutations
const typeDefs = gql`
    type Auth {
        token: String
        user: User
    }

    type Budget {
        _id: ID
        dateCreated: Date
        month: String
        expenses: [Expense]
        userId: User
    }

    type Expense {
        _id: ID
        amount: Float
        date: Date
        note: String
        category: String
        budgetId: Budget
        userId: User
    }

    type Income {
        _id: ID
        amount: Float
        date: Date
        note: String
        source: String
        budgetId: Budget
        userId: User
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        userName: String
        fullName: String
        email: String
        budgets: [Budget]
    }

    type Query {
        budget(id: String!): Budget
        budgets: [Budget]
        expense(id: String!): Expense
        expenses: [Expense]
        income(id: String!): Income
        incomes: [Income]       
        user(id: String!): User
        users: [User]
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addBudget(title: String!,)
        addExpense(task: String!, userId: String!, completed: Boolean): Expense
    }
`;

module.exports = typeDefs;
