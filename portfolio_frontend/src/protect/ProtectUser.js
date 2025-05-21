import { Navigate } from "react-router-dom";

const ProtectUser = ({ children }) => {  
  
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  const u_name = localStorage.getItem("u_name");
  
  if (!token || !uid || !u_name) {
    return <Navigate to="/"></Navigate>
  }

  return children;
};

export default ProtectUser;
