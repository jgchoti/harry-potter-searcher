import { state } from "../../data/state.js"
import { setData } from "../utils/set-data.js"
import { updateSort } from "../utils/update-sort.js";

export const sortHandler = (event) => {
    const sortOrder = event.target.id

    const sortButtons = document.querySelectorAll('button');
    sortButtons.forEach(button => button.classList.remove('active'));

    const buttonEl = document.getElementById(sortOrder);
    buttonEl.classList.add('active');

    updateSort(sortOrder)

}