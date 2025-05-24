import { projectFolders } from "../index";
import { Todo } from "../factory-functions";
import { displayFolders, displayProject } from "../dom/projects";
import { removeTodoModal} from "../dom/modal";

function addTodo(e) {
    const taskName = document.querySelector("#task-name");
    const dueDate = document.querySelector("#due-date");
    const priority = document.querySelector("#priority");
    const task = taskName.value;
    const date = dueDate.value;
    const newTodo = Todo(task, date);
    if (!task || !date) {
        alert("Please fill in all fields");
        return;
    }
    if (priority.checked) {
        newTodo.priority = true;
    } else {
        newTodo.priority = false;
    }
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    projectFolders[pfIndex].projects[pIndex].todos.push(newTodo);
    removeTodoModal();
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
    displayFolders(projectFolders);
}

