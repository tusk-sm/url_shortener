import { NextResponse } from 'next/server';
import { HOST } from '@/config';
import { createLink } from '@/lib/redis';
import { EntityId } from 'redis-om';

export async function POST(request: Request) {
    const { url }  = await request.json()
    console.log(request)
    const key = await createLink(url, "123")
 
  return NextResponse.json({ 'shortURL':`${ HOST }${ key[EntityId] }` })
}