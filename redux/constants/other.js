export let urlGQL
export let urlGQLSSR
export let urlGQLws
export let urlMain
export let urlSubscribe
export let applicationKey
if(process.env.URL==='os-supara.xyz') {
    urlGQLSSR = `http://${process.env.URL}:4000/graphql`
    urlGQL = `https://${process.env.URL}:3000/graphql`
    urlGQLws = `wss://${process.env.URL}:3000/graphql`
    urlSubscribe = `https://${process.env.URL}:3000/subscribe`
    urlMain = `https://${process.env.URL}`
    applicationKey = 'BJ98zcvUMdWyQuG3XFo2VQhERi8dhJBMrC4tePvAVA8mC40X7Mut1v5SvasOyA0P9d0cUuxWakyi1BRDdzbEzmg'
}
else {
    urlGQLSSR = `http://${process.env.URL}:3000/graphql`
    urlGQL = `http://${process.env.URL}:3000/graphql`
    urlGQLws = `ws://${process.env.URL}:3000/graphql`
    urlMain = `http://${process.env.URL}`
    urlSubscribe = `http://${process.env.URL}:3000/subscribe`
    applicationKey = 'BE3fU94F3TygJ3Eoly6tYcvWR1YJTVAdhX8CITGKLBWIfDuhT8CJofEXKvnJfDFhDqDcIb4KXHV5rptewyMqIAU'
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
