window.onload = function() {

   setTimeout(function () {
      document.body.classList.add('loaded');

      Draggable.create('.gallery', {
         bounds : 'body', // ограничение перемещения
         inertia : true, // инерция -- должен быть подключен плагин gsap InertiaPlugin 
      });
   }, 200);

}


// Открытие фото
import PhotoSwipeLightbox from '../libs/PhotoSwipe/photoswipe-lightbox.esm.min.js';

document.querySelectorAll('.gallery__item').forEach(linkImg => {
    const img = new Image();
    const urlImg = linkImg.href;

    img.src = urlImg;

    linkImg.dataset.pswpWidth = img.width;
    linkImg.dataset.pswpHeight = img.height;
})

const lightbox = new PhotoSwipeLightbox({
  gallery: '.gallery',
  children: '.gallery__item',
  pswpModule: () => import('../libs/PhotoSwipe/photoswipe.esm.min.js')
});
lightbox.init();