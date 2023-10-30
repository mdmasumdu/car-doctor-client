/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvide/AuthProvider";
import { Navigate } from "react-router-dom";


const Ptivate = ({children}) => {

    const {user,loading} = useContext(AuthContext);
      
      if(loading){
        return "loading"
      }

    if(user?.email){
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

export default Ptivate;