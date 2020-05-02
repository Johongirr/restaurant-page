function createGallery(){
    const container = document.querySelector('.header__text-box');
    const div = document.createElement('div');
    div.innerHTML = 
    `
    <section class="gallery" id="gallery">
    <h2 class="gallery__title">
        Gallery
    </h2>
    <div class="gallery__container">
        <img src="../src/img/kebab1.jpg" alt="" class="gallery__img gallery__img-1">
        <img src="../src/img/kebab2.jpg" alt="" class="gallery__img gallery__img-2">
        <img src="../src/img/kebab3.jpg" alt="" class="gallery__img gallery__img-3">
        <img src="../src/img/kebab4.jpg" alt="" class="gallery__img gallery__img-4">
        <img src="../src/img/kebab5.jpg" alt="" class="gallery__img gallery__img-5">
        <img src="../src/img/kebab6.jpg" alt="" class="gallery__img gallery__img-6">
        <img src="../src/img/kebab7.jpg" alt="" class="gallery__img gallery__img-7">
        <img src="../src/img/kebab8.jpg" alt="" class="gallery__img gallery__img-8">
        <img src="../src/img/kebab9.jpg" alt="" class="gallery__img gallery__img-9">
        <img src="../src/img/kebab10.jpg" alt="" class="gallery__img gallery__img-10">
        <img src="../src/img/kebab11.jpg" alt="" class="gallery__img gallery__img-11">
        <img src="../src/img/kebab12.jpg" alt="" class="gallery__img gallery__img-12">
    </div>
</section>
    `
    container.appendChild(div);
}
export default createGallery