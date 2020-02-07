import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getOrders = async({search, sort, filter, date}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
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
                            allTonnage
                            allSize
                            orders 
                                { 
                                    _id
                                    allTonnage
                                    allSize
                                    createdAt
                                    item
                                        {
                                            image
                                            _id
                                            name    
                                            stock 
                                            apiece
                                            priotiry
                                            price
                                            packaging
                                            weight
                                            size
                                            organization
                                                {_id name minimumOrder consignation}
                                        }
                                    count
                                    allPrice
                                    consignment
                                    returned
                                    consignmentPrice
                                    status
                                 }
                            client 
                                { 
                                    _id
                                    name
                                    email
                                    phone
                                    type 
                                    user 
                                        {_id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            number
                            confirmationForwarder
                            confirmationClient
                            cancelClient
                            cancelForwarder
                            paymentConsignation
                            taken
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
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getOrdersForRouting = async(organization)=>{
    try{
        const client = new SingletonApolloClient().getClient();
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query($organization: ID){
                        invoicesForRouting(organization: $organization){
                            _id
                            agent 
                                {_id name}
                            createdAt
                            allTonnage
                            allSize
                            orders 
                                { 
                                    _id
                                    allTonnage
                                    allSize
                                    createdAt
                                    item
                                        {
                                            image
                                            _id
                                            name    
                                            stock 
                                            apiece
                                            priotiry
                                            packaging
                                            weight
                                            size
                                            price
                                            organization
                                                {_id name consignation}
                                        }
                                    count
                                    allPrice
                                    consignment
                                    returned
                                    consignmentPrice
                                    status
                                 }
                            client 
                                { 
                                    _id
                                    name
                                    email
                                    phone 
                                    type 
                                    user 
                                        { _id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            number
                            confirmationForwarder
                            confirmationClient
                            cancelClient
                            cancelForwarder
                            paymentConsignation
                            taken
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
                            allTonnage
                            allSize
                            orders 
                                { 
                                    _id
                                    createdAt
                                    allTonnage
                                    allSize
                                    item
                                        {
                                            image
                                            _id
                                            name    
                                            stock 
                                            apiece
                                            priotiry
                                            packaging
                                            weight
                                            size
                                            price
                                            organization
                                                {_id name consignation}
                                        }
                                    count
                                    allPrice
                                    consignment
                                    returned
                                    consignmentPrice
                                    status
                                 }
                            client 
                                { 
                                    _id
                                    name
                                    email
                                    phone
                                    type 
                                    user 
                                        {_id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            number
                            confirmationForwarder
                            cancelClient
                            cancelForwarder
                            paymentConsignation
                            confirmationClient
                            taken
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

export const deleteOrders = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteOrders(_id: $_id) {
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

export const setInvoice = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($taken: Boolean, $invoice: ID!, $confirmationClient: Boolean, $confirmationForwarder: Boolean, $cancelClient: Boolean, $cancelForwarder: Boolean, $paymentConsignation: Boolean) {
                        setInvoice(taken: $taken, invoice: $invoice, confirmationClient: $confirmationClient, confirmationForwarder: $confirmationForwarder, cancelClient: $cancelClient, cancelForwarder: $cancelForwarder, paymentConsignation: $paymentConsignation) {
                             data
                        }
                    }`})
        //return await getOrders(new SingletonStore().getStore().getState().app)
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

export const subscriptionOrder = gql`
  subscription  {
    reloadOrder {
      who
    }
  }
`