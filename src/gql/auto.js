import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getAutos = async({search: search, sort: sort, filter: filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        autos(search: $search, sort: $sort, filter: $filter) {
                            _id
                            number
                            tonnage
                            size
                            createdAt
                            employment 
                                {_id name}
                            organization 
                                {_id name}
                          }
                          sortAuto {
                           name
                            field
                          }
                          filterAuto {
                           name
                           value
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getAuto = async({_id: _id}, client)=> {
    try {
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        auto(_id: $_id) {
                            _id
                            number
                            tonnage
                            size
                            createdAt
                            employment 
                                {_id name}
                            organization 
                                {_id name}
                        }
                    }`,
            })
        return res.data
    } catch (err) {
        console.error(err)
    }
}

export const deleteAuto = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteAuto(_id: $_id) {
                             data
                        }
                    }`})
        return await getAutos(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const setAuto = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $tonnage: Float, $size: Float, $number: String, $organization: ID, $employment: ID) {
                        setAuto(_id: $_id, tonnage: $tonnage, size: $size, number: $number, organization: $organization, employment: $employment) {
                             data
                        }
                    }`})
        let list = await getAutos(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}

export const addAuto = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($tonnage: Float!, $size: Float!, $number: String!, $organization: ID!, $employment: ID) {
                        addAuto(tonnage: $tonnage, size: $size, number: $number, organization: $organization, employment: $employment) {
                             data
                        }
                    }`})
        return await getAutos(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}