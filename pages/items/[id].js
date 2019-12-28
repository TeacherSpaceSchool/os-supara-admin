import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../../src/styleMUI/item/itemList'
import CardItem from '../../components/items/CardItem'
import { useRouter } from 'next/router'
import {getItems} from '../../src/gql/items';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { urlMain } from '../../redux/constants/other'
const height = 377;
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardItemPlaceholder from '../../components/items/CardItemPlaceholder'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { getClientGqlSsr } from '../../src/getClientGQL'

const Items = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const router = useRouter()
    let [list, setList] = useState(data.items);
    const { search, filter, sort } = props.app;
    const { profile, authenticated } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getItems({subCategory: router.query.id, search: search, sort: sort, filter: filter})).items)
        })()
    },[filter, sort, search])
    useEffect(()=>{
        forceCheck()
    },[list])
    return (
        <App searchShow={true} filters={data.filterItem} sorts={data.sortItem} pageName={router.query.id==='all'?'Все':data.subCategory!==null?data.subCategory.name:'Ничего не найдено'}>
            <Head>
                <title>{router.query.id==='all'?'Все':data.subCategory!==null?data.subCategory.name:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={router.query.id==='all'?'Все':data.subCategory!==null?data.subCategory.name:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/items/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/items/${router.query.id}`}/>
            </Head>
            {
                !authenticated||['client', 'admin'].includes(profile.role)?
                    <Breadcrumbs style={{margin: 20}} aria-label='breadcrumb'>
                        <Link href='/'>
                            Товары
                        </Link>
                        {
                            data.subCategory?
                                <Link href='/subcategory/[id]' as={`/subcategory/${data.subCategory.category._id}`}>
                                    {data.subCategory.category.name}
                                </Link>
                                :
                                <Link href='/subcategory/[id]' as={`/subcategory/all`}>
                                    Все подкатегории
                                </Link>
                        }
                        {
                            data.subCategory?
                                <Typography color='textPrimary'>
                                    {data.subCategory.name}
                                </Typography>
                                :
                                <Typography color='textPrimary'>
                                    Все товары
                                </Typography>
                        }
                    </Breadcrumbs>
                    :null}
            <div className={classes.page}>

                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardItemPlaceholder/>}>
                        <CardItem setList={setList} key={element._id} element={element} subCategory={router.query.id==='all'?'all':data.subCategory._id}/>
                    </LazyLoad>
                ):null}
            </div>
            {profile.role==='admin'||profile.role==='организация'||profile.role==='менеджер'?
                <Link href='/item/[id]' as={`/item/new`}>
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

Items.getInitialProps = async function(ctx) {
    ctx.store.getState().app.sort = 'name'
    return {
        data: await getItems({subCategory: ctx.query.id, search: '', sort: ctx.store.getState().app.sort, filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Items);