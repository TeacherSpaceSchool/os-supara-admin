import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const outXMLClientShoros = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {...arg},
                query: gql`
                    query ($skip: Int) {
                        outXMLClientShoros(skip: $skip) {
                            _id
                            createdAt
                            guid
                            client
                                {name _id address}
                            exc
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const statisticOutXMLClientShoros = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query{
                        statisticOutXMLClientShoros
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const outXMLShoros = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {...arg},
                query: gql`
                    query ($search: String!, $filter: String!, $skip: Int) {
                        outXMLShoros(search: $search, filter: $filter, skip: $skip) {
                            _id
                            createdAt
                            guid
                            date
                            number
                            client
                            agent
                            forwarder
                            status
                            exc
                        }
                        filterOutXMLShoro {
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

export const statisticOutXMLShoros = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query{
                        statisticOutXMLShoros
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const statisticOutXMLReturnedShoros = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query{
                        statisticOutXMLReturnedShoros
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const outXMLReturnedShoros = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {...arg},
                query: gql`
                    query ($search: String!, $filter: String!, $skip: Int) {
                        outXMLReturnedShoros(search: $search, filter: $filter, skip: $skip) {
                            _id
                            createdAt
                            guid
                            date
                            number
                            client
                            agent
                            forwarder
                            status
                            exc
                        }
                        filterOutXMLShoro {
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

export const restoreOutXMLShoro = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: ID!) {
                        restoreOutXMLShoro(_id: $_id) {
                            _id
                            createdAt
                            guid
                            date
                            number
                            client
                            agent
                            forwarder
                            status
                            exc
                        }
                    }`})
        return res.data.restoreOutXMLShoro
    } catch(err){
        console.error(err)
    }
}

export const setDateOutXMLShoro = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: ID!, $date: String!) {
                        setDateOutXMLShoro(_id: $_id, date: $date) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const deleteOutXMLClientShoro = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: ID!) {
                        deleteOutXMLClientShoro(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const deleteOutXMLShoro = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: ID!) {
                        deleteOutXMLShoro(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const deleteOutXMLShoroAll = async()=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            mutation : gql`
                    mutation {
                        deleteOutXMLShoroAll {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const restoreOutXMLReturnedShoro = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: ID!) {
                        restoreOutXMLReturnedShoro(_id: $_id) {
                            _id
                            createdAt
                            guid
                            date
                            number
                            client
                            agent
                            forwarder
                            status
                            exc
                        }
                    }`})
        return res.data.restoreOutXMLReturnedShoro
    } catch(err){
        console.error(err)
    }
}

export const setDateOutXMLReturnedShoro = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: ID!, $date: String!) {
                        setDateOutXMLReturnedShoro(_id: $_id, date: $date) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const deleteOutXMLReturnedShoro = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: ID!) {
                        deleteOutXMLReturnedShoro(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const deleteOutXMLReturnedShoroAll = async()=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            mutation : gql`
                    mutation {
                        deleteOutXMLReturnedShoroAll {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}