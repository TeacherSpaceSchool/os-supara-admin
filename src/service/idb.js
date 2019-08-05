import { openDB } from 'idb';
import { initStatus } from './idb/status';
import { initGetSimple } from './idb/getSimple';
export let db = undefined
export let start = async () => {
    db = await openDB('Shoro', 6, {
        upgrade(db) {
            initStatus(db)
            initGetSimple(db)
        },
    });
}


