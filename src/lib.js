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