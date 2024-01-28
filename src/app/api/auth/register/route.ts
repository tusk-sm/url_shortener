import { NextResponse } from 'next/server';
import { createUser } from '@/lib/redis';
import { hashPassword, validateEmail, createSessionId } from '@/lib/utils';
import { cookies } from 'next/headers';
import { EntityId } from 'redis-om';

export async function POST(request: Request) {
    const userData  = await request.json()
    if (await validateEmail(userData.email)){
        userData.password = await hashPassword(userData.password)
        userData.created = Date.now().toString()
        const user = await createUser(userData) 
        if (user){
            const sessionId = await createSessionId(String(user[EntityId]))
            cookies().set('sessionId', sessionId)
            return NextResponse.json({ 'user':`${ user }` })
        }
       
    }
    return NextResponse.json({ error: 'Wrong Email' }, { status: 500 })
}