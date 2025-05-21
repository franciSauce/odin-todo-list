import { projectFolders } from "../index"
import { ProjectFolder } from "../factory-functions";
import { displayFolders } from "../dom/projects";

function addProjectFolder() {
    const pfName = document.querySelector("#pf-name");
    const projFolder = pfName.value;
    const newProjFolder = ProjectFolder(projFolder);
    projectFolders.push(newProjFolder);
    displayFolders(projectFolders);
}

export { addProjectFolder };