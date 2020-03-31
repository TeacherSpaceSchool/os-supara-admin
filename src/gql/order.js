import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getOrders = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!, $date: String!, $skip: Int) {
                        invoices(search: $search, sort: $sort, filter: $filter, date: $date, skip: $skip) {
                            _id
                            agent 
                                {_id name}
                            createdAt
                            updatedAt
                            allTonnage
                            allSize
                            orders 
                                { 
                                    _id
                                    allTonnage
                                    allSize
                                    createdAt
                                    updatedAt
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
                                    user 
                                        {_id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            editor
                            number
                            confirmationForwarder
                            confirmationClient
                            cancelClient
                            distributer
                                {_id name}
                            cancelForwarder
                            paymentConsignation
                            taken
                            sync
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

export const getOrdersTrash = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!, $skip: Int) {
                        invoicesTrash(search: $search, skip: $skip) {
                            _id
                            agent 
                                {_id name}
                            createdAt
                            updatedAt
                            allTonnage
                            allSize
                            del
                            orders 
                                { 
                                    _id
                                    allTonnage
                                    allSize
                                    createdAt
                                    updatedAt
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
                                    user 
                                        {_id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            editor
                            number
                            confirmationForwarder
                            confirmationClient
                            cancelClient
                            distributer
                                {_id name}
                            cancelForwarder
                            paymentConsignation
                            taken
                            sync
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

export const getInvoicesSimpleStatistic = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!, $filter: String!, $date: String!) {
                        invoicesSimpleStatistic(search: $search, filter: $filter, date: $date) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getInvoicesTrashSimpleStatistic = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!) {
                        invoicesTrashSimpleStatistic(search: $search) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getOrderHistorys = async(invoice, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {invoice: invoice},
                query: gql`
                    query ($invoice: ID!) {
                        orderHistorys(invoice: $invoice) {
                            createdAt
                            orders
                                {item count consignment returned}
                            editor
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
                            updatedAt
                            allTonnage
                            allSize
                            orders 
                                { 
                                    _id
                                    allTonnage
                                    allSize
                                    createdAt
                                    updatedAt
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
                                    user 
                                        { _id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            editor
                            number
                            confirmationForwarder
                            confirmationClient
                            cancelClient
                            distributer
                                {_id name}
                            cancelForwarder
                            paymentConsignation
                            taken
                            sync
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
                            updatedAt
                            agent
                                {_id name}
                            allTonnage
                            allSize
                            orders 
                                { 
                                    _id
                                    createdAt
                                    updatedAt
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
                                    user 
                                        {_id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            editor
                            number
                            confirmationForwarder
                            cancelClient
                            distributer
                                {_id name}
                            cancelForwarder
                            paymentConsignation
                            confirmationClient
                            taken
                            sync
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
    } catch(err){
        console.error(err)
    }
}

export const restoreOrders = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        restoreOrders(_id: $_id) {
                             data
                        }
                    }`})
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
        let res = await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($orders: [OrderInput], $invoice: ID) {
                        setOrder(orders: $orders, invoice: $invoice) {
                             _id
                            createdAt
                            updatedAt
                            agent
                                {_id name}
                            allTonnage
                            allSize
                            orders 
                                { 
                                    _id
                                    createdAt
                                    updatedAt
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
                                    user 
                                        {_id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            editor
                            number
                            confirmationForwarder
                            cancelClient
                            distributer
                                {_id name}
                            cancelForwarder
                            paymentConsignation
                            confirmationClient
                            taken
                            sync
                            dateDelivery
                            usedBonus
                        }
                    }`})
        return res.data.setOrder
    } catch(err){
        console.error(err)
    }
}

export const subscriptionOrder = gql`
  subscription  {
    reloadOrder {
      who
      invoice {
                             _id
                            createdAt
                            updatedAt
                            agent
                                {_id name}
                            allTonnage
                            allSize
                            orders 
                                { 
                                    _id
                                    createdAt
                                    updatedAt
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
                                    user 
                                        {_id }
                                }
                            allPrice
                            consignmentPrice
                            info
                            address
                            paymentMethod
                            editor
                            number
                            confirmationForwarder
                            cancelClient
                            distributer
                                {_id name}
                            cancelForwarder
                            paymentConsignation
                            confirmationClient
                            taken
                            sync
                            dateDelivery
                            usedBonus
                        }
      type
    }
  }
`