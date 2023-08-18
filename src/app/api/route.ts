import { NextResponse } from 'next/server'
import { saveURL } from '@/lib/redis';
import { HOST } from '@/config';

export async function POST(request: Request) {
    const { url }  = await request.json()
    const key = await saveURL(url)
 
  return NextResponse.json({ 'shortURL':`${ HOST }${ key }` })
}
