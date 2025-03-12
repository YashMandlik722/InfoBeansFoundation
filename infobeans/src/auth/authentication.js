import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function Auth({children}) {
    let isLoging = useSelector(data=>data.user.isLoggedIn)
    if(isLoging)
        return children
    return <Navigate to={"/signIn"}/>
}

export default Auth