import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';

export const getReturnedsTrash = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!,  $skip: Int) {
                        returnedsTrash(search: $search, skip: $skip) {
                            _id
                            createdAt
                            updatedAt
                            items
                                {
                                    _id
                                    item
                                    count
                                    allPrice
                                    allTonnage
                                    allSize
                                    weight
                                    size
                                    price
                                }
                            allTonnage
                            allSize
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
                            editor
                            number
                            confirmationForwarder
                            district
                            agent
                                {_id name}
                            distributer
                                {_id name}
                            organization
                                {_id name}
                            cancelForwarder
                            sync
                            del
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getReturneds = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!, $sort: String!, $date: String!, $skip: Int) {
                        returneds(search: $search, sort: $sort, date: $date, skip: $skip) {
                            _id
                            createdAt
                            updatedAt
                            items
                                {
                                    _id
                                    item
                                    count
                                    allPrice
                                    allTonnage
                                    allSize
                                    weight
                                    size
                                    price
                                }
                            allTonnage
                            allSize
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
                            editor
                            number
                            confirmationForwarder
                            district
                            agent
                                {_id name}
                            distributer
                                {_id name}
                            organization
                                {_id name}
                            cancelForwarder
                            sync
                        }
                        sortReturned {
                            name
                            field
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getReturnedsTrashSimpleStatistic = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!) {
                        returnedsTrashSimpleStatistic(search: $search) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getReturnedsSimpleStatistic = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!, $date: String!) {
                        returnedsSimpleStatistic(search: $search, date: $date) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getReturnedHistorys = async(returned, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {returned: returned},
                query: gql`
                    query ($returned: ID!) {
                        returnedHistorys(returned: $returned) {
                            createdAt
                            editor
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const addReturned = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($info: String, $address: [[String]], $organization: ID!, $client: ID!, $items: [ReturnedItemsInput]) {
                        addReturned(info: $info, address: $address, organization: $organization, client: $client, items: $items) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const deleteReturneds = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteReturneds(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const restoreReturneds = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        restoreReturneds(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setReturned = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($items: [ReturnedItemsInput], $returned: ID, $confirmationForwarder: Boolean, $cancelForwarder: Boolean) {
                        setReturned(items: $items, returned: $returned, confirmationForwarder: $confirmationForwarder, cancelForwarder: $cancelForwarder) {
                            _id
                            createdAt
                            updatedAt
                            items
                                {
                                    _id
                                    item
                                    count
                                    allPrice
                                    allTonnage
                                    allSize
                                    weight
                                    size
                                    price
                                }
                            allTonnage
                            allSize
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
                            editor
                            number
                            confirmationForwarder
                            district
                            agent
                                {_id name}
                            distributer
                                {_id name}
                            organization
                                {_id name}
                            cancelForwarder
                            sync
                        }
                    }`})
        return res.data.setReturned
    } catch(err){
        console.error(err)
    }
}

export const subscriptionReturned = gql`
  subscription  {
    reloadReturned {
      who
      returned {
                             
                            _id
                            createdAt
                            updatedAt
                            items
                                {
                                    _id
                                    item
                                    count
                                    allPrice
                                    allTonnage
                                    allSize
                                }
                            allTonnage
                            allSize
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
                            editor
                            number
                            confirmationForwarder
                            district
                            agent
                                {_id name}
                            distributer
                                {_id name}
                            organization
                                {_id name}
                            cancelForwarder
                            sync
                        }
      type
    }
  }
`