

function specificPet(id){
    return fetch(`http://localhost:3030/data/pets/${id}`)
    .then(res=>res.json())
}

export default specificPet