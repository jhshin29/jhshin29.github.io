const toDoForm = document.querySelector(".toDoForm");
const input = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");

let toDos = [];
let newId = 0;

function delToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const newToDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    toDos = newToDos;
    saveToDos()
}

function saveToDos() {
    localStorage.setItem("toDoList", JSON.stringify(toDos))
}

function addtoDoList(text) {
    const li = document.createElement("li");
    const span = document.createElement("span")
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", delToDo)
    span.innerText = text;
    delBtn.innerText = "❌";
    li.appendChild(delBtn);
    li.appendChild(span);
    delBtn.setAttribute("class", "btn");
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos()
    newId += 1;
}

function handleSubmit(event) {
    event.preventDefault();
    addtoDoList(input.value);
    input.value = "";
}

function loadList() {
    const loadedToDos = localStorage.getItem("toDoList");
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            addtoDoList(toDo.text);
        });
    }
}

function init() {
    toDoForm.addEventListener("submit", handleSubmit);
    loadList();
}

init();