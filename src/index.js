import "./styles.css";
import { addProjectFolder } from "./controllers/project-folders";
import { setExamples } from "./example";
import { removeProjectModal, removeTodoModal } from "./dom/modal";
import { displayPriority, displayToday, displayUpcoming } from "./dom/links";

const projectFolders = [];

const pfButton = document.querySelector(".pf-button");
pfButton.addEventListener("click", addProjectFolder);

const cpButton = document.querySelector(".cp-button");
const ctdButton = document.querySelector(".ctd-button");
cpButton.addEventListener("click", removeProjectModal);
ctdButton.addEventListener("click", removeTodoModal);

const todayLink = document.querySelector(".today-link");
const upcomingLink = document.querySelector(".upcoming-link");
const priorityLink = document.querySelector(".priority-link");
todayLink.addEventListener("click", displayToday);
upcomingLink.addEventListener("click", displayUpcoming);
priorityLink.addEventListener("click", displayPriority);

setExamples();

export { projectFolders };