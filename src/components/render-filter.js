import { state } from "../../data/state.js";
import { FILTER_OPTION, FILTER_BY_OPTION } from "../../data/constant.js";
import { selectorListener } from "../listeners/selector-listener.js";
import { renderSelector } from "./render-selector.js";
import { addFilterListener } from "../listeners/add-filter-listener.js";
import { textInputListener } from "../listeners/text-input-listener.js";

export const renderFilter = () => {
    const container = document.getElementById('filter');

    let addFilterBtn = document.getElementById('btn-add-filter');
    if (!addFilterBtn) {
        addFilterBtn = document.createElement('button');
        addFilterBtn.innerHTML = 'Add Filter';
        addFilterBtn.id = 'btn-add-filter';
        container.appendChild(addFilterBtn);
        addFilterListener(addFilterBtn.id);
    }


    const filterId = `selector-filter-${state.filterCount}`;
    const filterById = `selector-filter-by-${state.filterCount}`;
    const inputId = `input-text-${state.filterCount}`;

    const filterSelector = renderSelector(filterId, FILTER_OPTION[state.type]);
    container.appendChild(filterSelector);


    const filterBySelector = renderSelector(filterById, FILTER_BY_OPTION);
    container.appendChild(filterBySelector);


    const inputEl = document.createElement('input');
    inputEl.id = inputId;
    inputEl.type = "text";
    inputEl.className = "input-field";
    container.appendChild(inputEl);

    // Attach event listeners to the new elements

    textInputListener(inputId);
    selectorListener(filterId);
    selectorListener(filterById);

};




