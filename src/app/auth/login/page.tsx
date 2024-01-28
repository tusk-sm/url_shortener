import LoginForm from './form'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Вход',
    description: '',
  }

export default async function (){
    return (
        <LoginForm/>
    )
}