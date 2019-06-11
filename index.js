// Add your code here

document.addEventListener("DOMContentLoaded", function() {  
  submitData();
});


function submitData(name, email) {
    let data = {
    name: 'name', 
    email: 'email'
    }
    
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name,
            email
        })
    }).then(function(response) {
        return response.json();
    }).then(function(object) {
        document.body.innerHTML = object.id
    }).catch(function(error) {
        document.body.innerHTML = error.message;
    })
}
    
    
    
    
  