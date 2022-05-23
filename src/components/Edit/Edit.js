import { useState, useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import specificPet from "../Details/detail-service"
import edit from "./service"

function Edit({user}) {
    const [pet, changePet] = useState({})
    let id = useParams().id
    let navigate=useNavigate()
    useEffect(() => {
        specificPet(id)
            .then(pet => changePet(pet))
    },[])



    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" action="#" method="PUT" onSubmit={(e)=>edit(e,id,user.accessToken)&& navigate(-1)}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" defaultValue={pet.name} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" defaultValue={pet.description}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" defaultValue={pet.type}>
                                <option defaultValue="cat" >Cat</option>
                                <option defaultValue="dog" selected>Dog</option>
                                <option defaultValue="parrot">Parrot</option>
                                <option defaultValue="reptile">Reptile</option>
                                <option defaultValue="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" defaultValue="Save" />
                </fieldset>
            </form>
        </section>

    )

}
export default Edit