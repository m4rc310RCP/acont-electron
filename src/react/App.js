import React from "react";
import {gql, useQuery} from '@apollo/client';
import {useSubscription} from '@apollo/client/react/hooks'

const SUB_MESSAGE = gql`
    subscription{
        sub_mensagem{ds_mensagem}
    }
`;

const QUERY_TEST = gql`
    query Test{
      test
    }
`;

const SUB_PAINEL = gql`
subscription OnSubConectarPainel($cd_estacao:String){
  sub_conectar_painel(cd_estacao:$cd_estacao){
    ds_estacao nr_senha
  }
}
`;



const App_ = () => {
    return <div>{JSON.stringify("")}</div>
}

const App__ = () => {
    const {data, error} = useSubscription(SUB_MESSAGE, {variables:{}, onData:data=>{
      console.log('Data')
    }});

    if(error){
      return <div>{JSON.stringify(error)}</div>
    }

    if (data){
      return <div>{JSON.stringify(data)}</div>
    }

    return <div>===</div>
}

const App = () => {
    const {data, error} = useSubscription(SUB_PAINEL, {variables:{cd_estacao:"P1"}, onData:data=>{
      console.log('Data')
    }});




    if(error){
      return <div>{JSON.stringify(error)}</div>
    }

    if (data){
      return <div>{JSON.stringify(data.sub_conectar_painel.nr_senha)}</div>
      //return <div>{process.env.NODE_ENV}</div>
    }

    return <div>...</div>
}
export default App;