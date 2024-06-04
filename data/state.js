export const state = {
    type: 'characters',
    filterCount: 1,
    filter: [],
    sort: {
        sortBy: 'name',
        ascending: true
    },
    pagination: {
        currentPage: 1,
        pageSize: 5,
        totalPages: 1,
        totalResults: 0
    },
    data: []
}

