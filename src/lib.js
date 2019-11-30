const regexpUA = /(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|iOS|Mobile)/
export const checkMobile = (ua)=>{
    return regexpUA.exec(ua)!==null
}
const regexpAuth = /(\s)?jwt=(\S)+(;)?/
export const checkAuth = (auth)=>{
    return regexpAuth.exec(auth)!==null
}
export const getJWT = (auth)=>{
    let res = regexpAuth.exec(auth)
    return res!==null?res[0].trim().replace('jwt=', ''):undefined
}
export const checkInt = (int) => {
    return isNaN(parseInt(int))?0:parseInt(int)
}
export const pdDDMMYYYY = (date) =>
{
    date = JSON.stringify(date).split('-')
    date = date[2].split('T')[0]+'.'+date[1]+'.'+date[0].replace('"', '')
    return date
}
export const pdDDMMYY = (date) =>
{
    date = JSON.stringify(date).split('-')
    date = date[2].split('T')[0]+'.'+date[1]+'.'+(date[0].replace('"', '')).substring(2,4)
    return date
}
export const pdDatePicker = (date) =>
{
    date = JSON.stringify(date).split('-')
    date = date[0].replace('"', '')+'-'+date[1]+'-'+date[2].split('T')[0]
    return date
}
export const pdDDMMYYHHMM = (date) =>
{
    date = JSON.stringify(date).split('-')
    date = date[2].split('T')[0]+'.'+date[1]+'.'+(date[0].replace('"', '')).substring(2,4)+' '+date[2].split('T')[1].split(':')[0]+':'+date[2].split('T')[1].split(':')[1]
    return date
}