import { defaults } from 'autoprefixer';
import apiService from './apiService';
import galleryMarkup from './galleryMarkup';
// const input = document.querySelector('input[name=query]');
const searchForm = document.querySelector('#search-form');
// const submitBtn = document.querySelector('.js-submit-btn');
const loadMoreBtn = document.querySelector('.js-load-more-btn');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value;
    apiService.getGalleryList(searchQuery.toLowerCase())
        .then(({hits}) => {
            console.log(hits);
            galleryMarkup(hits);
        });

   });


