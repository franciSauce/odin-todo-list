import { projectFolders } from "../index ";
import { Todo } from "../factory-functions";
import { removeTodoModal } from "../dom/modal";
import { displayUpcoming } from "../dom/links";
import { displayFolders } from "../dom/projects"; 

function editTodoUpcoming(e) {
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
    displayUpcoming();
}

function removeTodoUpcoming(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos.splice(tdIndex, 1);
    displayFolders(projectFolders);
    displayUpcoming();
}

function checkTodoUpcoming(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos[tdIndex].taskComplete = true;
    projectFolders[pfIndex].projects[pIndex].todos[tdIndex].priority = false;
    displayUpcoming();
}

export { editTodoUpcoming, removeTodoUpcoming, checkTodoUpcoming };