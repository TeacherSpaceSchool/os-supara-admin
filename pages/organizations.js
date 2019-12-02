import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getOrganizations } from '../src/gql/organization'
import pageListStyle from '../src/styleMUI/organization/orgaizationsList'
import CardOrganization from '../components/organization/CardOrganization'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

const Organization = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.organizations);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getOrganizations({search: search, sort: sort, filter: filter})).organizations)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterOrganization} sorts={data.sortOrganization} pageName='Организации'>
            <Head>
                <title>Организации</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Организации' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`http://${process.env.URL}/static/512x512.png`} />
                <meta property="og:url" content={`http://${process.env.URL}/organizations`} />
                <link rel='canonical' href={`http://${process.env.URL}/organizations`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <CardOrganization key={element._id} setList={setList} element={element}/>
                ):null}
            </div>
            {profile.role==='admin'?
                <Link href='/organization/[id]' as={`/organization/new`}>
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

Organization.getInitialProps = async function() {
    return {
        data: await getOrganizations({search: '', sort: '-updatedAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);