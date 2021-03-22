import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getRoutes = async(element, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: element,
                query: gql`
                    query($search: String!, $skip: Int) {
                        routes(search: $search, skip: $skip) {
                            _id
                            createdAt
                            roles
                            division {_id name}
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const setRoute = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $roles: [String]!, $division: ID) {
                        setRoute(_id: $_id, roles: $roles, division: $division) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addRoute = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($roles: [String]!, $division: ID!) {
                        addRoute(roles: $roles, division: $division) {
                            _id
                            createdAt
                            roles
                            division {_id name}
                        }
                    }`})
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteRoute = async(_id)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: _id},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteRoute(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}