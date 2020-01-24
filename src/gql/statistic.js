import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';

export const getStatisticClient = async({company: company, dateStart: dateStart, dateEnd: dateEnd}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateEnd: dateEnd},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateEnd: Date) {
                        statisticClient(company: $company, dateStart: $dateStart, dateEnd: $dateEnd) {
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

export const getStatisticClientGeo = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        statisticClientGeo {
                            client
                            address
                            data
                        }
                    }`,
            })
        console.log(res)
        return res.data
    } catch(err){
        console.error(err)
    }
}

