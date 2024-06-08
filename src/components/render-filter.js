import { state } from "../../data/state.js";
import { FILTER_OPTION, FILTER_BY_OPTION } from "../../data/constant.js";
import { selectorListener } from "../listeners/selector-listener.js";
import { renderSelector } from "./render-selector.js";
import { textInputListener } from "../listeners/text-input-listener.js";

export const renderFilter = (reset = false) => {
    const container = document.getElementById('filter');

    if (reset) {
        container.innerHTML = '';
    }

    const filterId = `selector-filter-${state.filterCount}`;
    const filterById = `selector-filter-by-${state.filterCount}`;
    const inputId = `input-text-${state.filterCount}`;

    const filterContainer = document.createElement('div');
    filterContainer.classList.add('container-filter');

    const filterSelector = renderSelector(filterId, FILTER_OPTION[state.type]);
    filterContainer.appendChild(filterSelector);

    const filterBySelector = renderSelector(filterById, FILTER_BY_OPTION);
    filterContainer.appendChild(filterBySelector);

    const inputEl = document.createElement('input');
    inputEl.id = inputId;
    inputEl.type = "text";
    inputEl.className = "input-field";
    filterContainer.appendChild(inputEl);

    container.appendChild(filterContainer);

    textInputListener(inputId);
    selectorListener(filterId);
    selectorListener(filterById);
};


