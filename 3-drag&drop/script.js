const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");
const addTaskBtn = document.getElementById("addTaskBtn");
const addTaskDialog = document.getElementById("addTaskDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const addTaskForm = document.getElementById("addTaskForm");
const taskInput = document.getElementById("taskInput");
const todoList=document.getElementById("To-Do")
const element=addTaskBtn
const sotrageKey="kanban-cards"
let cardsData = loadCards();
console.log(cardsData)
function loadCards() {
  const saved = localStorage.getItem(sotrageKey);
  return saved ? JSON.parse(saved) : [];
}
function saveCards() {
  localStorage.setItem(sotrageKey, JSON.stringify(cardsData));
}
function createCardElement(cardData) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = cardData.id;
  card.textContent = cardData.text;
  card.draggable = true;
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
  return card;
}
function renderBoard() {
  document.querySelectorAll(".list").forEach((list) => {
    list.innerHTML = `<h2>${list.id}</h2>`; // clear (fine here, we control this content)
  });

  cardsData.forEach((cardData) => {
    const listEl = document.getElementById(`${cardData.status}`);
    if (listEl) listEl.appendChild(createCardElement(cardData));
  });
}
addTaskBtn.addEventListener("click", () => {
  addTaskDialog.showModal();
  taskInput.focus();
});

closeDialogBtn.addEventListener("click", () => {
  taskInput.value = "";
  addTaskDialog.close();
});
for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (!text) return;

  const cardData = {
    id: "card-" + Date.now(),
    text: text,
    status: "To-Do",
  };

  cardsData.push(cardData);
  saveCards();

  const card = createCardElement(cardData);
  todoList.appendChild(card);

  taskInput.value = "";
  addTaskDialog.close();
});
for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  // this allows the drop location to know which element is being moved when you release it
  e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd() {
  console.log("Drag ended");
}

function dragOver(e) {
  // this line is important because by default, browsers don't allow you to drop elements onto other elements.
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  if (e.target === this) {
    this.classList.add("over");
  }
}

function dragLeave(e) {
  if (e.target === this) {
    this.classList.remove("over");
  }
}
function dragDrop(e) {
    console.log("drop fired", this.id);
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);

  this.appendChild(card);
  this.classList.remove("over");
    const newStatus = this.id; 
  const cardData = cardsData.find((c) => c.id === id);
  if (cardData) {
    cardData.status = newStatus;
    saveCards();
  }
}
renderBoard()