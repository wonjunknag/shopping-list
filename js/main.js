"use strict";

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

/**
 *
 */
function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}
let id = 0; // UUID
function createItem(text) {
  const itemsRow = document.createElement("li");
  itemsRow.setAttribute("class", "item__row");
  itemsRow.setAttribute("data-id", `${id}`);
  itemsRow.innerHTML = `  
      <div class="item">
         <span class="item__name">${text}</span>
         <button class="item__delete">
           <i class="fas fa-trash-alt" data-id=${id}></i>
         </button>
      </div>
      <div class="item__divider"></div>
  `;
  id++;
  return itemsRow;
}
addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    console.log(toBeDeleted);
    toBeDeleted.remove();
  }
});
