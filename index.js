// Write a method, submitData, that takes two strings arguments
// one representing a user's name and the other representing a user's email.
// As you write your solution, keep the server running to test your code.
// Open index.html in a browser to gain access to your submitData function in console.
//write you solution so that submitData returns the fetch()
const yes = "hello";
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  submitData();
});

function submitData(userName, userEmail) {
  let formData = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      //the quotes around accept are removed by Prettier
    },
    body: JSON.stringify(formData)
  };
  //Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property.
  return fetch("http://localhost:3000/users", configObj)
    .then(response => {
      return response.json();
      //Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.
    })
    .then(object => {
      body.innerHTML += `${object["id"]}`;
      //For this final test, after the two then() calls on your fetch() request, add a catch().
    })
    .catch(error => {
      alert("Unauthorized Access");
      console.log(error.message);
      body.innerHTML += `${error.message}`;
    });
}
