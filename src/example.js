import { projectFolders } from "./index";
import { Todo, Project, ProjectFolder } from "./factory-functions";
import { displayProject } from "./dom/projects";
import { format, addDays, subDays } from "date-fns";

const currentDate = format(new Date(), "dd/MM/yyyy");
const pastDue = format(subDays(new Date(), 1), "dd/MM/yyyy");
const tomorrowDate = format(addDays(new Date(), 1), "dd/MM/yyyy");
const thisWeekDate = format(addDays(new Date(), 7), "dd/MM/yyyy");

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