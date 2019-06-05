// Add your code here
// Test 1 - Send Data
// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). 
// This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept' set to 'application/json'
// A body with the name and email passed in as arguments to submitData. 
// These should be assigned to name and email keys within an object. 
//This object should then be stringified.

let formSubmitId = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", () => {
    // your code here
  });

formSubmitId.addEventListener('click', function(event) {
    event.preventDefault();
    submitData( document.getElementById("name").value,
            document.getElementById("email").value )
});

function submitData( name, email ) {

    let formData = {}
    formData["name"]=name;
    formData["email"] = email;

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
// To complete challenge 2, i need to find the returned id and add it to the dom
            let idItem = document.createElement("TEXT");
            idItem.innerHTML=object["id"]
            document.getElementById("divitem").appendChild(idItem)
        })
        .catch(function(error) {
// To complete part 3 ... put error on the page
            let errorItem = document.createElement("TEXT")
            errorItem.setAttribute("id","errortext")
            errorItem.innerHTML = error.message
            document.getElementById("divitem").appendChild(errorItem)
        });

}