const API_URL = "http://34.233.177.198:5000/people";

function loadPeople() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("peopleList");
      list.innerHTML = "";
      data.forEach(person => {
        const li = document.createElement("li");
        li.textContent = person.name + " ";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deletePerson(person.id);
        li.appendChild(deleteButton);
        list.appendChild(li);
      });
    });
}

function addPerson() {
  const name = document.getElementById("nameInput").value;
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  }).then(() => {
    document.getElementById("nameInput").value = "";
    loadPeople();
  });
}

function deletePerson(id) {
  fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then(() => loadPeople());
}

window.onload = loadPeople;
