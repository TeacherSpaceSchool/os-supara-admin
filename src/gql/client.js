import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getClients = async({search: search, sort: sort, filter: filter, date: date}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter, date: date},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!, $date: String) {
                        clients(search: $search, sort: $sort, filter: $filter, date: $date) {
                            _id
                            image
                            createdAt
                            name
                            email
                            address
                            lastActive
                            device
                            notification
                            info
                            reiting
                            city
                            phone
                            organization 
                                {_id name}
                            user 
                                {_id role status login}
                          }
                          sortClient {
                           name
                            field
                          }
                          filterClient {
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

export const getClientsWithoutDistrict = async(organization, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID) {
                        clientsWithoutDistrict(organization: $organization) {
                            _id
                            image
                            createdAt
                            name
                            email
                            address
                            lastActive
                            device
                            notification
                            info
                            reiting
                            city
                            phone
                            organization 
                                {_id name}
                            user 
                                {_id role status login}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getClient = async({_id: _id}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        client(_id: $_id) {
                            _id
                            image
                            createdAt
                            name
                            email
                            address
                            info
                            reiting
                            city
                            phone
                            organization 
                                {_id name}
                            user 
                                {_id role status login}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const onoffClient = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        onoffClient(_id: $_id) {
                             data
                        }
                    }`})
        return await getClients(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const deleteClient = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteClient(_id: $_id) {
                             data
                        }
                    }`})
        return await getClients(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const setClient = async(element, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $phone: [String], $login: String, $device: String, $city: String, $image: Upload, $name: String, $email: String, $address: [[String]], $info: String, $newPass: String) {
                        setClient(_id: $_id, device: $device, phone: $phone, login: $login, city: $city, image: $image, name: $name, email: $email, address: $address, info: $info, newPass: $newPass) {
                             data
                        }
                    }`})
        /*let list = await getClients(new SingletonStore().getStore().getState().app)
        return list*/
    } catch(err){
        console.error(err)
    }
}

export const addClient = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($image: Upload, $name: String!, $email: String, $city: String!, $address: [[String]]!, $phone: [String]!, $info: String, $password: String!, $login: String!) {
                        addClient(image: $image, name: $name, email: $email, city: $city, address: $address, phone: $phone, info: $info, password: $password, login: $login) {
                             data
                        }
                    }`})
        //return await getEmployments(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}