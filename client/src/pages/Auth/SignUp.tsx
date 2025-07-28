import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import AuthButton from "./components/AuthButton";
import AuthText from "./components/AuthText";
import Input from "./components/Input";
import PhotoInput from "./components/PhotoInput";


const SignUp:React.FC = () =>{
  const signUpInputs = [
    {label:"Full Name",type:"text",name:"name",placeholder:"Jane Smith"},
    {label:"Email",type:"email",name:"email",placeholder:"jane@smith.com"},
    {label:"Password",type:"password",name:"password",placeholder:""},
    {label:"Confirm Password",type:"password",name:"repeat-assword",placeholder:""},


  ]

  return (
  <AuthLayout>
     <div className="p-10 flex items-center justify-center">
  <div className="w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
    <PhotoInput />
    <form className="space-y-5">
      {signUpInputs.map(o => <Input key={o.name} label={o.label} type={o.type} name={o.name} placeholder={o.placeholder}/>)}
    <AuthButton  label={"Sign Up"}/>
    </form>
    <AuthText text={'Already have an account?'} actionText={'Log in'} path={'/login'} />
  </div>

</div>

    </AuthLayout>
  );
}





export default SignUp;