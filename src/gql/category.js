import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getCategorys = async({search: search, sort: sort, filter: filter})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        categorys(search: $search, sort: $sort, filter: $filter) {
                            _id
                            image
                            name
                            status
                            createdAt
                          }
                          sortCategory {
                           name
                            field
                          }
                          filterCategory {
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

export const deleteCategory = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteCategory(_id: $_id) {
                             data
                        }
                    }`})
        return await getCategorys(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const onoffCategory = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        onoffCategory(_id: $_id) {
                             data
                        }
                    }`})
        return await getCategorys(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const addCategory = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($image: Upload!, $name: String!) {
                        addCategory(image: $image, name: $name) {
                             data
                        }
                    }`})
        return await getCategorys(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const setCategory = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $image: Upload, $name: String) {
                        setCategory(_id: $_id, image: $image, name: $name) {
                             data
                        }
                    }`})
        return await getCategorys(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}