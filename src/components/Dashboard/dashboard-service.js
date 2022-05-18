

function getAllPets() {
    return fetch('http://localhost:3030/data/pets?sortBy=_createdOn%20desc')
        .then(res => res.json())
}
export default getAllPets