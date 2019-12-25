import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';
import {
    setCountBasket
} from '../../redux/actions/app'

export const getBasket = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client.query({
                query: gql`
                    query{
                        baskets {
                            _id
                            createdAt
                            item 
                                {
                                    _id 
                                    name 
                                    stock 
                                    image 
                                    packaging
                                    price
                                    weight
                                    organization
                                        {_id name minimumOrder}
                                }
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
        let res;
        if(new SingletonStore().getStore().getState().user.authenticated)
            res = await client.query({
                query : gql`
                    query {
                        countBasket 
                    }`
            })
        else if(localStorage.basket) {
            let basket = JSON.parse(localStorage.basket)
            res = { data: { countBasket: basket.length}}
        }
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
        return await getBasket()
    } catch(err){
        console.error(err)
    }
}

export const deleteBasketAll = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation{
                        deleteBasketAll{
                             data
                        }
                    }`})
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
        return await getBasket()
    } catch(err){
        console.error(err)
    }
}