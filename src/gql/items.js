import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getItems = async({subCategory,  search,  sort,  filter})=>{
    try{
        const client = new SingletonApolloClient().getClient()

        let res = await client
            .query({
                variables: {subCategory: subCategory, search: search, sort: sort, filter: filter},
                query: gql`
                    query ($subCategory: ID!,$search: String!, $sort: String!, $filter: String!) {
                        items(subCategory: $subCategory, search: $search, sort: $sort, filter: $filter) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                        sortItem {
                            name
                            field
                        }
                        filterItem {
                           name
                           value
                        }
                        subCategory(_id: $subCategory) {
                           _id
                           name
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const favorites = async({ search})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: { search: search },
                query: gql`
                    query ($search: String!) {
                        favorites(search: $search) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getItem = async({_id})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        item(_id: $_id) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteItem = async(ids, subCategory)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteItem(_id: $_id) {
                             data
                        }
                    }`})
        return await getItems({subCategory: subCategory, ...(new SingletonStore().getStore().getState().app)})
    } catch(err){
        console.error(err)
    }
}

export const onoffItem = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        onoffItem(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const favoriteItem = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        favoriteItem(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addFavoriteItem = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        addFavoriteItem(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addItem = async(element, subCategory)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {...element, subCategory: subCategory},
            mutation : gql`
                    mutation ($stock: Int!, $name: String!, $image: Upload, $info: String!, $price: Int!, $subCategory: ID!, $organization: ID!, $hit: Boolean!, $latest: Boolean!) {
                        addItem(stock: $stock, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setItem = async(element, subCategory)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {...element},
            mutation : gql`
                    mutation ($_id: ID!, $stock: Int, $name: String, $image: Upload, $info: String, $price: Int, $subCategory: ID, $organization: ID, $hit: Boolean, $latest: Boolean) {
                        setItem(_id: $_id, stock: $stock, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}