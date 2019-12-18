import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../../src/styleMUI/item/itemList'
import CardItem from '../../components/items/CardItem'
import { useRouter } from 'next/router'
import {getBrands} from '../../src/gql/items';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import { urlMain } from '../../redux/constants/other'
const height = 377;
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardItemPlaceholder from '../../components/items/CardItemPlaceholder'

const Brand = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const router = useRouter()
    let [list, setList] = useState(data?data.brands:[]);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            if(data)
                setList((await getBrands({organization: router.query.id, search: search, sort: sort})).brands)
            forceCheck()
        })()
    },[filter, sort, search])
    return (
        <App sorts={data?data.sortItem:undefined} pageName={data&&data.brands[0]?data.brands[0].organization.name:'Ничего не найдено'}>
            <Head>
                <title>{data&&data.brands[0]?data.brands[0].organization.name:'Ничего не найдено'}</title>
                <meta name='description' content={data&&data.brands[0]?data.brands[0].organization.info:'Ничего не найдено'} />
                <meta property='og:title' content={data&&data.brands[0]?data.brands[0].organization.name:'Ничего не найдено'} />
                <meta property='og:description' content={data&&data.brands[0]?data.brands[0].organization.info:'Ничего не найдено'} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={data&&data.brands[0]?data.brands[0].organization.image:`${urlMain}/brand/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/brand/${router.query.id}`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardItemPlaceholder/>}>
                        <CardItem setList={setList} key={element._id} element={element} subCategory={element.subCategory._id}/>
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

Brand.getInitialProps = async function(ctx) {
    return {
        data: await getBrands({organization: ctx.query.id, search: '', sort: '-createdAt'}),
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Brand);