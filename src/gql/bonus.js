import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getBonuses = async({search: search, sort: sort}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort},
                query: gql`
                    query ($search: String!, $sort: String!) {
                        bonuses(search: $search, sort: $sort) {
                            _id
                            createdAt
                            target
                            bonus
                            organization
                                {_id name image}
                        }
                        sortBonus {
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


export const setBonus = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $target: Int!, $bonus: Int!) {
                        setBonus(_id: $_id, target: $target, bonus: $bonus) {
                             data
                        }
                    }`})
        let list = await getBonuses(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}