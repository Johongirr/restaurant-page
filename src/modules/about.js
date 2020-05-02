function createAbout(){
    const container = document.querySelector('.header__text-box');
    const div = document.createElement('div');
    div.innerHTML = 
    `
    <section class="about" id="about">
    <div class="about__container d-grid-2">
        <div class="about__text-container">
            <h2 class="about__title">
                About us
            </h2>
            <p class="about__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime rem consequatur autem et! Consequatur, sequi alias recusandae voluptatum deserunt nisi voluptatibus? Libero repellendus nemo facere, obcaecati quaerat ea beatae!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore neque eligendi quibusdam debitis laboriosam dicta quod aut pariatur reiciendis temporibus, doloribus, blanditiis culpa quisquam est qui adipisci nemo ut dolore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque voluptate dolorum rerum iste non, quod aperiam dolorem dolore earum obcaecati saepe doloribus placeat porro tenetur magnam nemo atque? Nulla?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste nostrum vel voluptate unde, iure eaque dicta officia voluptas rem perspiciatis, quidem harum libero illum porro inventore. Itaque, error dolor.
            </p>
        </div>
        <div class="about__restaurant-image">
            <img src="../src/img/chef.jpg" alt="">
        </div>
    </div>
</section>
    `
    container.appendChild(div);
}
export default createAbout;