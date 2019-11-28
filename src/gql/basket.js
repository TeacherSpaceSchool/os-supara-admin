import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';
import {
    setCountBasket
} from '../../redux/actions/app'

export const getBasket = async()=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query{
                        baskets {
                            _id
                            updatedAt
                            item 
                                {_id name stock image price}
                            count
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getCountBasket = async()=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.query({
            query : gql`
                    query {
                        countBasket 
                    }`})
        new SingletonStore().getStore().dispatch(setCountBasket(res.data.countBasket))
    } catch(err){
        console.error(err)
    }
}

export const deleteBasket = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteBasket(_id: $_id) {
                             data
                        }
                    }`})
        await getCountBasket()
        return await getBasket(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const addBasket = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($item: ID!, $count: Int!) {
                        addBasket(item: $item, count: $count) {
                             data
                        }
                    }`})
        await getCountBasket()
    } catch(err){
        console.error(err)
    }
}

export const setBasket = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $count: Int!) {
                        setBasket(_id: $_id, count: $count) {
                             data
                        }
                    }`})
        await getCountBasket()
        return await getBasket(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}