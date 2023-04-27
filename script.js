"use strict";

const btnAddTask = document.querySelector(".btn_task");
const btnTaskDone = document.querySelector(".task_done");
const newTaskField = document.querySelector(".tasks");
const inputField = document.querySelector(".input_task");
const taskRow = document.querySelector(".new_task_row");
const taskText = document.querySelector(".task_text");

const addTask = function () {
  const now = new Date();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const newDate = new Intl.DateTimeFormat("en", options).format(now);

  const html = `
    <div class="new_task_row">
      <div class="info">
       <span class="task_text">${inputField.value}</span>
       <span class ="time_add"> ${newDate}</span>
      </div>
      <div class = "operations">
        <svg xmlns="http://www.w3.org/2000/svg" class="correct_task" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>

       <svg xmlns="http://www.w3.org/2000/svg" class ="task_done" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
       </svg>

        <svg xmlns="http://www.w3.org/2000/svg" class="remove_task" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
       </svg>
      </div>
    </button>
    </div> `;

  if (!inputField.value) {
    return;
  }

  newTaskField.insertAdjacentHTML("afterbegin", html);
  inputField.value = "";
};

btnAddTask.addEventListener("click", addTask);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove_task")) {
    e.target.parentElement.parentElement.remove();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("task_done")) {
    const parent = e.target.parentElement;
    parent.parentElement.querySelector(".info").classList.toggle("done");
  }
});

// document.addEventListener("click", function (e) {
//   if(e.target.classList.contains("correct_task"))
// });
