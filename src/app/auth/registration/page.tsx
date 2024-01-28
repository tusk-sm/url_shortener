import RegistrationForm from "./form";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Регистрация',
    description: '',
  }

export default async function () {    
    return (
        <RegistrationForm />
    )
}