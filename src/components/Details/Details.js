import { useParams, Route, Routes, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import Edit from "../Edit/Edit"
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
                    {user._id == pet._ownerId
                        ? <>
                            <Link className="button" to='edit'>Edit</Link>
                            <Link className="button" to='delete'>Delete</Link>
                        </>
                        : ''
                    }
                    {user._id !== pet._ownerId ? <a className="button" href="#">Like</a> : ''}


                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    <Routes>
                        <Route path="edit" element={<Edit pet={pet} />}></Route>
                        <Route path="delete" element={<Edit pet={pet} />}></Route>
                    </Routes>

                </div>
            </div>
            <div className="pet-description">
                <h3>Description: {pet.description}</h3>
                <p></p>
            </div>
        </section>

    )

}