import { Navigate } from "react-router-dom"
import OuthContext from "../../contexts/OuthContext"
import { useContext } from "react"


export default function Logout(){
    let changeOutState=useContext(OuthContext)
    changeOutState(false)
    return(<Navigate to="/" replace={true} />)
}