import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import CardOrder from '../components/order/CardOrder'
import pageListStyle from '../src/styleMUI/orders/orderList'
import {getOrders} from '../src/gql/order'
import { connect } from 'react-redux'

const Orders = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.invoices);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getOrders({search: search, sort: sort, filter: filter})).invoices)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterInvoice} sorts={data.sortInvoice} pageName='Заказы'>
            <Head>
                <title>Заказы</title>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <CardOrder setList={setList} key={element._id} element={element}/>
                ):null}
            </div>
        </App>
    )
})

Orders.getInitialProps = async function() {
    return {
        data: await getOrders({search: '', sort: '-updatedAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Orders);