import Cookies from 'js-cookie';
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
    if(int&&int.length>1&&int[0]==='0')
        int = int.substring(1)
    return isNaN(parseInt(int))?0:parseInt(int)
}
export const checkFloat = (float) => {
    return isNaN(parseFloat(float))?0:parseFloat(float)
}
export const pdDDMMYYYY = (date) =>
{
    date.setHours(date.getHours() - (date.getTimezoneOffset()/60));
    date = JSON.stringify(date).split('-')
    date = date[2].split('T')[0]+'.'+date[1]+'.'+date[0].replace('"', '')
    return date
}
export const pdDDMMYY = (date) =>
{
    date.setHours(date.getHours() - (date.getTimezoneOffset()/60));
    date = JSON.stringify(date).split('-')
    date = date[2].split('T')[0]+'.'+date[1]+'.'+(date[0].replace('"', '')).substring(2,4)
    return date
}
export const pdDatePicker = (date) =>
{
    date.setHours(date.getHours() - (date.getTimezoneOffset()/60));
    date = JSON.stringify(date).split('-')
    date = date[0].replace('"', '')+'-'+date[1]+'-'+date[2].split('T')[0]
    return date
}
export const pdDDMMYYHHMM = (date) =>
{
    date.setHours(date.getHours() - (date.getTimezoneOffset()/60));
    date = JSON.stringify(date).split('-')
    date = date[2].split('T')[0]+'.'+date[1]+'.'+(date[0].replace('"', '')).substring(2,4)+' '+date[2].split('T')[1].split(':')[0]+':'+date[2].split('T')[1].split(':')[1]
    return date
}
export const pdDDMMYYHHMMCancel = (date) =>
{
    date.setHours(date.getHours() - (date.getTimezoneOffset()/60));
    date.setMinutes(date.getMinutes() + 10);
    date = JSON.stringify(date).split('-')
    date = date[2].split('T')[0]+'.'+date[1]+'.'+(date[0].replace('"', '')).substring(2,4)+' '+date[2].split('T')[1].split(':')[0]+':'+date[2].split('T')[1].split(':')[1]
    return date
}
export const validMail = (mail) =>
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}
export const validPhone = (phone) =>
{
    return /^[+]{1}996[0-9]{9}$/.test(phone);
}