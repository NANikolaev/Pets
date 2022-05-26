import useExtractData from "../../hooks/useExtractData"
import DashBoardCard from "./DashBoardCard"


function Dashboard() {
    let pets=useExtractData('pets?sortBy=_createdOn%20desc')

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">

                {pets.length > 0
                    ? pets.map(x => <DashBoardCard key={x._id} pet={x} />)
                    : <p className="no-pets">No pets in database!</p>
                }

            </ul>
        </section>

    )

}

export default Dashboard