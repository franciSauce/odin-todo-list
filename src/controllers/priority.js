import { projectFolders } from "../index";
import { Todo } from "../factory-functions";
import { removeTodoModal } from "../dom/modal";
import { displayPriority } from "../dom/links";
import { displayFolders } from "../dom/projects";
import { tr } from "date-fns/locale";

function editTodoPriority(e) {
    const taskName = document.querySelector("#task-name");
    const dueDate = document.querySelector("#due-date");
    const priority = document.querySelector("#priority");
    const task = taskName.value;
    const date = dueDate.value;
    const editedTodo = Todo(task, date);
    if (priority.checked) {
        editedTodo.priority = true;
    } else {
        editedTodo.priority = false;
    }
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos.splice(tdIndex, 1, editedTodo);
    removeTodoModal();
    displayPriority();
}

function removeTodoPriority(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos.splice(tdIndex, 1);
    displayFolders(projectFolders);
    displayPriority();
}

function checkTodoPriority(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos[tdIndex].taskComplete = true;
    projectFolders[pfIndex].projects[pIndex].todos[tdIndex].priority = false;
    displayPriority();
}

export { editTodoPriority, removeTodoPriority, checkTodoPriority };
