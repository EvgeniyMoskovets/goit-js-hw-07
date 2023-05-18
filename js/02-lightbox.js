import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const GalleryCards = createGalleryCards(galleryItems);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
        `;
    })
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", GalleryCards);

const lightbox = new SimpleLightbox(".gallery a", {
  showCounter: false,
  captionsData: "alt",
  captionDelay: 250,
});
