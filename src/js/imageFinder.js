import refs from './refs';
import {error } from './pnotify.js';
import apiService from './apiService';
import galleryMarkup from './galleryMarkup';
let prevScrollHeight = 0;
refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    apiService.query = event.currentTarget.elements.query.value.toLowerCase();
    apiService.resetPageNumber();
    refs.loadMoreBtn.classList.add('is-hidden');
    refs.galleryOutput.innerHTML = '';
    refs.searchForm.reset();
    if (apiService.query !== "") {
        fetchGalleryList();
       
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
           fetchGalleryList(); 
});
function fetchGalleryList() {
    apiService.getGalleryList()
        .then(hits => {
        if (apiService.searchSuccess) { refs.loadMoreBtn.classList.remove('is-hidden'); };
                galleryMarkup(hits);
            scrollToRenderStart();
        });
    
};
function scrollToRenderStart() {
            window.scrollTo({
  top: prevScrollHeight,
        });
    prevScrollHeight = document.documentElement.offsetHeight-70;
 };