import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';

export const getStatisticOrder = async({company, dateStart, dateType}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String) {
                        statisticOrder(company: $company, dateStart: $dateStart, dateType: $dateType) {
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

export const getStatisticClient = async({company, dateStart, dateType}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String) {
                        statisticClient(company: $company, dateStart: $dateStart, dateType: $dateType) {
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

export const getStatisticClientActivity = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        statisticClientActivity {
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

export const getUnloadingOrders = async({organization, dateStart}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization, dateStart: dateStart},
                query: gql`
                    query ($organization: ID!, $dateStart: Date!) {
                        unloadingOrders(organization: $organization, dateStart: $dateStart) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticOrderChart = async({company, dateStart, dateType}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String) {
                        statisticOrderChart(company: $company, dateStart: $dateStart, dateType: $dateType) {
                            label
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingClients = async({organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        unloadingClients(organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticItem = async({company, dateStart, dateType}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String) {
                        statisticItem(company: $company, dateStart: $dateStart, dateType: $dateType) {
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
                variables: {organization: organization, item: item},
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

export const uploadingClients = async({document, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .mutate({
                variables: {document: document, organization: organization},
                mutation: gql`
                    mutation ($document: Upload!, $organization: ID!) {
                        uploadingClients(document: $document, organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const uploadingDistricts = async({document, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .mutate({
                variables: {document: document, organization: organization},
                mutation: gql`
                    mutation ($document: Upload!, $organization: ID!) {
                        uploadingDistricts(document: $document, organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

