let pageNumber=1;
const key = '19987924-b7a96d980a74a373c9da34c4a';
const url = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const apiService = {
    getGalleryList(searchQuery) {
        if (searchQuery !== "") {
            return fetch(`${url}&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${key}`)
                .then(response => { return response.json(); })
            // .then((data) => {
            //     if (!data.status) { return data }
            //     throw new Error(`${data.status}: ${data.message}`);
            // });
        }
        else { console.log('Enter at least 1 symbol') }
    },
 
};

export default apiService;