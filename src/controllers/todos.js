import { projectFolders } from "../index";
import { Todo } from "../factory-functions";
import { displayFolders, displayProject } from "../dom/projects";
import { removeTodoModal} from "../dom/modal";

function addTodo(e) {
    const taskName = document.querySelector('#task-name');
    const taskDesc = document.querySelector('#task-desc');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const task = taskName.value;
    const description = taskDesc.value;
    const date = dueDate.value;
    if (!task || !description|| !date) return;
    const newTodo = Todo(task, description, date);
    if (priority.checked) newTodo.priority = true;
    else newTodo.priority = false;
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    projectFolders[pfIndex].projects[pIndex].todos.push(newTodo);
    removeTodoModal();
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
    displayFolders(projectFolders);
}

function editTodo(e) {
    const taskName = document.querySelector("#task-name");
    const dueDate = document.querySelector("#due-date");
    const taskDesc = document.querySelector("#task-desc");
    const priority = document.querySelector("#priority");
    const task = taskName.value;
    const description = taskDesc.value;
    const date = dueDate.value;
    const editedTodo = Todo(task, description, date);
    if (!task || !date) {
        alert("Please fill in all fields");
        return;
    }
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
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
}

function removeTodo(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    projectFolders[pfIndex].projects[pIndex].todos.splice(tdIndex, 1);
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
    displayFolders(projectFolders);
}

function checkTodo(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    const tdIndex = e.target.dataset.tdIndex;
    if (this.checked) {
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].taskComplete = true;
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].priority = false;
        displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
        displayFolders(projectFolders);
    } else {
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].taskComplete = false;
        displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
        displayFolders(projectFolders);
    }
}

function sortTodosByChecked(todos) {
    todos.sort((a, b) => {
        if (a.taskComplete && !b.taskComplete) {
            return 1;
        } else if (!a.taskComplete && b.taskComplete) {
            return -1;
        } else {
            return 0;
        }
    })
    return todos;
}

export { addTodo, editTodo, removeTodo, checkTodo, sortTodosByChecked };