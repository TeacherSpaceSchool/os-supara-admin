import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getOrders = async({search, sort, filter})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        invoices(search: $search, sort: $sort, filter: $filter) {
                            _id
                            updatedAt
                            orders 
                                { 
                                    _id
                                    updatedAt
                                    item
                                        {
                                            image
                                            _id
                                            name    
                                            organization
                                                {_id name}
                                        }
                                    count
                                    allPrice
                                    status
                                 }
                            client 
                                { 
                                    _id
                                    name
                                    email
                                    user 
                                        {_id phone} 
                                }
                            allPrice
                            info
                            address
                            paymentMethod
                            number
                            confirmationForwarder
                            confirmationClient
                        }
                        sortInvoice {
                            name
                            field
                        }
                        filterInvoice {
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

export const getOrder = async({_id})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        invoice(_id: $_id) {
                            _id
                            updatedAt
                            orders 
                                { 
                                    _id
                                    updatedAt
                                    item
                                        {
                                            image
                                            _id
                                            name    
                                            organization
                                                {_id name}
                                        }
                                    count
                                    allPrice
                                    status
                                 }
                            client 
                                { 
                                    _id
                                    name
                                    email
                                    user 
                                        {phone} 
                                }
                            allPrice
                            info
                            address
                            paymentMethod
                            number
                            confirmationForwarder
                            confirmationClient
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const addOrders = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($info: String, $paymentMethod: String, $address: [[String]]) {
                        addOrders(info: $info, paymentMethod: $paymentMethod, address: $address) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const cancelOrders = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        cancelOrders(_id: $_id) {
                             data
                        }
                    }`})
        return await getOrders(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const approveOrders = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($invoices: [ID]!, $route: ID) {
                        approveOrders(invoices: $invoices, route: $route) {
                             data
                        }
                    }`})
        return await getOrders(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}
