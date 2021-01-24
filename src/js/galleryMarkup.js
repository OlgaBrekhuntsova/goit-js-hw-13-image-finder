import galleryMarkupTemplate from '../templates/gallery.hbs';
// import galleryOutput from './imageFinder';
import refs from './refs';
function galleryMarkup(galleryItems) {
        return refs.galleryOutput.insertAdjacentHTML('beforeend', galleryMarkupTemplate(galleryItems))
};
export default galleryMarkup;