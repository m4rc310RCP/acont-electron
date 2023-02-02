import React from "react";
import { createRoot } from "react-dom/client";
import {ApolloProvider} from '@apollo/client';

import client from './client-service/apollo-client.js'


import './styles/index.css'
//import App from './react/App';

import Emissor from './react/Emissor'

createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <Emissor />
    </ApolloProvider>
);