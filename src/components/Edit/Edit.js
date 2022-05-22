


function Edit({pet}){
  
    return(
        <section id="edit-page" className="edit">
        <form id="edit-form" action="#" method="">
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
                            <option value="cat" >Cat</option>
                            <option value="dog" selected>Dog</option>
                            <option value="parrot">Parrot</option>
                            <option value="reptile">Reptile</option>
                            <option value="other">Other</option>
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