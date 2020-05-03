import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getDistributers = async({search, sort}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort},
                query: gql`
                    query ($sort: String!, $search: String!) {
                        distributers(sort: $sort, search: $search) {
                            _id
                            createdAt
                            distributer
                                {_id name}
                            organizations
                                {_id name}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getOrganizationsWithoutDistributer = async(distributer, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {distributer: distributer},
                query: gql`
                    query ($distributer: ID!) {
                        organizationsWithoutDistributer(distributer: $distributer) {
                            _id
                            createdAt
                            name
                            image
                            address
                            email
                            phone
                            info
                            reiting
                            status
                            accessToClient
                            consignation
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getDistributer = async({_id}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        distributer(_id: $_id) {
                            _id
                            createdAt
                            distributer
                                {_id name}
                            organizations
                                {_id name image}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteDistributer = async(ids, distributer)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteDistributer(_id: $_id) {
                             data
                        }
                    }`})
        return await getDistributers({distributer: distributer, ...(new SingletonStore().getStore().getState().app)})
    } catch(err){
        console.error(err)
    }
}

export const addDistributer = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($distributer: ID!, $organizations: [ID]) {
                        addDistributer(distributer: $distributer, organizations: $organizations) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setDistributer = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $organizations: [ID]) {
                        setDistributer(_id: $_id, organizations: $organizations) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}