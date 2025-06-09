import { projectFolders } from "../index";
import { Project } from "../factory-functions" ;
import { displayFolders, displayProject } from "../dom/projects" ;
import { removeProjectModal } from "../dom/modal";

function addProject(e) {
    console.log("Event target:", e.target);
    console.log("Dataset:", e.target.dataset);
    console.log("pfIndex value:", e.target.dataset.pfIndex);
    console.log("projectFolders array:", projectFolders);

    const projectName = document.querySelector("#p-name");
    const projectDescription = document.querySelector("#p-desc");
    const project = projectName.value;
    const description = projectDescription.value;
    if (!project || !description) {
        alert("Please fill in all fields");
        return;
    }
    const newProj = Project(project, description);
    const index = e.target.dataset.pfIndex;

     // Convert to number if it's a string
    const numericIndex = parseInt(index, 10);
    
    if (isNaN(numericIndex) || projectFolders[numericIndex] === undefined) {
        console.error("Invalid index:", index, "Numeric index:", numericIndex);
        console.error("projectFolders length:", projectFolders.length);
        return;
    }

    projectFolders[numericIndex].projects.push(newProj);
    removeProjectModal();
    displayFolders(projectFolders);
    displayProject(newProj, numericIndex, projectFolders[numericIndex].projects.length - 1);
}

function editProject(e) {
    const projectName = document.querySelector("#p-name");
    const projectDescription = document.querySelector("#p-desc");
    const name = projectName.value;
    const description = projectDescription.value;
    if (!name || !description) {
        alert("Please fill in all fields");
        return;
    }
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    projectFolders[pfIndex].projects[pIndex].name = name;
    projectFolders[pfIndex].projects[pIndex].description = description;
    removeProjectModal();
    displayFolders(projectFolders);
    displayProject(projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
}

function selectProject(e) {
    const index = e.target.dataset.pIndex;
    const pfIndex = e.target.dataset.pfIndex;
    const proj = projectFolders[pfIndex].projects[index];
    displayProject(proj, pfIndex, index);
}

function removeProject(e) {
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    projectFolders[pfIndex].projects.splice(pIndex, 1);
    displayFolders(projectFolders);
    displayProject(projectFolders[0].projects[0], 0, 0);
}

export { addProject, editProject, selectProject, removeProject };