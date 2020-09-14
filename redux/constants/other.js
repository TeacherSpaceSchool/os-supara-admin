export let urlGQL
export let urlGQLws
export let urlMain
export let urlSubscribe
export let applicationKey
if(process.env.URL==='os-kantsut.xyz') {
    urlGQL = `https://${process.env.URL}:3000/graphql`
    urlGQLws = `wss://${process.env.URL}:3000/graphql`
    urlSubscribe = `https://${process.env.URL}:3000/subscribe`
    urlMain = `https://${process.env.URL}`
    applicationKey = 'BGAa2sPjcH6RvApWTvZYAQrukcpGsXG2FEk4FIj5j6JWLBjHtaJBPFyPrZH63ku9jFX-k0oNh923YtrGf-a42rU'
}
else {
    urlGQL = `http://${process.env.URL}:3000/graphql`
    urlGQLws = `ws://${process.env.URL}:3000/graphql`
    urlMain = `http://${process.env.URL}`
    urlSubscribe = `http://${process.env.URL}:3000/subscribe`
    applicationKey = 'BPF2bHqRtmYohlJ_6KQ28skt8HDQN8uAwF4C2HaORxWRwNKmMik8ZrTyizcU3_Ousd6UjPu1061hjCPAkhQit_Y'
}

export const validMail = (mail) =>
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}
export const validPhone = (phone) =>
{
    return /^[+]{1}996[0-9]{9}$/.test(phone);
}
export const checkInt = (int) => {
    return isNaN(parseInt(int))?0:parseInt(int)
}
