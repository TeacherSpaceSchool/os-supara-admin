import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getCategorys } from '../src/gql/category'
import pageListStyle from '../src/styleMUI/category/categoryList'
import CardCategory from '../components/category/CardCategory'

const Index = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.categorys);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getCategorys({search: search, sort: sort, filter: filter})).categorys)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterCategory} sorts={data.sortCategory} pageName='Товары'>
            <Head>
                <title>Товары</title>
            </Head>
            <div className={classes.page}>
                {profile.role==='admin'?
                    <>
                    <CardCategory setList={setList}/>
                    </>
                    :
                    null
                }
                <CardCategory element={{image: '/static/add.png', name: 'Все подкатегории', _id: 'all'}} setList='all'/>
                {list?list.map((element)=>
                    element.name!=='Не задано'?
                        <CardCategory key={element._id} setList={setList} element={element}/>
                        :
                        null
                ):null}
            </div>
        </App>
    )
})

Index.getInitialProps = async function() {
    return {
        data: await getCategorys({search: '', sort: '-updatedAt', filter: ''})
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);