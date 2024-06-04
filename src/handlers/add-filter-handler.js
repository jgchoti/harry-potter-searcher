import { state } from "../../data/state.js";
import { renderFilter } from "../components/render-filter.js";

export const addFilterHandler = () => {
    state.filterCount++
    renderFilter()
};
