
import { Link } from "react-router-dom"

function Navigation({
    user
}) {
    
    return (
        <header id="site-header">

            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>

                    {user
                        ? <div id="user">
                            <span>Welcome,{user.email} </span>
                            <Link className="button" to="/my-pets">My Pets</Link>
                            <Link className="button" to="/add-pet">Add Pet</Link>
                            <Link className="button" to="/logout">Logout</Link>
                        </div>
                        : <div id="guest">
                            <Link className="button" to="/login">Login</Link>
                            <Link className="button" to="/register">Register</Link>
                        </div>
                    }

                </section>
            </nav>
        </header>

    )

}

export default Navigation