export let urlGQL
export let urlGQLws
export let urlMain
if(process.env.URL==='azyk.store') {
    urlGQL = `https://${process.env.URL}:3000/graphql`
    urlGQLws = `ws://${process.env.URL}:3000/graphql`
    urlMain = `https://${process.env.URL}`
}
else {
    urlGQL = `http://${process.env.URL}:3000/graphql`
    urlGQLws = `ws://${process.env.URL}:3000/graphql`
    urlMain = `http://${process.env.URL}`
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
