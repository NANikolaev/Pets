import { useState, useEffect } from "react"
import DashBoardCard from "./DashBoardCard"
import getAllPets from "./dashboard-service"

function Dashboard() {
    let [pets, changeState] = useState([])
    useEffect(()=>{
        getAllPets()
        .then(pets=>changeState(pets))
    },[])

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">

                {pets.length > 0
                    ? pets.map(x => <DashBoardCard pet={x} />)
                    : <p className="no-pets">No pets in database!</p>
                }

            </ul>
        </section>

    )

}

export default Dashboard