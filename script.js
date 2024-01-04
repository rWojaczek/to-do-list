"use strict";

const btnAdd = document.querySelector(".btn_task");
const inputField = document.querySelector(".input_task");
const tasksField = document.querySelector(".tasks");
let data = [];

// const update = function (e) {
//   inputField.textContent =
//     e.parentElement.parentElement.querySelector(".task_text").textContent;
//   e.parentElement.parentElement.remove();
//   data.splice(e.parentElement.parentElement.id, 1);
// };

// const done = function (e) {
//   e.parentElement.parentElement.querySelector(".info").classList.toggle("done");
// };

// const remove = function (e) {
//   e.parentElement.parentElement.remove();
//   data.splice(e.parentElement.parentElement.id, 1);
//   localStorage.setItem("data", JSON.stringify(data));
// };

document.querySelector(".tasks").addEventListener("click", (event) => {
  if (event.target.classList.contains("remove_task")) {
    const trashes = [...document.querySelectorAll(".remove_task")];
    const elementIndex = trashes.indexOf(event.target);

    data = data.filter((el, index) => {
      return index !== elementIndex;
    });
    localStorage.setItem("data", JSON.stringify(data));
    renderData();
  }
  if (event.target.classList.contains("task_done")) {
    event.target.closest(".new_task_row").classList.toggle("done");
  }
  if (event.target.classList.contains("correct_task")) {
    inputField.value =
      event.target.parentElement.parentElement.querySelector(
        ".task_text"
      ).textContent;
    event.target.parentElement.parentElement.remove();
    data.splice(event.target.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
  }
});

const renderData = function () {
  inputField.value = "";
  const time = new Date();
  const options = {
    month: "long",
    day: "numeric",
  };
  const date = new Intl.DateTimeFormat("en", options).format(time);

  tasksField.innerHTML = "";
  data.map(function (el, i) {
    return (tasksField.innerHTML += `
     <div class="new_task_row" id=${i}>
       <div class="info">
         <span class="task_text">${el.text}</span>
         <span class ="time_add"> ${date}</span>
       </div>
       <div class = "operations">
         <i  class="bi bi-pencil-square correct_task "></i>   
         <i  class="bi bi-check2 task_done"></i>
         <i  class="bi bi-trash remove_task"></i>
       </div>
    </div>`);
  });
};

const saveData = function () {
  data.push({
    text: inputField.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  renderData();
};

btnAdd.addEventListener("click", saveData);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") saveData();
});

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  renderData();
})();
