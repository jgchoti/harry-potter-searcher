import { ORIGIN } from "../../config.js";
import { state } from "../../data/state.js";

export const apiService = async () => {

    let url = `${ORIGIN}${state.type}/`;

    if (['characters', 'potions', 'spells'].includes(state.type)) {
        state.filter.nameType = 'name';
    } else {
        state.filter.nameType = 'title';
    }

    //filter parameters
    let filterQuery = `?filter[${state.filter.nameType}_${state.filter.filterBy}]=${state.searchTerm}`;

    //sort parameters
    let sortQuery = `&sort=${state.sort.ascending ? '' : '-'}${state.sort.sortBy}`;

    // pagination parameters
    const pageQuery = {
        'page[number]': state.pagination.currentPage,
        'page[size]': state.pagination.pageSize,
    };


    url += filterQuery + sortQuery;
    for (const key in pageQuery) {
        if (pageQuery[key] !== undefined) {
            url += `&${key}=${pageQuery[key]}`;
        }
    }
    console.log(url)
    const encodedURL = encodeURI(url);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const searchResult = await response.json();
    return searchResult;

};
