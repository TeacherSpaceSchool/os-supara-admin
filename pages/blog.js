import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import pageListStyle from '../src/styleMUI/blog/blogList'
import {getBlogs} from '../src/gql/blog'
import CardBlog from '../components/blog/CardBlog'
import { connect } from 'react-redux'


const Blog = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.blogs);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getBlogs({search: search, sort: sort, filter: filter})).blogs)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterBlog} sorts={data.sortBlog} pageName='Блог'>
            <Head>
                <title>Блог</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Блог' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`http://${process.env.URL}/static/512x512.png`} />
                <meta property="og:url" content={`http://${process.env.URL}/blog`} />
                <link rel='canonical' href={`http://${process.env.URL}/blog`}/>
            </Head>
            <div className={classes.page}>
                {profile.role==='admin'?<CardBlog setList={setList}/>:null}
                {list?list.map((element)=>
                    <CardBlog key={element._id} setList={setList} element={element}/>
                ):null}
            </div>
        </App>
    )
})

Blog.getInitialProps = async function() {
    return {
        data: await getBlogs({search: '', sort: '-updatedAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Blog);