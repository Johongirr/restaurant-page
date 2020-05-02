function createMenu(){
    const container = document.querySelector('.header__text-box');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = 
    `
    <section class="menu" id="menu">
    <div class="menu__text-container">
        <h2 class="menu__title">
            Our Menu
        </h2>
        <p class="menu__paragraph-title">
            See below list of foods, sweets and drinks
        </p>
    </div>
    <div class="menu__btn-container">
        <button class="btn menu__btn menu__btn-meals">Meals</button>
        <button class="btn menu__btn menu__btn-sweets">Sweets</button>
        <button class="btn menu__btn menu__btn-drinks">Drinks</button>
    </div>
    <div class="menu__container d-grid-2">
        <div class="menu__description-container">
            <div class="menu__description">
                <img src="../src/img/kebab1.jpg" class="menu__img" alt="">
                <div>
                    <h3 class="menu__meal-title">
                        Gruby Kebab
                    </h3>
                    <p class="menu__paragraph">
                        Gruby kebab can be ordered in beef or chicken or mix and with the sause
                        of garlic or spicy or mix
                    </p>
                    <span class="menu__meal-price menu__meal-price--bg-secondary">
                        $12.00
                    </span>
                </div>
            </div>
            <div class="menu__description">
                <img src="../src/img/kebab2.jpg" class="menu__img" alt="">
                <div>
                    <h3 class="menu__meal-title">
                        Gruby Kebab
                    </h3>
                    <p class="menu__paragraph">
                        Gruby kebab can be ordered in beef or chicken or mix and with the sause
                        of garlic or spicy or mix
                    </p>
                    <span class="menu__meal-price menu__meal-price--bg-secondary">
                        $12.00
                    </span>
                </div>
            </div>
            <div class="menu__description">
                <img src="../src/img/kebab3.jpg" class="menu__img" alt="">
                <div>
                    <h3 class="menu__meal-title">
                        Gruby Kebab
                    </h3>
                    <p class="menu__paragraph">
                        Gruby kebab can be ordered in beef or chicken or mix and with the sause
                        of garlic or spicy or mix
                    </p>
                    <span class="menu__meal-price menu__meal-price--bg-secondary">
                        $12.00
                    </span>
                </div>
            </div> 
        </div>
        <div class="menu__description-container">
            <div class="menu__description">
                <img src="../src/img/kebab4.jpg" class="menu__img" alt="">
                <div>
                    <h3 class="menu__meal-title">
                        Gruby Kebab
                    </h3>
                    <p class="menu__paragraph">
                        Gruby kebab can be ordered in beef or chicken or mix and with the sause
                        of garlic or spicy or mix
                    </p>
                    <span class="menu__meal-price menu__meal-price--bg-secondary">
                        $12.00
                    </span>
                </div>
            </div>
            <div class="menu__description">
                <img src="../src/img/kebab5.jpg" class="menu__img" alt="">
                <div>
                    <h3 class="menu__meal-title">
                        Gruby Kebab
                    </h3>
                    <p class="menu__paragraph">
                        Gruby kebab can be ordered in beef or chicken or mix and with the sause
                        of garlic or spicy or mix
                    </p>
                    <span class="menu__meal-price menu__meal-price--bg-secondary">
                        $12.00
                    </span>
                </div>
            </div>
            <div class="menu__description">
                <img src="../src/img/kebab6.jpg" class="menu__img" alt="">
                <div>
                    <h3 class="menu__meal-title">
                        Gruby Kebab
                    </h3>
                    <p class="menu__paragraph">
                        Gruby kebab can be ordered in beef or chicken or mix and with the sause
                        of garlic or spicy or mix
                    </p>
                    <span class="menu__meal-price menu__meal-price--bg-secondary">
                        $12.00
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
    `
    container.appendChild(div);

}
export default createMenu;