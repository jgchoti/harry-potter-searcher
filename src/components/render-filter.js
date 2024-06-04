import { state } from "../../data/state.js";
import { FILTER_OPTION, FILTER_BY_OPTION } from "../../data/constant.js";
import { selectorListener } from "../listeners/selector-listener.js";
import { renderSelector } from "./render-selector.js";
import { addFilterListener } from "../listeners/add-filter-listener.js";
import { textInputListener } from "../listeners/text-input-listener.js";

export const renderFilter = () => {
    const container = document.getElementById('filter');

    const filterId = `selector-filter-${state.filterCount}`;
    const filterById = `selector-filter-by-${state.filterCount}`;
    const inputId = `input-text-${state.filterCount}`;

    let btnContainer = document.getElementById('container-btn-add');
    if (!btnContainer) {
        btnContainer = document.createElement('div');
        btnContainer.id = 'container-btn-add';
        const addFilterBtn = document.createElement('button');
        addFilterBtn.innerHTML = 'Add Filter';
        addFilterBtn.id = 'btn-add-filter';
        btnContainer.appendChild(addFilterBtn);
        container.appendChild(btnContainer);
        addFilterListener(addFilterBtn.id);
    }

    const filterSelector = renderSelector(filterId, FILTER_OPTION[state.type]);
    container.insertBefore(filterSelector, btnContainer);

    const filterBySelector = renderSelector(filterById, FILTER_BY_OPTION);
    container.insertBefore(filterBySelector, btnContainer);

    const inputEl = document.createElement('input');
    inputEl.id = inputId;
    inputEl.type = "text";
    inputEl.className = "input-field";
    container.insertBefore(inputEl, btnContainer);

    textInputListener(inputId);
    selectorListener(filterId);
    selectorListener(filterById);

};

