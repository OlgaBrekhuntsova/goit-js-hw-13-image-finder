import refs from './refs';
import {error } from './pnotify.js';
import apiService from './apiService';
import galleryMarkup from './galleryMarkup';
refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    apiService.query = event.currentTarget.elements.query.value.toLowerCase();
    apiService.resetPageNumber();
    refs.galleryOutput.innerHTML = '';
    refs.searchForm.reset();
    if (apiService.query !== "") {
        apiService.getGalleryList()
            .then(hits => { galleryMarkup(hits); });
    }
    else {
        return error({
            title: 'Search error 🤷',
            text: 'Enter at least one symbol',
            type: 'error'
        });
    }
   });
refs.loadMoreBtn.addEventListener('click', () => {
           apiService.getGalleryList()
            .then(hits => {
                galleryMarkup(hits);
            }); 
});

