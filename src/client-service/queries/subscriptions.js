import {gql} from '@apollo/client';

const SUB_CONECTAR_PAINEL = gql`
    subscription ON_CONECTAR_PAINEL($cd_estacao:String) {
        CONECTAR_PAINEL(cd_estacao: $cd_estacao) {
            ds_local
            nr_senha
            cd_estacao
            cd_unidade
            ds_apelido
        }
    }
`;

const SUB_CARREGAR_TOTEM = gql`
subscription ON_CARREGAR_TOTEM($cd_estacao:String) {
    CARREGAR_TOTEM(cd_estacao: $cd_estacao){
      cd_estacao cd_unidade ds_titulo
    }
  }
`;

export {SUB_CONECTAR_PAINEL, SUB_CARREGAR_TOTEM}