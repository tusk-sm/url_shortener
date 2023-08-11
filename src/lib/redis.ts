import { createClient } from 'redis'
import randomString from './randomString';
import { REDIS_CONFIG } from '../../config';

const client = createClient(REDIS_CONFIG);

client.on('error', err => console.log('Redis Server Error', err));


async function _saveURL(urlString:string){
    const key = await randomString()
    const exists = await client.exists(key)
    if (!exists){
        await client.set(key, urlString)        
    }
    else{
       await _saveURL(urlString)
    }
    return key
}


export async function saveURL (urlString:string){
    await client.connect();    
    const key = await  _saveURL(urlString);    
    await client.disconnect();
    return key
}


export async function getURL (key:string){
    await client.connect();    
    const url = await  client.get(key);    
    await client.disconnect();
    return url
}