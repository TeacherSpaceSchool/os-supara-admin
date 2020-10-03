import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getUsers = async(element, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: element,
                query: gql`
                    query ($search: String!, $filter: String!, $skip: Int) {
                        users(search: $search, filter: $filter, skip: $skip) {
                            _id
                            createdAt
                            login
                            name
                            role
                            status
                            del
                            GUID
                        }
                        filterUser {
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

export const getSuppliers = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        suppliers {
                            _id
                            createdAt
                            login
                            name
                            role
                            status
                            del
                            GUID
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getHeads = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        heads {
                            _id
                            createdAt
                            login
                            name
                            role
                            status
                            del
                            GUID
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getSpecialists = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        specialists {
                            _id
                            createdAt
                            login
                            name
                            role
                            status
                            del
                            GUID
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUsersTrash = async(element, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: element,
                query: gql`
                    query ($search: String!) {
                        usersTrash(search: $search) {
                            _id
                            createdAt
                            login
                            name
                            role
                            status
                            del
                            GUID
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUser = async(element, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: element,
                query: gql`
                    query (_id: ID!) {
                        user(_id: $_id) {
                            _id
                            createdAt
                            login
                            name
                            role
                            status
                            del
                            GUID
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteUser = async(_id)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: _id},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteUser(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const restoreUser = async(_id)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: _id},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        restoreUser(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const onoffUser = async(_id)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: _id},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        onoffUser(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addUser = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($login: String!, $GUID: String, $name: String!, $role: String!, $password: String!) {
                        addUser(login: $login, GUID: $GUID, name: $name, role: $role, password: $password) {
                            _id
                            createdAt
                            login
                            name
                            role
                            status
                            del
                        }
                    }`})
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const setUser = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $GUID: String, $login: String, $name: String, $role: String, $password: String) {
                        setUser(_id: $_id, GUID: $GUID, login: $login, name: $name, role: $role, password: $password) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}