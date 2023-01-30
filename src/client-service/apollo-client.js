import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from '@apollo/client/link/ws'

//var uri = LOCAL_SERVER_URI; //'http://localhost:8081/graphql'//`${process.env.LOCAL_SERVER_URI}`
let uri = "https://ps.cmo.foundation/graphql"; 
if(process.env.NODE_ENV === 'local'){
  //uri = "http://localhost:8081/graphql";
}

let wsuri = uri.replace("http","ws");;
console.log(wsuri)

const httpLink = new HttpLink({
  uri: {uri}
});

const wsLink = new WebSocketLink(
  new SubscriptionClient(wsuri, {
    reconnect:true,
    connectionParams: {
      authToken: '', 
    }
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

export default client;