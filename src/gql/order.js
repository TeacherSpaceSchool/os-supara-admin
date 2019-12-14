import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getOrders = async({search, sort, filter, date})=>{
    try{
        const client = new SingletonApolloClient().getClient();
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter, date: date},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!, $date: String!) {
                        invoices(search: $search, sort: $sort, filter: $filter, date: $date) {
                            _id
                            agent 
                                {_id name}
                            createdAt
                            orders 
                                { 
                                    _id
                                    createdAt
                                    item
                                        {
                                            image
                                            _id
                                            name    
                                            stock 
                                            price
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
                                    phone 
                                    user 
                                        {_id }
                                }
                            allPrice
                            info
                            address
                            paymentMethod
                            number
                            confirmationForwarder
                            confirmationClient
                            dateDelivery
                            usedBonus
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
        console.log(res.data)
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
                            createdAt
                            agent: 
                                {_id name}
                            orders 
                                { 
                                    _id
                                    createdAt
                                    item
                                        {
                                            image
                                            _id
                                            name    
                                            stock 
                                            price
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
                                    phone
                                    user 
                                        {_id }
                                }
                            allPrice
                            info
                            address
                            paymentMethod
                            number
                            confirmationForwarder
                            confirmationClient
                            dateDelivery
                            usedBonus
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
                    mutation ($info: String, $usedBonus: Boolean, $paymentMethod: String, $address: [[String]], $organization: ID!, $client: ID!) {
                        addOrders(usedBonus: $usedBonus, info: $info, paymentMethod: $paymentMethod, address: $address, organization: $organization, client: $client) {
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
                    mutation ($_id: [ID]!, $invoice: ID) {
                        cancelOrders(_id: $_id, invoice: $invoice) {
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

export const setOrder = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($orders: [OrderInput], $invoice: ID) {
                        setOrder(orders: $orders, invoice: $invoice) {
                             data
                        }
                    }`})
        return await getOrders(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}
