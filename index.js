const bodyUl = document.querySelector("body ul");

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
    // .then(data => console.log(data))
    .then(addUserIdToDom) //callback function for what we want to do with this actual data when we're done waiting for fetch
    // .catch(addErrorToDom)
}

function addUserIdToDom(user){
  const uid = user.id;
  console.log(user);
  const li = document.createElement("li");
  li.innerHTML = `${uid}`
  bodyUl.appendChild(li)
}

// function addErrorToDom(err) {

// }
