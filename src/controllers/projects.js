import { projectFolders } from "../index";
import { Project } from "../factory-functions" ;
import { displayFolders, displayProject } from "../dom/projects" ;
import { removeProjectModal } from "../dom/modal";

function addProject(e) {
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
    projectFolders[index].projects.push(newProj);
    removeProjectModal();
    displayFolders(projectFolders);
    displayProject(newProj, index, projectFolders[index].projects.length - 1);
}

