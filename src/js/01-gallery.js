import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryItem = `<div ><a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" 
  alt="${item.description}"/></a></div>`;
  gallery.insertAdjacentHTML('beforeend', galleryItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});
