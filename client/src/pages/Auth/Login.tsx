import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "./components/Input";
import AuthText from "./components/AuthText";
import AuthButton from "./components/AuthButton";

const Login: React.FC = () => {
  const loginInputs = [
    
    {label:"Email",type:"email",name:"email",placeholder:"jane@smith.com"},
    {label:"Password",type:"password",name:"password",placeholder:""},
    

  ]
  return (
    <AuthLayout>
      <div className="p-10 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
          <form className="space-y-5">
            {loginInputs.map(i => <Input key={i.name} label={i.label} type={i.type} placeholder={i.placeholder} name={i.name}/>)}
            <AuthButton label={'Login'}/>
          </form>

          <AuthText text={'Don\'t have account yet?'} actionText={'Sign Up'} path={'/sign-up'}/>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
