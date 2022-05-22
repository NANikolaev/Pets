import { useEffect,useState } from "react"

export default function Register(){
    let[userData,refreshData]=useState({})
 
    
function changeUserData(e){
    let name=e.target.name
    let value=e.target.value
    refreshData(user=>({...user,[name]:value}))
}


    return (
        <section id="register-page" className="register">
        <form id="register-form" action="" method="POST">
            <fieldset>
                <legend>Register Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email"
                         value={userData.email || ''}
                         onChange={changeUserData}
                        />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password"
                        value={userData.password || ''}
                        onChange={changeUserData}
                        />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="repeat-pass">Repeat Password</label>
                    <span className="input">
                        <input type="password" name="rePass" id="repeat-pass" placeholder="Repeat Password"
                        value={userData.rePass || ''}
                        onChange={changeUserData}
                        />
                    </span>
                </p>
                <input className="button submit" type="submit" value="Register" />
            </fieldset>
        </form>
    </section>
    )
}