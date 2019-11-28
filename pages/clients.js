import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import pageListStyle from '../src/styleMUI/client/clientList'
import {getClients} from '../src/gql/client'
import CardClient from '../components/client/CardClient'
import { connect } from 'react-redux'


const Client = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.clients);
    const { search, filter, sort } = props.app;
    useEffect(()=>{
        (async()=>{
            setList((await getClients({search: search, sort: sort, filter: filter})).clients)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterClient} sorts={data.sortClient} pageName='Клиенты'>
            <Head>
                <title>Клиенты</title>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <CardClient key={element._id} setList={setList} element={element}/>
                ):null}
            </div>
        </App>
    )
})

Client.getInitialProps = async function() {
    return {
        data: await getClients({search: '', sort: '-updatedAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
    }
}

export default connect(mapStateToProps)(Client);