import { NextResponse } from "next/server"
import { createSessionId, validateEmail } from "@/lib/utils"
import { hashPassword } from '@/lib/utils';
import { getUser } from "@/lib/redis";
import { EntityId } from "redis-om";

import { cookies } from 'next/headers'


export async function POST(request: Request) {
    console.log(request)
    const userData  = await request.json()
    if (await validateEmail(userData.email)){
        userData.password = await hashPassword(userData.password)
        const user = await getUser(userData)
        if (user){
            const sessionId = await createSessionId(String(user[EntityId]))
            console.log(sessionId)
            cookies().set('sessionId', sessionId)
            return NextResponse.json({ message:`ok` })
        }
        return NextResponse.json({ error: 'Пользователь не найден' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Не корректный email' }, { status: 500 })
}