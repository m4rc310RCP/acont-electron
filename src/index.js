import React from "react";
import { createRoot } from "react-dom/client";
import {ApolloProvider} from '@apollo/client';

import client from './client-service/apollo-client.js'


import './styles/index.css'
import App from './react/App';

createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);