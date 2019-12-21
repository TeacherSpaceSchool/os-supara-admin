import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getSubCategorys = async({category,  search,  sort,  filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {category: category, search: search, sort: sort, filter: filter},
                query: gql`
                    query ($category: ID!,$search: String!, $sort: String!, $filter: String!) {
                        subCategorys(category: $category, search: $search, sort: $sort, filter: $filter) {
                            _id
                            category
                                {_id name}
                            name
                            status
                            createdAt
                          }
                          sortSubCategory {
                           name
                            field
                          }
                          filterSubCategory {
                           name
                           value
                          }
                          category(_id: $category) {
                                _id
                                image
                                name
                                status
                                createdAt
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteSubCategory = async(ids, category)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteSubCategory(_id: $_id) {
                             data
                        }
                    }`})
        return await getSubCategorys({category: category, ...(new SingletonStore().getStore().getState().app)})
    } catch(err){
        console.error(err)
    }
}

export const onoffSubCategory = async(ids, category)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        onoffSubCategory(_id: $_id) {
                             data
                        }
                    }`})
        return await getSubCategorys({category: category, ...(new SingletonStore().getStore().getState().app)})
    } catch(err){
        console.error(err)
    }
}

export const addSubCategory = async(element, category)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {...element, category: category},
            mutation : gql`
                    mutation ($category: ID!, $name: String!) {
                        addSubCategory(category: $category, name: $name) {
                             data
                        }
                    }`})
        return await getSubCategorys({category: category, ...(new SingletonStore().getStore().getState().app)})
    } catch(err){
        console.error(err)
    }
}

export const setSubCategory = async(element, category)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {...element},
            mutation : gql`
                    mutation ($_id: ID!, $name: String, $category: ID) {
                        setSubCategory(_id: $_id, name: $name, category: $category) {
                             data
                        }
                    }`})
        return await getSubCategorys({category: category, ...(new SingletonStore().getStore().getState().app)})
    } catch(err){
        console.error(err)
    }
}