// Add your code here

function submitData(userName, userEmail) {
    return fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
         },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function(response) {
        return response.json();
    }) 
    .then(function(object) {
        const newId = document.createElement('li')
        document.body.appendChild(newId)
        newId.innerHTML = object.id
    })
    .catch(function(error) {
        const newError = document.createElement('li')
        document.body.appendChild(newError)
        newError.innerHTML = error.message
    })
}

