import React from "react";
import {gql, useQuery} from '@apollo/client';
import {useSubscription} from '@apollo/client/react/hooks'

import {SUB_CONECTAR_PAINEL} from '../client-service/queries/subscriptions';



const App = () => {
    const {data, error} = useSubscription(SUB_CONECTAR_PAINEL, {variables:{cd_estacao:"P1"}, onData: data=>{
      console.log(data)
    }});

    if(error){
      return <div>{JSON.stringify(error)}</div>
    }

    if (data){
      return <>
        <div id="pass-box">
          <h3>Senha:</h3>
          <h1>{data.CONECTAR_PAINEL.nr_senha}</h1>
          <h5>Por favor dirija-se ao:</h5>
          <h2>{data.CONECTAR_PAINEL.ds_local}</h2>
          <h6>{data.CONECTAR_PAINEL.ds_apelido}</h6>
        </div>
      </>
    }


    if (data){
      return <>
              <div id="pass-box">
                <div className="pass" >
                  {data.CONECTAR_PAINEL.nr_senha}
                </div>
                <div>{data.CONECTAR_PAINEL.ds_local}</div>
              </div>
              </>
    }

    return <div>...</div>
}

export default App;