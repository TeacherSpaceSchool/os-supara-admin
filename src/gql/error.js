import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getErrors = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        errors {
                            _id
                            createdAt
                            data
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const clearAllErrors = async()=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            mutation : gql`
                    mutation {
                        clearAllErrors {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}