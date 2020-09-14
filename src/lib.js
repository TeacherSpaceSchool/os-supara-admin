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
export const getGeoDistance = (lat1, lon1, lat2, lon2) => {
    lat1 = parseFloat(lat1)
    lon1 = parseFloat(lon1)
    lat2 = parseFloat(lat2)
    lon2 = parseFloat(lon2)
    let deg2rad = Math.PI / 180;
    lat1 *= deg2rad;
    lon1 *= deg2rad;
    lat2 *= deg2rad;
    lon2 *= deg2rad;
    let diam = 12742000; // Diameter of the earth in km (2 * 6371)
    let dLat = lat2 - lat1;
    let dLon = lon2 - lon1;
    let a = (
        (1 - Math.cos(dLat)) +
        (1 - Math.cos(dLon)) * Math.cos(lat1) * Math.cos(lat2)
    ) / 2;
    return parseInt(diam * Math.asin(Math.sqrt(a)))
}
export const checkFloat = (float) => {
    return isNaN(parseFloat(float))?0:parseFloat(float)
}
export const pdDDMMYYYY = (date) =>
{
    date = new Date(date)
    date = `${date.getDate()<10?'0':''}${date.getDate()}.${date.getMonth()<9?'0':''}${date.getMonth()+1}.${date.getFullYear()}`
    return date
}
export const pdDDMMYY = (date) =>
{
    date = new Date(date)
    date = `${date.getDate()<10?'0':''}${date.getDate()}.${date.getMonth()<9?'0':''}${date.getMonth()+1}.${date.getYear()-100}`
    return date
}
export const pdDatePicker = (date) =>
{
    date = new Date(date)
    date = `${date.getFullYear()}-${date.getMonth()<9?'0':''}${date.getMonth()+1}-${date.getDate()<10?'0':''}${date.getDate()}`
    return date
}
export const pdDDMMYYHHMM = (date) =>
{
    date = new Date(date)
    date = `${date.getDate()<10?'0':''}${date.getDate()}.${date.getMonth()<9?'0':''}${date.getMonth()+1}.${date.getYear()-100} ${date.getHours()<10?'0':''}${date.getHours()}:${date.getMinutes()<10?'0':''}${date.getMinutes()}`
    return date
}
export const pdDDMMYYHHMMCancel = (date) =>
{
    date = new Date(date)
    date.setMinutes(date.getMinutes() + 10);
    date = `${date.getDate()<10?'0':''}${date.getDate()}.${date.getMonth()<9?'0':''}${date.getMonth()+1}.${date.getYear()-100} ${date.getHours()<10?'0':''}${date.getHours()}:${date.getMinutes()<10?'0':''}${date.getMinutes()}`
    return date
}
export const differenceDates = (date1, date2) =>
{
    return (new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24)
}
export const validMail = (mail) =>
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}
export const validPhone = (phone) =>
{
    return /^[+]{1}996[0-9]{9}$/.test(phone);
}
export const currencys = ['сом', 'тенге', 'рубль', 'доллар', 'евро',  'вон', 'гривна', 'дирхам', 'драм', 'иена', 'крона', 'лари', 'лев', 'манат', 'песо', 'реал', 'рупия', 'сомони', 'сум', 'форинт', 'франк', 'шекель', 'шиллинг', 'юань','фунт']
