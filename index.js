const body = document.querySelector("body");

function submitData(userName, userEmail) {
  const user = {
    name: userName,
    email: userEmail
  };

  const options ={
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }

  return fetch("http://localhost:3000/users", options)
    .then(res => res.json())
    .then(showUsers) //callback function for what we want to do with this actual data when we're done waiting for fetch
    .catch(error => console.error(`Error: ${error}`))
}

function addNewUsersToDom(users){
  users.forEach(user => {
    body.appendChild
  });
}

function createUserCard(user){
  const body = document.querySelector("body");

  users.forEach(user => {

    body.appendChild
  });
}

