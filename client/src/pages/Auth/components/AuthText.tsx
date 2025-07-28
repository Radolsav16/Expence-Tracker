import React from "react";
import { Link } from "react-router";

const AuthText:React.FC = ({text,actionText,path}) =>{
    return(
           <p className="text-center text-sm text-gray-600 mt-6">
             {text}{" "}
              <Link to={path} className="text-indigo-600 hover:underline">
                {actionText}
              </Link>
            </p>
    )
}

export default AuthText;