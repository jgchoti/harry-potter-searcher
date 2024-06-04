export const updatePageSize = (value) => {
    state.pagination.pageSize = Number(value);
    updateFilters();
    updateSort();
};