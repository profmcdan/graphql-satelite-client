import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import Pages from "./pages";

const apiUrl = "https://server-qwioa2xeo.now.sh";

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: "http://localhost:4000/"
});
const client = new ApolloClient({
	cache,
	link
});

client
	.query({
		query: gql`
			query GetLaunch {
				launch(id: 56) {
					id
					mission {
						name
					}
				}
			}
		`
	})
	.then((result) => console.log(result));

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Pages />
			</ApolloProvider>
		);
	}
}

export default App;
