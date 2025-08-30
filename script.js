
let cards = [];

const STORAGE_KEY = "memoryCards_v1";

const cardForm = document.getElementById("cardForm");
const frontInput = document.getElementById("front");
const backInput = document.getElementById("back");
const cardsContainer = document.getElementById("cardsContainer");

function loadCards() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      cards = JSON.parse(data);
    } catch {
      cards = [];
    }
  }
}


function saveCards() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}


function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}


function renderCard(card) {
  const div = document.createElement("div");
  div.className = "card";
  div.dataset.id = card.id;

  const title = document.createElement("h3");
  title.textContent = card.front;

  const content = document.createElement("p");
  content.textContent = card.back;

  const actions = document.createElement("div");
  actions.className = "actions";

  const showBtn = document.createElement("button");
  showBtn.textContent = "نمایش";
  showBtn.addEventListener("click", () => {
    alert(card.front + "\n\n" + card.back);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "حذف";
  deleteBtn.style.background = "#dc3545";
  deleteBtn.style.color = "#fff";
  deleteBtn.addEventListener("click", () => {
    deleteCard(card.id);
  });

  actions.appendChild(showBtn);
  actions.appendChild(deleteBtn);

  div.appendChild(title);
  div.appendChild(content);
  div.appendChild(actions);

  return div;
}


function renderAll() {
  cardsContainer.innerHTML = "";
  cards.forEach((card) => {
    const cardEl = renderCard(card);
    cardsContainer.appendChild(cardEl);
  });
}


cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const front = frontInput.value.trim();
  const back = backInput.value.trim();
  if (!front || !back) return;

  const newCard = {
    id: generateId(),
    front,
    back,
    dateCreated: new Date().toISOString(),
  };
  cards.push(newCard);
  saveCards();
  renderAll();

 
  frontInput.value = "";
  backInput.value = "";
});


function deleteCard(id) {
  cards = cards.filter((c) => c.id !== id);
  saveCards();
  renderAll();
}


loadCards();
renderAll();
