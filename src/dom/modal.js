import { projectFolders } from "..";
import { addProject, editProject } from "../controllers/projects";
import { addTodo, editTodo, editListTodo } from "../controllers/todos";
import { format, parse } from "date-fns";
import { editTodoToday } from "../controllers/today";
import { editTodoUpcoming } from "../controllers/upcoming";
import { editTodoPriority } from "../controllers/priority";

function displayProjectModal(e) {
    const modal =document.querySelector(".project-modal");
    const modalButton = document.querySelector(".p-button");
    const projectName = document.querySelector("#p-name");
    const projectDescription = document.querySelector("#p-desc");
    projectName.value = "";
    projectDescription.value = "";
    const index = e.target.dataset.buttonIndex;
    modalButton.setAttribute("data-pf-index", index);
    modalButton.addEventListener("click", addProject);
    modal.classList.add("show");
}

function displayEditProjectModal(e) {
    const modal = document.querySelector(".project-modal");
    const modalButton = document.querySelector(".p-button");
    const projectName = document.querySelector("#p-name");
    const projectDescription = document.querySelector("#p-desc");
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    projectName.value = projectFolders[pfIndex].projects[pIndex].name;
    projectDescription.value = projectFolders[pfIndex].projects[pIndex].description;
    modalButton.setAttribute("data-pf-index", pfIndex);
    modalButton.setAttribute("data-p-index", pIndex);
    modalButton.addEventListener("click", editProject);
    modal.classList.add("show");
}

function removeProjectModal() {
    const modal = document.querySelector(".project-modal");
    const modalButton = document.querySelector(".p-button");
    modalButton.removeEventListener("click", addProject);
    modalButton.removeEventListener("click", editProject);
    modalButton.removeAttribute("data-pf-index");
    modalButton.removeAttribute("data-p-index");
    modal.classList.remove("show");
}

function displayTodoModal(e) {
    const modal = document.querySelector(".todo-modal");
    const modalButton = document.querySelector(".td-button");
    const taskName = document.querySelector("#task-name");
    const dueDate = document.querySelector("#due-date");
    const priority = document.querySelector("#priority");
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    taskName.value = "";
    dueDate.value = "";
    priority.checked = false;
    modalButton.setAttribute("data-pf-index", pfIndex);
    modalButton.setAttribute("data-p-index", pIndex);
    modalButton.addEventListener("click", addTodo);
    modal.classList.add("show");
}

function displayEditTodoModal(e) {
    const modal = document.querySelector(".todo-modal");
    const modalButton = document.querySelector(".td-button");
    const taskName = document.querySelector("#task-name");
    const dueDate = document.querySelector("#due-date");
    const priority = document.querySelector("#priority");
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    taskName.value = projectFolders[pfIndex].projects[pIndex].todos[tdIndex].name;
    dueDate.value = format(parse(projectFolders[pfIndex].projects[pIndex].todos[tdIndex].formattedDate, "dd/MM/yyyy", new Date()), "yyyy-MM-dd");
    if (projectFolders[pfIndex].projects[pIndex].todos[tdIndex].priority) priority.checked = true;
    else priority.checked = false;
    modalButton.setAttribute("data-pf-index", pfIndex);
    modalButton.setAttribute("data-p-index", pIndex);
    modalButton.setAttribute("data-td-index", tdIndex);
    modalButton.addEventListener("click", editTodo);
    modal.classList.add("show");
}

function displayEditTodoModalToday(e) {
    const modal = document.querySelector(".todo-modal");
    const modalButton = document.querySelector(".td-button");
    const taskName = document.querySelector("#task-name");
    const dueDate = document.querySelector("#due-date");
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    taskName.value = projectFolders[pfIndex].projects[pIndex].todos[tdIndex].name;
    dueDate.value = format(parse(projectFolders[pfIndex].projects[pIndex].todos[tdIndex].formattedDate, "dd/MM/yyyy", new Date()), "yyyy-MM-dd");
    if (projectFolders[pfIndex].projects[pIndex].todos[tdIndex].priority) priority.checked = true;
    else priority.checked = false;
    modalButton.setAttribute("data-pf-index", pfIndex);
    modalButton.setAttribute("data-p-index", pIndex);
    modalButton.setAttribute("data-td-index", tdIndex);
    modalButton.addEventListener("click", editTodoToday);
    modal.classList.add("show");
}

