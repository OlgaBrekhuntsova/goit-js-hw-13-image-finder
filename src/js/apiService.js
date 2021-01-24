import { success, info, error } from './pnotify.js';
const key = '19987924-b7a96d980a74a373c9da34c4a';
const url = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
export default {
searchQuery: '',
pageNumber: 1,
    getGalleryList() {
                    return fetch(`${url}&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${key}`)
                .then(response => { return response.json(); })
                .then((data) => {
                    if (data.total > 0) {
                        success({
                            title: 'Successful search!',
                            text: `We've got ${data.total} images for you.`
                        });
                        return data;
                    }
                    else { throw new Error() };
                })
                .then(({ hits }) => {
                    this.incrementPageNumber();
                    return hits;
                })
                .catch((e) => {
                    error({
                        title: 'Ooops! 🤷',
                        text: 'There is no matches. Try another query.',
                        type: 'error'
                    });
                })
       
    },
    incrementPageNumber() { this.pageNumber += 1;},
    resetPageNumber() {this.pageNumber = 1;
 },
    get query() { return this.searchQuery; },
    set query(value) { return this.searchQuery = value;},
};

