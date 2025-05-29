import { format, parseISO } from "date-fns";

function Todo(task, description, date) {
    const dateCreated = new Date();
    const formattedDate = format(parseISO(date), "MM/dd/yy");
    let taskComplete = false;
    let priority = false;
    return { task, formattedDate, dateCreated, taskComplete, priority };
}

function Project(name, description) {
    let todos = [];
    return { name, description, todos };
}

function ProjectFolder(name) {
    let projects = [];
    return { name, projects };
}

export { Todo, Project, ProjectFolder };
