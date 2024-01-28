'use client'
import { SyntheticEvent } from "react"
import { validateEmail } from "@/lib/utils"
import { useRouter } from 'next/navigation'

export default async function LoginForm (){
    const router = useRouter()
    const _onSubmit = async (e:SyntheticEvent<HTMLFormElement, SubmitEvent>)=>{
        e.preventDefault()        
        const formData = new FormData(e.currentTarget );
        const data = Object.fromEntries(formData.entries());
        if (await validateEmail(String(data.email))){
            const res = await fetch(
                '/api/auth/login',{
                    method: "POST",
                    body:JSON.stringify(data)
                }
            )
            const json = await res.json()
            if (res.status == 200){
                console.log(json)
                localStorage.setItem('sessionId', json.sessionId)
                router.push("/")
            } else{
                // const data = await res.json()
                alert(json.error)
            }           
        }else{
            alert("Не корректный email")
        }        
    }
   
    return (
        <form onSubmit={_onSubmit}>
            <input name="email" type="text" />
            <input name="password" type="password" />
            <button>Войти</button>
        </form>
    )
}