import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getDistricts = async({search, sort, filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        districts(search: $search, sort: $sort, filter: $filter) {
                            _id
                            createdAt
                            organization
                                {_id name}
                            client
                                { 
                                    _id
                                    name
                                    address
                                }
                            name
                            agent
                                { 
                                    _id
                                    name
                                }
                            ecspeditor
                                { 
                                    _id
                                    name
                                }
                        }
                        sortDistrict {
                            name
                            field
                        }
                        filterDistrict {
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

export const getDistrict = async({_id}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        district(_id: $_id) {
                            _id
                            createdAt
                            organization
                                {_id name}
                            client
                                { 
                                    _id
                                    image
                                    createdAt
                                    name
                                    email
                                    address
                                    lastActive
                                    device
                                    notification
                                    info
                                    reiting
                                    birthday
                                    type
                                    city
                                    patent 
                                    passport 
                                    certificate
                                    phone
                                    organization 
                                        {_id name}
                                    user 
                                        {_id role status login}
                                }
                            ecspeditor
                                { 
                                    _id
                                    name
                                }
                            name
                            agent
                                { 
                                    _id
                                    createdAt
                                    name
                                }
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteDistrict = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteDistrict(_id: $_id) {
                             data
                        }
                    }`})
        return await getDistricts(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const addDistrict = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($organization: ID, $client: [ID]!, $name: String!, $agent: ID, $ecspeditor: ID) {
                        addDistrict(organization: $organization, client: $client, name: $name, agent: $agent, ecspeditor: $ecspeditor) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setDistrict = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $organization: ID, $client: [ID], $name: String, $agent: ID, $ecspeditor: ID) {
                        setDistrict(_id: $_id, organization: $organization, client: $client, name: $name, agent: $agent, ecspeditor: $ecspeditor) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}