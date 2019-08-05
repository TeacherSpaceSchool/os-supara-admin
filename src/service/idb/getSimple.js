import { db } from '../idb'

export let initGetSimple = (db) => {
    try {
        db.deleteObjectStore('getSimple');
    }
    catch (error){
        console.log(error)
    }
    const store = db.createObjectStore('getSimple', {
        keyPath: 'id',
        autoIncrement: true,
    });
    store.createIndex('name', 'name', { unique: true });
}

export let getGetSimpleByKey = async(key) => {
    if(db!==undefined){
        return await db.get('getSimple', key)
    }
}

export let putGetSimpleByKey = async(key, data) => {
    if(db!==undefined){
        let res = await db.get('getSimple', key)
        if(res===undefined){
            await db.add('getSimple', {
                data
            });
        } else {
            res.data = data
            await db.put('getSimple', {
                res
            });
        }
    }
}

export let getGetSimpleByIndex = async(index) => {
    if(db!==undefined){
        return await db.getFromIndex('getSimple', 'name', index)
    }
}

export let putGetSimpleByIndex = async(index,  data) => {
    if(db!==undefined){
        let res = await db.getFromIndex('getSimple', 'name', index)
        if(res===undefined){
            await db.add('getSimple', {
                name: index,
                data: data
            });
        } else {
            res.data = data
            await db.put('getSimple', res);
        }
    }
}
