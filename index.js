const submitData = (name, email) => {
  const formData = {
    name,
    email,
  };

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const data = {
    method: 'POST',
    headers,
    body: JSON.stringify(formData),
  };

  return fetch('http://localhost:3000/users', data)
    .then(response => response.json())
    .then((json) => {
      const elem = document.createElement('div');
      elem.innerHTML = `<h1>${json.id}</h1>`;
      document.body.appendChild(elem);
    })
    .catch((err) => {
      const elem = document.createElement('div');
      elem.innerHTML = `<h1>${err.message}</h1>`;
      document.body.appendChild(elem);
    });
};