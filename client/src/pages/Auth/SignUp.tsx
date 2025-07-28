import React, { useState, useTransition } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import AuthButton from "./components/AuthButton";
import AuthText from "./components/AuthText";
import Input from "./components/Input";
import PhotoInput from "./components/PhotoInput";
import {useForm} from 'react-hook-form'

  const signUpInputs = [
    {label:"Full Name",type:"text",name:"name",placeholder:"Jane Smith"},
    {label:"Email",type:"email",name:"email",placeholder:"jane@smith.com"},
    {label:"Password",type:"password",name:"password",placeholder:""},
    {label:"Confirm Password",type:"password",name:"repeatPassword",placeholder:""},
  ]


const SignUp:React.FC = () =>{

   const {isPending,startTransition} = useTransition()
  
   const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
    repeatPassword:'',
    imageUrl:''
   })

   const onChangeHandler = (e) =>{
    console.log('change')
    console.log(e.currentTarget)
      setData({
        ...data,
        [e.currentTarget.name]:e.currentTarget.value,
      })
   }

   const onSubmit = (e) =>{
    console.log('submitted')
    const data = new FormData(e.currentTarget)
    console.log(data)
   }

  return (
  <AuthLayout>
     <div className="p-10 flex items-center justify-center">
  <div className="w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
    <PhotoInput />
    <form className="space-y-5" action={onSubmit}>
      {signUpInputs.map(o => <Input key={o.name} label={o.label} type={o.type} name={o.name} placeholder={o.placeholder} onChangeHandler={onChangeHandler} value={data[o.name]}/>)}
    <AuthButton  label={"Sign Up"}/>
    </form>
    <AuthText text={'Already have an account?'} actionText={'Log in'} path={'/login'} />
  </div>

</div>

    </AuthLayout>
  );
}





export default SignUp;