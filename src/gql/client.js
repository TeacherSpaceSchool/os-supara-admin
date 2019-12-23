import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getClients = async({search: search, sort: sort, filter: filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        clients(search: $search, sort: $sort, filter: $filter) {
                            _id
                            image
                            createdAt
                            name
                            email
                            address
                            info
                            reiting
                            birthday
                            type
                            city
                            patent 
                            passport 
                            certificate
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
                            birthday
                            city
                            type
                            patent 
                            passport 
                            certificate
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

export const setClient = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $phone: [String], $login: String, $city: String, $type: String, $image: Upload, $patent: Upload, $passport: Upload, $certificate: Upload, $birthday: Date, $name: String, $email: String, $address: [[String]], $info: String, $newPass: String) {
                        setClient(_id: $_id, phone: $phone, login: $login, city: $city, image: $image, patent: $patent, passport: $passport, certificate: $certificate, type: $type, birthday: $birthday, name: $name, email: $email, address: $address, info: $info, newPass: $newPass) {
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
                    mutation ($image: Upload, $name: String!, $birthday: Date, $email: String, $city: String!, $address: [[String]]!, $phone: [String]!, $info: String, $type: String, $patent: Upload, $passport: Upload, $certificate: Upload) {
                        addClient(image: $image, name: $name, birthday: $birthday, email: $email, city: $city, address: $address, phone: $phone, info: $info, type: $type, patent: $patent, passport: $passport, certificate: $certificate) {
                             data
                        }
                    }`})
        //return await getEmployments(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}