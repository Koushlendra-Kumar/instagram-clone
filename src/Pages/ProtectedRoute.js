
import { Navigate } from 'react-router-dom';
import auth from "../firebase.init"
const ProtectedRoute = ({children}) =>{
    if(auth){
        return children;
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute;