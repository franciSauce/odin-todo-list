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


