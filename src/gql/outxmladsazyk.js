import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const districtsOutXMLAdsShoros = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        districtsOutXMLAdsShoros{
                            _id
                            name
                          }
                    }`,
            })
        return res.data.districtsOutXMLAdsShoros
    } catch(err){
        console.error(err)
    }
}

export const outXMLAdsShoros = async({search: search, sort: sort}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort},
                query: gql`
                    query ($search: String!) {
                        outXMLAdsShoros(search: $search) {
                            _id
                            guid
                            district
                                {_id name}
                            createdAt
                          }
                    }`,
            })
        return res.data.outXMLAdsShoros
    } catch(err){
        console.error(err)
    }
}

export const deleteOutXMLAdsShoro = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteOutXMLAdsShoro(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addOutXMLAdsShoro = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($district: ID!, $guid: String!) {
                        addOutXMLAdsShoro(district: $district, guid: $guid) {
                             data
                        }
                    }`})
        return await outXMLAdsShoros(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const setOutXMLAdsShoro = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $district: ID, $guid: String) {
                        setOutXMLAdsShoro(_id: $_id, district: $district, guid: $guid) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}