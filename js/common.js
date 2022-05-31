window.onload = function() {

   setTimeout(function () {
      document.body.classList.add('loaded');

      Draggable.create('.gallery', {
         bounds : 'body', // ограничение перемещения
         inertia : true, // инерция -- должен быть подключен плагин gsap InertiaPlugin 
      });
   }, 200);

}
