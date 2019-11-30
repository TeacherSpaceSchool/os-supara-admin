import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getSubCategorys } from '../../src/gql/subcategory'
import { getCategorys } from '../../src/gql/category'
import pageListStyle from '../../src/styleMUI/subcategory/subcategoryList'
import SubCardCategory from '../../components/subcategory/SubCardCategory'
import { useRouter } from 'next/router'

const Subcategory = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const router = useRouter()
    let [list, setList] = useState(data.subCategorys);
    let [categorys, setCategorys] = useState([]);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            if(profile.role==='admin')
                setCategorys((await getCategorys({search: '', sort: 'name', filter: ''})).categorys)
        })()
    },[profile])
    useEffect(()=>{
        (async()=>{
            setList((await getSubCategorys({category: router.query.id, search: search, sort: sort, filter: filter})).subCategorys)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterSubCategory} sorts={data.sortSubCategory} pageName={router.query.id==='all'?'Все':data.category!==null?data.category.name:'Ничего не найдено'}>
            <Head>
                <title>{router.query.id==='all'?'Все':data.category!==null?data.category.name:'Ничего не найдено'}</title>
            </Head>
            <div className={classes.page}>
                {profile.role==='admin'?<SubCardCategory categorys={categorys} category={router.query.id} setList={setList}/>:null}
                <SubCardCategory element={{_id: 'all', name: 'Все товары'}}/>
                {data.subCategorys.length>0||router.query.id==='all'?
                        list?list.map((element)=>
                            <SubCardCategory category={router.query.id} categorys={categorys} key={element._id} setList={setList} element={element}/>
                        ):null
                    :null
                }
            </div>
        </App>
    )
})

Subcategory.getInitialProps = async function(ctx) {
    return {
        data: await getSubCategorys({category: ctx.query.id, search: '', sort: '-updatedAt', filter: ''}),
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Subcategory);