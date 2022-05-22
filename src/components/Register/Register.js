import register from "./register-service"
import { useNavigate } from "react-router-dom"

export default function Register({changeOutState}){

let navigate=useNavigate()

    return (
        <section id="register-page" className="register">
        <form id="register-form" action="" method="POST" onSubmit={(e)=>register(e,changeOutState) && navigate('/')}>
            <fieldset>
                <legend>Register Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email"/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="repeat-pass">Repeat Password</label>
                    <span className="input">
                        <input type="password" name="rePass" id="repeat-pass" placeholder="Repeat Password"/>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Register" />
            </fieldset>
        </form>
    </section>
    )
}


