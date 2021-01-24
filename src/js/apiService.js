const key = '19987924-b7a96d980a74a373c9da34c4a';
const url = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const apiService = {
searchQuery: '',
pageNumber: 1,
    getGalleryList() {
        if (this.searchQuery !== "") {
            return fetch(`${url}&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${key}`)
                .then(response => { return response.json(); })
                .then(({ hits }) => {
                    this.pageNumber += 1;
                    return hits;
                })
            // .then((data) => {
            //     if (!data.status) { return data }
            //     throw new Error(`${data.status}: ${data.message}`);
            // });
        }
        else { console.log('Enter at least 1 symbol') }
    },
    resetPageNumber() {this.pageNumber = 1;
 },
    get query() { return this.searchQuery; },
    set query(value) { return this.searchQuery = value;},
};

export default apiService;