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

export {SUB_CONECTAR_PAINEL}