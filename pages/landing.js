import Router from 'next/router'

const Landing = () => {
    return (
        <div>
            Landing
        </div>
    )
}

Landing.getInitialProps = async function(ctx) {
    if(ctx.res) {
        ctx.res.writeHead(302, {
            Location: '/static/landing/landing.html'
        })
        ctx.res.end()
    } else
        Router.push('/static/landing/landing.html')
};

export default Landing;