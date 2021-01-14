// Add your code here

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const newP = document.createElement("p");
      newP.textContent = object.id;
      document.body.appendChild(newP);
      return object;
    })
    .catch(function (error) {
      let errorP = document.createElement("p");
      errorP.textContent = error.message;
      document.body.appendChild(errorP);
    });
}
