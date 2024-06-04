import { state } from "../../data/state.js";
import { renderPaginator } from "../components/render-paginator.js";

export const updatePageSize = (value = 5) => {

    state.pagination.pageSize = Number(value);
    console.log(state.pagination.pageSize)
    state.pagination.currentPage = 1

};