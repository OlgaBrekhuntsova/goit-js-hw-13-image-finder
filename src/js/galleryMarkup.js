import galleryMarkupTemplate from '../templates/gallery.hbs';
// const galleryOutput = document.querySelector('.gallery');
import galleryOutput from './imageFinder';
function galleryMarkup(galleryItems) {
        return galleryOutput.insertAdjacentHTML('beforeend', galleryMarkupTemplate(galleryItems))
};
export default galleryMarkup;