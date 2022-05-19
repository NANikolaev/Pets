import { useState } from "react"
import login from "./login-service"
import { useNavigate } from "react-router-dom"

export default function Login({
    changeOutState
}) {
    let [data, changeInput] = useState({})
    let navigate=useNavigate()

    function changeHandler(e) {
        let name = e.target.name
        let value = e.target.value
        changeInput(data => ({ ...data, [name]: value }))
    }


    return (
        <section id="login-page" className="login">
            <form id="login-form" action="" method="" onSubmit={(e)=>login(e,data,changeOutState) && navigate('/') } >
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"
                                value={data.email || ""}
                                onChange={changeHandler}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"
                                value={data.password || ""}
                                onChange={changeHandler}
                            />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>

    )

}