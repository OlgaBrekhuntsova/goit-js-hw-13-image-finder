import galleryMarkupTemplate from '../templates/gallery.hbs';
const galleryOutput = document.querySelector('.gallery');
function galleryMarkup(galleryItems) {
        return galleryOutput.insertAdjacentHTML('beforeend', galleryMarkupTemplate(galleryItems))
};
export default galleryMarkup;