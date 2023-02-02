import React, {Stack, Item} from "react";

import {useSubscription} from '@apollo/client/react/hooks'
import {SUB_CARREGAR_TOTEM} from '../client-service/queries/subscriptions';

const titlePanel = (ds_titulo) =>(
    <div className="title">
        <div className="logo"></div>
        <h1>{ds_titulo}</h1>
    </div>
);

const middlePanel  = ()=>(
    <div className="middle">
       
    </div>
);

const errorPanel = (error)=>(
    <div className="middle">
        <h1>{error}</h1>
    </div>
);

const loadingPanel = () =>(
    <div id="container">
        {titlePanel("Aguardando resposta do servidor...")}
        {middlePanel()}
    </div>
);

const panelTotem = ({cd_estacao, ds_titulo}) =>(
    <div id="container">
        {titlePanel(ds_titulo)}
        {middlePanel()}
    </div>
);


const Emissor = () =>{
    const {data, error, loading} = useSubscription(SUB_CARREGAR_TOTEM, {variables:{cd_estacao:"P1"}, onData: data=>{
        console.log(data)
    }});

    if (error){
        return errorPanel(error);
    }

    if (loading){
        return loadingPanel()
    }

    if (data){
        return panelTotem(data.CARREGAR_TOTEM);
    }
};

export default Emissor;