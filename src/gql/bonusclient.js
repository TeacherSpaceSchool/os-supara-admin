import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getBonusesClient = async({search: search, sort: sort}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort},
                query: gql`
                    query ($search: String!, $sort: String!) {
                        bonusesClient(search: $search, sort: $sort) {
                            _id
                            createdAt
                            current
                            addedBonus
                            bonus {
                                _id
                                target
                                bonus
                                organization
                                    {_id name image}
                                }
                            client {
                                _id
                                image
                                name
                                user 
                                    {_id}
                            }
                        }
                        sortBonusClient {
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