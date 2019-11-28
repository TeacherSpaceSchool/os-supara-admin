import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import CardRoute from '../components/route/CardRoute'
import pageListStyle from '../src/styleMUI/route/routeList'
import {getRoutes} from '../src/gql/route'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

const Routes = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.routes);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getRoutes({search: search, sort: sort, filter: filter})).routes)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterRoute} sorts={data.sortRoute} pageName='Маршрутные листы'>
            <Head>
                <title>Маршрутные листы</title>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <CardRoute setList={setList} key={element._id} element={element}/>
                ):null}
            </div>
            {['admin', 'организация', 'менеджер'].includes(profile.role)?
                <Link href='/route/[id]' as={`/route/new`}>
                    <Fab color='primary' aria-label='add' className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
                :
                null
            }
        </App>
    )
})

Routes.getInitialProps = async function() {
    return {
        data: await getRoutes({search: '', sort: '-updatedAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Routes);