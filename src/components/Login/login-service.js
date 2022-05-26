
function login(e, changeOutState,) {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let userData = {
        email: data.get('email'),
        password: data.get('password')
    }

    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(userData => {
            changeOutState(user => userData)
        })


}

export default login