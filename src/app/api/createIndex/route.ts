import { NextResponse } from 'next/server';
import  { createIndex } from '@/lib/redis';


export  async function GET(){
    await createIndex();
    return NextResponse.json({ message:'ok' })
}