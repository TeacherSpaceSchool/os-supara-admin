import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getSubCategorys } from '../../src/gql/subcategory'
import { getCategorys } from '../../src/gql/category'
import pageListStyle from '../../src/styleMUI/subcategory/subcategoryList'
import SubCardCategory from '../../components/subcategory/SubCardCategory'
import { useRouter } from 'next/router'
import { urlMain } from '../../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import SubCardCategoryPlaceholder from '../../components/subcategory/SubCardCategoryPlaceholder'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'

const Subcategory = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const router = useRouter()
    let [list, setList] = useState(data.subCategorys);
    let [categorys, setCategorys] = useState([]);
    const { search, filter, sort } = props.app;
    const { profile, authenticated } = props.user;
    let height = profile.role==='admin'?189:38
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
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} filters={data.filterSubCategory} sorts={data.sortSubCategory} pageName={router.query.id==='all'?'Все':data.category?data.category.name:'Ничего не найдено'}>
            <Head>
                <title>{router.query.id==='all'?'Все':data.category?data.category.name:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={router.query.id==='all'?'Все':data.category!==null?data.category.name:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/subcategory/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/subcategory/${router.query.id}`}/>
            </Head>
            {
                !authenticated||['client', 'admin'].includes(profile.role)?
                    <Breadcrumbs style={{margin: 20}} aria-label='breadcrumb'>
                        <Link href='/'>
                            <a>
                                Товары
                            </a>
                        </Link>
                        <Typography color='textPrimary'>
                            {router.query.id==='all'?'Все':data.category?data.category.name:'Ничего не найдено'}
                        </Typography>
                    </Breadcrumbs>
                    :
                    null
            }

            <div className={classes.page}>
                <div className='count'>
                    {`Всего подкатегорий: ${list.length}`}
                </div>
                {profile.role==='admin'?
                    <>
                    <SubCardCategory categorys={categorys} category={router.query.id} setList={setList}/>
                    </>
                    :null}
                <SubCardCategory element={{_id: 'all', name: 'Все товары'}}/>
                {data.subCategorys.length>0||router.query.id==='all'?
                    list?list.map((element, idx)=> {
                        if(idx<=pagination)
                            return(
                                <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<SubCardCategoryPlaceholder height={height}/>}>
                                    <SubCardCategory category={router.query.id} categorys={categorys} setList={setList} element={element}/>
                                </LazyLoad>
                            )}
                    ):null
                    :null
                }
            </div>
        </App>
    )
})

Subcategory.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.sort = 'name'
    return {
        data: await getSubCategorys({category: ctx.query.id, search: '', sort: ctx.store.getState().app.sort, filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Subcategory);