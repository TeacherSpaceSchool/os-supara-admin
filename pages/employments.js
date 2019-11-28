import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import pageListStyle from '../src/styleMUI/employment/employmentList'
import {getEmployments} from '../src/gql/employment'
import CardEmployment from '../components/employment/CardEmployment'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

const Employment = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.employments);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getEmployments({search: search, sort: sort, filter: filter})).employments)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterEmployment} sorts={data.sortEmployment} pageName='Сотрудники'>
            <Head>
                <title>Сотрудники</title>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <CardEmployment key={element._id} setList={setList} element={element}/>
                ):null}
            </div>
            {['admin', 'организация'].includes(profile.role)?
                <Link href='/employment/[id]' as={`/employment/new`}>
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

Employment.getInitialProps = async function() {
    return {
        data: await getEmployments({search: '', sort: '-updatedAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Employment);