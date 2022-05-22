

function register(e, changeOutState) {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let userData = {
        email: data.get('email'),
        password: data.get('password')
    }
   
    if (data.get('password') !== data.get('rePass')) {
        return e.currentTarget.reset()
    }
    return fetch('http://localhost:3030/users/register', {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body:JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(userData => {
            localStorage.setItem('user', JSON.stringify(userData))
            changeOutState(user => userData)
        })
}

export default register