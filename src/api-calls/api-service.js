import { ORIGIN } from "../../config.js";
import { state } from "../../data/state.js";

export const apiService = async () => {
    console.log(state)
    let url = `${ORIGIN}${state.type}/`;

    //filter parameters
    let isFirstFilter = true;
    state.filter.forEach(filter => {
        let filterQuery = `filter[${filter.filterType}_${filter.filterBy}]=${filter.searchTerm}`;
        if (isFirstFilter) {
            url = url + '?' + filterQuery;
            isFirstFilter = false;
        } else {
            url = url + '&' + filterQuery;
        }
    });

    //sort parameters
    let sortQuery = `&sort=${state.sort.ascending ? '' : '-'}${state.sort.sortBy}`;

    // pagination parameters
    const pageQuery = {
        'page[number]': state.pagination.currentPage,
        'page[size]': state.pagination.pageSize,
    };


    url += sortQuery;
    for (const key in pageQuery) {
        if (pageQuery[key] !== undefined) {
            url += `&${key}=${pageQuery[key]}`;
        }
    }

    const encodedURL = encodeURI(url);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    console.log(url)
    const searchResult = await response.json();
    return searchResult;

};
