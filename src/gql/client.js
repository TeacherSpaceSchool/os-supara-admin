import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getClients = async({search: search, sort: sort, filter: filter})=>{
    try{
        const client = new SingletonApolloClient().getClient()
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
                            user 
                                {_id role status phone}
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

export const getClient = async({_id: _id})=>{
    try{
        const client = new SingletonApolloClient().getClient()
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
                            user 
                                {_id role status phone}
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

export const setClient = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $phone: String, $city: String, $type: String, $image: Upload, $birthday: Date, $name: String, $email: String, $address: [[String]], $info: String, $newPass: String) {
                        setClient(_id: $_id, phone: $phone, city: $city, image: $image, type: $type, birthday: $birthday, name: $name, email: $email, address: $address, info: $info, newPass: $newPass) {
                             data
                        }
                    }`})
        let list = await getClients(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}