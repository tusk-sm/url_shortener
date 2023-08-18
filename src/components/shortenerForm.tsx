'use client'
import { SyntheticEvent, ChangeEvent, ChangeEventHandler } from 'react';
import { useState } from 'react';
import validateURL from '@/lib/validateURL';


export default function ShortenerForm (){

    const [url, setURL] = useState("")
    const [shortURL, setShortURL] = useState("")

    const _onSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {        
        e.preventDefault()
        if (url !==""){
            const res = await fetch("/api", {
                method: "post",
                body: JSON.stringify({
                    url: url
                })
            })
            const response = await res.json()            
            setShortURL(response.shortURL)
        }        
    }

    const _onChange: ChangeEventHandler   = (e: ChangeEvent<HTMLFormElement>)=>{
        const value = e.target.value
        if (validateURL(value)){
            setURL(e.target.value)
        }else{
            setURL("")
        }    
    }

    const _btnDisabled: () => boolean = ()=>{
        if (url === ""){           
            return true
        }
        return false
    } 

    

    return(
        <form onSubmit={_onSubmit}>  
            <div className="flex">                     
                <input                  
                    type="text" 
                    onChange={_onChange}
                    className="border px-3 w-96 py-1"
                    placeholder="Ваша ссылка"/>
            
                <button 
                    type="submit" 
                    disabled={_btnDisabled()}
                    className="px-3 py-1 bg-indigo-900 mx-2 text-white hover:bg-indigo-900 disabled:bg-indigo-300">
                        Сократить
                </button>
            </div> 
            <a
                href={shortUR}
                className='block py-3 text-indigo-900 hover:text-indigo-800 underline decoration-dashed underline-offset-4 cursor-pointer decoration-1'>
                {shortURL}
            </div>
        </form>
    )
}
