import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getAdsOrganizations = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        adsOrganizations {
                            _id
                            image
                            name
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

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

export const getAdss = async({search: search, organization: organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, organization: organization},
                query: gql`
                    query ($search: String!, $organization: ID!) {
                        adss(search: $search, organization: $organization) {
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

export const getAdssTrash = async({search: search, organization: organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, organization: organization},
                query: gql`
                    query ($search: String!, $organization: ID!) {
                        adssTrash(search: $search, organization: $organization) {
                            _id
                            image
                            url
                            title
                            del
                            createdAt
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteAds = async(ids, organization)=>{
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
        return await getAdss({...new SingletonStore().getStore().getState().app, organization: organization})
    } catch(err){
        console.error(err)
    }
}

export const restoreAds = async(ids, organization)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        restoreAds(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addAds = async(element, organization)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($image: Upload!, $url: String!, $title: String!, $organization: ID!) {
                        addAds(image: $image, url: $url, title: $title, organization: $organization) {
                             data
                        }
                    }`})
        return await getAdss({...new SingletonStore().getStore().getState().app, organization: organization})
    } catch(err){
        console.error(err)
    }
}

export const setAds = async(element, organization)=>{
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
        return await getAdss({...new SingletonStore().getStore().getState().app, organization: organization})
    } catch(err){
        console.error(err)
    }
}