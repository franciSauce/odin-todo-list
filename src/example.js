import { projectFolders } from "./index";
import { Todo, Project, ProjectFolder } from "./factory-functions";
import { displayFolders, displayProject } from "./dom/projects";
import { format, addDays, subDays } from "date-fns";

const currentDate = format(new Date(), "dd/MM/yyyy");
const pastDue = format(subDays(new Date(), 2), "dd/MM/yyyy");
const tomorrowDate = format(addDays(new Date(), 1), "dd/MM/yyyy");
const thisWeekDate = format(addDays(new Date(), 5), "dd/MM/yyyy");

function setExamples() {
    const projectFolder1 = ProjectFolder("Personal");
    const projectFolder2 = ProjectFolder("Work");
    const project1 = cleanHouse();
    const project2 = errands();
    const project3 = workProject();
    const project4 = auditing();
    projectFolder1.projects.push(project1);
    projectFolder1.projects.push(project2);
    projectFolder2.projects.push(project3);
    projectFolder2.projects.push(project4);
    projectFolders.push(projectFolder1);
    projectFolders.push(projectFolder2);
    displayFolders.push(projectFolder1);
    displayFolders.push(projectFolder2);
    displayFolders(projectFolders);
    displayProject(project1, 0, 0); 
}

function cleanHouse() {
    const cleanHouse = Project("Clean House, Laundry, and Dishes");
    const todo1 = Todo("Clean House", "Clean the house thoroughly", currentDate);
    const todo2 = Todo("Laundry", "Do the laundry", currentDate);
    const todo3 = Todo("Dishes", "Wash the dishes", currentDate);
    const todo4 = Todo("Vacuum", "Vacuum the house", currentDate);
    const todo5 = Todo("Dust", "Dust the furniture", currentDate);
    todo2.priority = "true";
    todo4.taskComplete = "true";
    cleanHouse.todos.push(todo1);
    cleanHouse.todos.push(todo2);
    cleanHouse.todos.push(todo3);
    cleanHouse.todos.push(todo4);
    cleanHouse.todos.push(todo5);
    return cleanHouse;
}

function errands() {
    const errands = Project("Errands");
    const todo1 = Todo("Grocery Shopping", "Buy groceries for the week", thisWeekDate);
    const todo2 = Todo("Pick up dry cleaning", "Pick up dry cleaning from the store", tomorrowDate);
    const todo3 = Todo("Return library books", "Return library books to the library", pastDue);
    const todo4 = Todo("Gas station", "Fill up the car with gas", tomorrowDate);
    const todo5 = Todo("Post office", "Mail a package at the post office", pastDue);
    todo1.priority = "true";
    todo3.taskComplete = "true";
    errands.todos.push(todo1);
    errands.todos.push(todo2);
    errands.todos.push(todo3);
    errands.todos.push(todo4);
    errands.todos.push(todo5);
    return errands;
}

function workProject() {
    const workProject = Project("Work Project");
    const todo1 = Todo("Finish report", "Complete the quarterly report", tomorrowDate);
    const todo2 = Todo("Team meeting", "Attend the team meeting", currentDate);
    const todo3 = Todo("Client call", "Call the client for feedback", thisWeekDate);
    const todo4 = Todo("Update presentation", "Update the presentation slides", tomorrowDate);
    const todo5 = Todo("Send email", "Send an email to the team", currentDate);
    todo2.priority = "true";
    todo4.taskComplete = "true";
    workProject.todos.push(todo1);
    workProject.todos.push(todo2);
    workProject.todos.push(todo3);
    workProject.todos.push(todo4);
    workProject.todos.push(todo5);
    return workProject;
}
function auditing() {
    const auditing = Project("Auditing");
    const todo1 = Todo("Audit financial statements", "Review the financial statements for accuracy", tomorrowDate);
    const todo2 = Todo("Prepare audit report", "Prepare the audit report for submission", currentDate);
    const todo3 = Todo("Client meeting", "Meet with the client to discuss findings", thisWeekDate);
    const todo4 = Todo("Follow up on discrepancies", "Follow up on any discrepancies found during the audit", tomorrowDate);
    const todo5 = Todo("Submit final report", "Submit the final audit report to management", currentDate);
    todo1.priority = "true";
    todo3.taskComplete = "true";
    auditing.todos.push(todo1);
    auditing.todos.push(todo2);
    auditing.todos.push(todo3);
    auditing.todos.push(todo4);
    auditing.todos.push(todo5);
    return auditing;
}

export { setExamples };