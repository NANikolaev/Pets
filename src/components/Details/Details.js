import { useParams, Link } from "react-router-dom"
import useExtractData from "../../hooks/useExtractData"



export default function Details({ user }) {
    let id=useParams().id
    let pet=useExtractData(`pets/${id}`)
    return (

        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    {user._id == pet._ownerId
                        ? <>
                            <Link className="button" to={`/edit/pet/${pet._id}`}>Edit</Link>
                            <Link className="button" to="#">Delete</Link>
                          </>
                        : ''
                    }

                    {user._id != pet._ownerId ? <Link className="button" to="#">Like</Link> : ''}


                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>

                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>


    )

}