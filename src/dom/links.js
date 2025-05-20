import { projectFolders } from "../index";
import {    displayEditTodoModalPriority,
            displayEditTodoModalToday,
            displayEditTodoModalUpcoming } from "../dom/modal";
import { format, addDays } from "date-fns";
import { checkTodoToday, removeTodoToday } from "../controllers/today";
import { checkTodoUpcoming, removeTodoUpcoming } from "../controllers/upcoming";
import { checkTodoPriority, removeTodoPriority } from "../controllers/priority";
import deleteIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.svg";
import priorityIcon from "../icons/star.svg";


