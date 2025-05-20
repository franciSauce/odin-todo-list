import { projectFolders } from "../index";
import {    displayEditTodoModalPriority,
            displayEditTodoModalToday,
            displayEditTodoModalUpcoming } from "../dom/modal";
import { format, addDays } from "date-fns";
import { checkTodoToday, removeTodoToday } from "../controllers/today";
import { checkTodoUpcoming, removeTodoUpcoming } from "../controllers/upcoming";
import { checkTodoPriority, removeTodoPriority } from "../controllers/priority";
import deleteIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.svg";
import priorityIcon from "../icons/star.svg";

function displayToday() {
    const mainBox = document.querySelector("main");
    mainBox.innerHTML = "";
    const documentHeader = document.createElement("h1");
    const pastDueHeader = document.createElement("h2");
    const todayHeader = document.createElement("h2");
    documentHeader.textContent = "Today";
    pastDueHeader.textContent = "Past Due";
    todayHeader.textContent = "Due Today";
    const pastDueList = document.createElement("ul");
    const todayList = document.createElement("ul");
    projectFolders.forEach((pf, pfIndex) => {
        pf.projects.forEach((p, pIndex) => {
            p.todos.forEach((td, tdIndex) => {
                const currentDate =format(new Date(), "dd/MM/yyyy");
                if (td.taskComplete) return;
                const todoBox = document.createElement("li");
                const leftBox = document.createElement("div");
                const rightBox = document.createElement("div");
                const checkbox = document.createElement("input");
                const task = document.createElement("label");
                const date = document.createElement("p");
                const editButton = document.createElement("img");
                const deleteButton = document.createElement("img");
                leftBox.classList.add("left-box");
                rightBox.classList.add("right-box");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("id", `todo${tdIndex}`);
                checkbox.setAttribute("data-pf-index", pfIndex);
                checkbox.setAttribute("data-p-index", pIndex);
                checkbox.setAttribute("data-td-index", tdIndex);
                checkbox.addEventListener("change", checkTodoToday);
                task.setAttribute("for", `todo${tdIndex}`);
                deleteButton.setAttribute("data-pf-index", pfIndex);
                deleteButton.setAttribute("data-p-index", pIndex);
                deleteButton.setAttribute("data-td-index", tdIndex);
                deleteButton.src = deleteIcon;
                deleteButton.addEventListener("click", removeTodoToday);
                editButton.setAttribute("data-pf-index", pfIndex);
                editButton.setAttribute("data-p-index", pIndex);
                editButton.setAttribute("data-td-index", tdIndex);
                editButton.src = editIcon;
                editButton.addEventListener("click", displayEditTodoModalToday);
                task.textContent = td.task;
                date.textContent = td.formattedDate;
                editButton.textContent = "/";
                deleteButton.textContent = "X";
                leftBox.appendChild(checkbox);
                leftBox.appendChild(task);
                if (td.priority) {
                    const priority = document.createElement("img");
                    priority.src = priorityIcon;
                    leftBox.appendChild(priority);
                }
                rightBox.appendChild(date);
                rightBox.appendChild(editButton);
                rightBox.appendChild(deleteButton);
                todoBox.appendChild(leftBox);
                todoBox.appendChild(rightBox);
                if (td.formattedDate < currentDate) {
                    pastDueList.appendChild(todoBox);
                } else if (td.formattedDate === currentDate) {
                    todayList.appendChild(todoBox);
                }
            })
        })
    })
    if (!pastDueList.hasChildNodes()) {
        const noPastList = document.createElement("p");
        noPastList.textContent = "No past due tasks";
        pastDueList.appendChild(noPastList);
    }
    if (!todayList.hasChildNodes()) {
        const noTodayList = document.createElement("p");
        noTodayList.textContent = "No tasks due today";
        todayList.appendChild(noTodayList);
    }
    mainBox.appendChild(documentHeader);
    mainBox.appendChild(pastDueHeader);
    mainBox.appendChild(pastDueList);
    mainBox.appendChild(todayHeader);
    mainBox.appendChild(todayList);
}


