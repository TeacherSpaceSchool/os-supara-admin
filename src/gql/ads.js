import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getAds = async()=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        ads {
                            _id
                            image
                            url
                            title
                            createdAt
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getAdss = async({search: search, sort: sort, filter: filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        adss(search: $search, sort: $sort, filter: $filter) {
                            _id
                            image
                            url
                            title
                            createdAt
                          }
                          sortAds {
                           name
                            field
                          }
                          filterAds {
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

export const deleteAds = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteAds(_id: $_id) {
                             data
                        }
                    }`})
        return await getAdss(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const addAds = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($image: Upload!, $url: String!, $title: String!) {
                        addAds(image: $image, url: $url, title: $title) {
                             data
                        }
                    }`})
        let list = await getAdss(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}

export const setAds = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $image: Upload, $url: String, $title: String) {
                        setAds(_id: $_id, image: $image, url: $url, title: $title) {
                             data
                        }
                    }`})
        let list = await getAdss(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}