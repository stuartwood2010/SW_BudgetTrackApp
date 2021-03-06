const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const utils = require('./utils');
const {resolvers, typeDefs,} = require('./schemas');
const db = require('./config/connection');

const server = new ApolloServer({
	resolvers,
	typeDefs,
	context: ({req, res}) => {
		const token = req.headers.authorization;

		// if no token no user is logged in
		if (token.length === 0) {
			return req;
		}

		try {
			const {data} = jwt.verify(token, utils.secret);
			req.user = data;
		} catch (e) {
			return {error: 'Invalid token'};
		}

		return {
			req,
		};
	},
});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once('open', async () => {
	await server.start();
	// creates a /graphql endpoint for our server
	server.applyMiddleware({ app });
	app.listen(PORT, () => console.log('Server running on PORT 3001'));

});


