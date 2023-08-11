import { redirect, notFound } from 'next/navigation'
import { getURL } from '@/lib/redis'

export default async function ({ params }: { params: { key: string } }){
    const url = await getURL(params.key)
    if(url){
        redirect(url)
    }else{
        notFound()
    }    
} 