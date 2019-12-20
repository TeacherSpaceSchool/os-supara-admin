/* eslint-disable no-extra-boolean-cast */
import { urlGQL } from '../redux/constants/other';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { getJWT } from './lib'
import { setContext } from 'apollo-link-context';
import { ApolloLink  } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client'

export const getClientGQL = (req) => {
        const uploadLink = createUploadLink({
            uri: urlGQL,
            fetch: fetch,
            credentials: 'include'
        });
        const authLink = setContext((_, { headers }) => {
            return {
                headers: {
                    ...headers,
                    authorization: getJWT(req?req.headers.cookie:document.cookie) ? `Bearer ${getJWT(req?req.headers.cookie:document.cookie)}` : '',
                }
            }
        });
        const link = ApolloLink.from([
            authLink,
            uploadLink
        ]);
        const client = new ApolloClient({
            ssrMode: true,
            link: link,
            cache: new InMemoryCache(),
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'cache-and-network',
                    errorPolicy: 'ignore',
                },
                query: {
                    fetchPolicy: 'network-only',
                    errorPolicy: 'all',
                },
                mutate: {
                    errorPolicy: 'all',
                },
            },

        });
        return client
    }