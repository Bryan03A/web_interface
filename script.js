const API_URL = "https://api-rest-vercel-dusky.vercel.app/people";
const HEROKU_API_URL = "https://edielhellopython-768e7c968ae4.herokuapp.com/api/hello";
const TIME_API_URL = "https://api-time-cwyk.onrender.com/api/time";

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

function loadHerokuMessage() {
  fetch(HEROKU_API_URL)
    .then(response => response.json())
    .then(data => {
      const messageElement = document.getElementById("herokuMessage");
      messageElement.innerHTML = `
        <strong>Message:</strong> ${data.message}<br>
        <strong>Client IP:</strong> ${data.client_ip}<br>
        <strong>Resultado:</strong> ${data.resultado}
      `;
    })
    .catch(error => {
      console.error('Error fetching message from Heroku:', error);
    });
}

function updateClock() {
  fetch(TIME_API_URL)
    .then(response => response.json())
    .then(data => {
      const clockElement = document.getElementById("clock");
      clockElement.textContent = "Current Time (UTC): " + data.formatted_time;
    })
    .catch(error => {
      document.getElementById("clock").textContent = "Error loading time.";
      console.error("Failed to fetch time:", error);
    });
}

function toggleIframe() {
  const container = document.getElementById("iframeContainer");
  container.classList.toggle("active");
}

window.onload = () => {
  loadPeople();
  loadHerokuMessage();
  updateClock();
  setInterval(updateClock, 1000);
};