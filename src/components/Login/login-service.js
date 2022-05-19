
function login(e, userData, changeOutState,) {
    e.preventDefault()
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
        .then(res =>res.json())
        .then(userData => {
            localStorage.setItem('user', JSON.stringify(userData))
            changeOutState(user => userData)
        })
           

}

export default login