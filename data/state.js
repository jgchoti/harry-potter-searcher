export const state = {
    searchTerm: '',
    type: 'characters',
    filter: {
        nameType: 'name',
        filterBy: 'cont',
    },
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


