import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getBlogs = async({search: search, sort: sort, count: count}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, count: count},
                query: gql`
                    query ($search: String!, $sort: String!, $count: Int!) {
                        blogs(search: $search, sort: $sort, count: $count) {
                            _id
                            image
                            text
                            title
                            createdAt
                          }
                          sortBlog {
                           name
                            field
                          }
                          filterBlog {
                           name
                           value
                          }
                    }`,
            })
        return res.data.blogs
    } catch(err){
        console.error(err)
    }
}

export const deleteBlog = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteBlog(_id: $_id) {
                             data
                        }
                    }`})
        return await getBlogs(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const addBlog = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($image: Upload!, $text: String!, $title: String!) {
                        addBlog(image: $image, text: $text, title: $title) {
                             data
                        }
                    }`})
        let list = await getBlogs(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}

export const setBlog = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $image: Upload, $text: String, $title: String) {
                        setBlog(_id: $_id, image: $image, text: $text, title: $title) {
                             data
                        }
                    }`})
        let list = await getBlogs(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}