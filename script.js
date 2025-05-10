const apiUrl = "http://localhost:8000";

function fetchNames() {
    fetch(`${apiUrl}/names`)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("nameList");
            list.innerHTML = "";
            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.name;
                li.onclick = () => deleteName(item.id);
                list.appendChild(li);
            });
        });
}

function addName() {
    const input = document.getElementById("nameInput");
    const name = input.value;
    if (!name) return;

    fetch(`${apiUrl}/names?name=${encodeURIComponent(name)}`, {
        method: "POST"
    }).then(() => {
        input.value = "";
        fetchNames();
    });
}

function deleteName(id) {
    fetch(`${apiUrl}/names/${id}`, {
        method: "DELETE"
    }).then(fetchNames);
}

window.onload = fetchNames;
