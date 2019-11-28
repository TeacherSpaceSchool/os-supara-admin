import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getOrganization = async({_id: _id})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        organization(_id: $_id) {
                            _id
                            updatedAt
                            name
                            image
                            address
                            email
                            phone
                            info
                            reiting
                            status
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getOrganizations = async({search: search, sort: sort, filter: filter})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        organizations(search: $search, sort: $sort, filter: $filter) {
                            _id
                            updatedAt
                            name
                            image
                            address
                            email
                            phone
                            info
                            reiting
                            status
                          }
                          sortOrganization {
                           name
                            field
                          }
                          filterOrganization {
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

export const deleteOrganization = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteOrganization(_id: $_id) {
                             data
                        }
                    }`})
        let list = await getOrganizations(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}

export const onoffOrganization = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        onoffOrganization(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addOrganization = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($image: Upload!, $name: String!, $address: [String]!, $email: [String]!, $phone: [String]!, $info: String!) {
                        addOrganization(image: $image, name: $name, address: $address, email: $email, phone: $phone, info: $info) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setOrganization = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $image: Upload, $name: String, $address: [String], $email: [String], $phone: [String], $info: String) {
                        setOrganization(_id: $_id, image: $image, name: $name, address: $address, email: $email, phone: $phone, info: $info) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}