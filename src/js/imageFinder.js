// import { defaults } from 'autoprefixer';
import apiService from './apiService';
import galleryMarkup from './galleryMarkup';
// const input = document.querySelector('input[name=query]');
const searchForm = document.querySelector('#search-form');
// const submitBtn = document.querySelector('.js-submit-btn');
const loadMoreBtn = document.querySelector('.js-load-more-btn');
const galleryOutput = document.querySelector('.gallery');
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    apiService.query = event.currentTarget.elements.query.value.toLowerCase();
    apiService.resetPageNumber();
    galleryOutput.innerHTML = '';
    searchForm.reset();
    apiService.getGalleryList()
   .then(hits=> { galleryMarkup(hits);});

   });
loadMoreBtn.addEventListener('click', () => {
    apiService.getGalleryList()
        .then(hits => {
            galleryMarkup(hits);
               });
});

export default galleryOutput;