import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';

export const getStatisticClient = async({company: company, dateStart: dateStart}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart},
                query: gql`
                    query ($company: String, $dateStart: Date) {
                        statisticClient(company: $company, dateStart: $dateStart) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticItem = async({company: company, dateStart: dateStart}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart},
                query: gql`
                    query ($company: String, $dateStart: Date) {
                        statisticItem(company: $company, dateStart: $dateStart) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticClientGeo = async({organization, item}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query($organization: ID, $item: ID) {
                        statisticClientGeo(organization: $organization, item: $item) {
                            client
                            address
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getActiveItem = async({organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query($organization: ID!) {
                        activeItem(organization: $organization) {
                            name
                            _id
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getActiveOrganization = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        activeOrganization {
                            name
                            _id
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

