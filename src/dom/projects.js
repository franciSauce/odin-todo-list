import { displayEditProjectModal, displayEditTodoModal, displayProjectModal, displayTodoModal } from "./modal";
import { removeProject, selectProject } from "../controllers/projects";
import { checkTodo, removeTodo } from "../controllers/todos";
import { projectFolders } from "..";
import { sortTodosByChecked } from "../controllers/todos";
import deleteIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.svg";
import addOrangeIcon from "../icons/add.svg";
import addWhiteIcon from "../icons/add-white.svg";
import priorityIcon from "../icons/star.svg";

function displayFolders(folders) {
    const list = document.querySelector(".project-folder-list");
    list.innerHTML = "";
    folders.forEach((folder, pfIndex) => {
        const projFolder = document.createElement("li");
        const button = document.createElement("img");
        const div = document.createElement("div");
        const projectList = document.createElement("ul");
        projectList.classList.add("project-list");
        projectList.setAttribute("data-pf-index", pfIndex);
        button.classList.add("pf-button");
        button.setAttribute("data-pf-index", pfIndex);
        button.src = addOrangeIcon;
        button.addEventListener("click", displayProjectModal);
        div.textContent = folder.name;
        button.textContent = "+";
        div.appendChild(button);
        projFolder.appendChild(div);
        projFolder.appendChild(projectList);
        list.appendChild(projFolder);
        const projects = folder.projects;
        projects.forEach((project, pIndex) => {
            const proj = document.createElement("li");
            proj.setAttribute("data-p-index", pIndex);
            proj.setAttribute("data-pf-index", pfIndex);
            proj.textContent = project.name;
            const todoNumber = document.createElement("p");
            let num = 0;
            projectFolders[pfIndex].projects[pIndex].todos.forEach(todo => {
                if (!todo.taskComplete) num++
            })
            todoNumber.textContent = num;
            proj.appendChild(todoNumber);
            projectList.appendChild(proj);
            proj.addEventListener("click", selectProject);
        })
    })
}

function displayProject(project,pfIndex, pIndex) {
    const mainBox = document.querySelector("main");
    mainBox.innerHTML = "";
    const divHeader = document.createElement("div");
    const divButtons = document.createElement("div");
    const description = document.createElement("p");
    const todoHeaderBox = document.createElement("div");
    const todoList = document.createElement("ul");
    const projectHeader = document.createElement("h1");
    const projectDelete = document.createElement("img");
    const projectEdit = document.createElement("img");
    const todoHeader = document.createElement("h2");
    const addTodo = document.createElement("img");
    addTodo.setAttribute("data-pf-index", pfIndex);
    addTodo.setAttribute("data-p-index", pIndex);
    addTodo.src = addWhiteIcon;
    addTodo.addEventListener("click", displayTodoModal);
    projectDelete.classList.add("p-delete");
    projectDelete.setAttribute("data-pf-index", pfIndex);
    projectDelete.setAttribute("data-p-index", pIndex);
    projectDelete.src = deleteIcon;
    projectDelete.addEventListener("click", removeProject);
    projectEdit.classList.add("p-edit");
    projectEdit.setAttribute("data-pf-index", pfIndex);
    projectEdit.setAttribute("data-p-index", pIndex);
    projectEdit.src = editIcon;
    projectEdit.addEventListener("click", displayEditProjectModal);
    divHeader.classList.add("p-header");
    description.classList.add("p-description");
    todoHeaderBox.classList.add("todo-header");
    todoList.classList.add("todo-list");
    projectHeader.textContent = project.name;
    projectDelete.textContent = "X";
    projectEdit.textContent = "/";
    description.textContent = project.description;
    todoHeader.textContent = "Todos";
    addTodo.textContent = "+";
    divButtons.appendChild(projectEdit);
    divButtons.appendChild(projectDelete);
    divHeader.appendChild(projectHeader);
    divHeader.appendChild(divButtons);
    todoHeaderBox.appendChild(todoHeader);
    todoHeaderBox.appendChild(addTodo);
    mainBox.appendChild(divHeader);
    mainBox.appendChild(description);
    mainBox.appendChild(todoHeaderBox);
    mainBox.appendChild(todoList);
    const todos = project.todos;
    displayTodos(todos, todoList, pfIndex, pIndex); 
}


