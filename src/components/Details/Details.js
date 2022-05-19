import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import specificPet from "./detail-service"

export default function Details({ user }) {
    let [pet, changeState] = useState({})
    let id = useParams().id
    useEffect(() => {
        specificPet(id)
            .then(pet => changeState(pet))
    }, [])

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    {user.id == pet._ownerId
                        ? <>
                            <Link className="button" to={`/edit/pet/${pet._id}`}>Edit</Link>
                            <Link className="button" to={`/delete/pet/${pet._id}`}>Delete</Link>
                        </>
                        : ''
                    }


                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>

                </div>
            </div>
            <div className="pet-description">
                <h3>Description: {pet.description}</h3>
                <p></p>
            </div>
        </section>

    )

}