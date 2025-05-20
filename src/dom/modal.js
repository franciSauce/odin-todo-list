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
