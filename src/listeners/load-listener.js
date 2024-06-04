import { renderFilter } from "../components/render-filter.js";

export const createFilterListener = () => {
    document.addEventListener("DOMContentLoaded", renderFilter);
}