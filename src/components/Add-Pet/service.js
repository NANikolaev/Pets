

function create(e, token) {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let pet = { ...Object.fromEntries(data) }


    return fetch("http://localhost:3030/data/pets", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-authorization': token
        },
        body: JSON.stringify(pet)
    })



}

export default create