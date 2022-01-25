const tablePage = document.querySelector(".table-page");

const readFromStorage = () => {
  let value = sessionStorage.getItem("tableItem");
  if (!value) {
    return {};
  }
  return JSON.parse(value);
};

const saveToStorage = (newItem) => {
  sessionStorage.setItem("tableItem", JSON.stringify(newItem));
};
const initialRemove = () => {
  document.querySelectorAll(".remove-btn").forEach((removeBtn) => {
    removeBtn.addEventListener("click", (e) => {
      let btn = e.currentTarget;
      let key = btn.dataset.name;
      let table = readFromStorage();
      delete table[key];
      saveToStorage(table);
      let div = btn.closest(".dish");
      div.style.display = "none";
    });
  });
};
const showTable = () => {
  let table = readFromStorage();
  for (const key in table) {
    if (table.hasOwnProperty(key)) {
      const dish = `<div class="dish table">
      <img src="${table[key].img}" />
      <div class="description">
          <h3>${table[key].name}</h3>
          <p>${table[key].description}</p>
          <button class="dish-btn remove-btn" data-name="${table[key].name}">Remove from Table</button>
      </div>
  </div>`;
      const newEl = document.createElement("div");
      newEl.innerHTML = dish;
      tablePage.appendChild(newEl);
    }
  }
  initialRemove();
};

document.querySelectorAll(".dish-btn").forEach((dishBtn) => {
  dishBtn.addEventListener("click", (e) => {
    let btn = e.currentTarget;
    let newItem = {
      name: btn.dataset.name,
      img: btn.dataset.img,
      description: btn.dataset.description,
    };
    let table = readFromStorage();
    table[btn.dataset.name] = newItem;
    saveToStorage(table);
  });
});
