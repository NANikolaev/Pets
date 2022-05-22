import { Navigate } from "react-router-dom"

export default function Logout({changeOutState}){
    localStorage.removeItem('user')
    changeOutState(false)
    return(<Navigate to="/" replace={true} />)
}