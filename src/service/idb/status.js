import { db } from '../idb'

export let initStatus = (db) => {
    try {
        db.deleteObjectStore('status');
    }
    catch (error){
        console.log(error)
    }
    db.createObjectStore('status', {
        keyPath: 'id',
        autoIncrement: true,
    });
}

export let getStatusByKey = async(key) => {
    if(db!==undefined){
        return await db.get('status', key)
    }
}

export let putStatusByKey = async(key, data) => {
    if(db!==undefined){
        let res = await db.get('status', key)
        if(res===undefined){
            await db.add('status', {
                data
            });
        } else {
            res.data = data
            await db.put('status', res);
        }
    }
}

export let getStatusByIndex = async(index, indexName) => {
    if(db!==undefined){
        return await db.getFromIndex('status', index, indexName)
    }
}

export let putStatusByIndex = async(index, indexName, data) => {
    if(db!==undefined){
        let res = await db.getFromIndex('status', index, indexName)
        if(res===undefined){
            await db.add('status', {
                data: data
            });
        } else {
            res.data = data
            await db.put('status', res);
        }
    }
}
