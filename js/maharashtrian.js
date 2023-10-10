var maharashtrianArr = [
    {
        img: './assets/customer-img/img/shri-khand.png',
        name: 'Shree Khand',
        veg_NonVeg_Img: './assets/customer-svg/svg/Veg.svg',
        tasteImg: './assets/customer-svg/svg/sweet 3.svg',
        tasteText: 'Sweet',
        ratingImg: './assets/customer-svg/svg/2 star.svg',
        description: 'Kara Kuzhambu is a tangy and spicy curry made with tamarind, spices, and vegetables.',
        rate: 189,
    },

    {
        img: './assets/customer-img/img/pooran-poli.png',
        name: 'Pooran Poli',
        veg_NonVeg_Img: './assets/customer-svg/svg/Veg.svg',
        tasteImg: './assets/customer-svg/svg/Gluten-Free.svg',
        tasteText: 'Gluten Free',
        ratingImg: './assets/customer-svg/svg/3 star.svg',
        description: 'Two eggs any style, choice of bacon or sausage, toast, and home fries.',
        rate: 210,
    },

    {
        img: './assets/customer-img/img/malabar-fish-curry.png',
        name: 'Malabar Fish',
        veg_NonVeg_Img: './assets/customer-svg/svg/Non-veg.svg',
        tasteImg: './assets/customer-svg/svg/hot 1.svg',
        tasteText: 'Gluten Free',
        ratingImg: './assets/customer-svg/svg/5 star.svg',
        description: 'Two golden brown chocolate waffles served with whipped cream and fresh berries.',
        rate: 210,
    },

    {
        img: './assets/customer-img/img/malvani-fish.png',
        name: 'Malvani Fish',
        veg_NonVeg_Img: './assets/customer-svg/svg/Non-veg.svg',
        tasteImg: './assets/customer-svg/svg/Gluten-free.svg',
        tasteText: 'Gluten Free',
        ratingImg: './assets/custoer-svg/svg/5 star.svg',
        description: 'Three fluffy pancakes served with syrup and butter.',
        rate: 230,
    },

    {
        img: './assets/customer-img/img/vendakkai-poriyal.png',
        name: 'Bhindi',
        veg_NonVeg_Img: './assets/customer-svg/svg/veg.svg',
        tasteImg: './assets/customer-svg/svg/Vegan.svg',
        tasteText: 'Vegan',
        ratingImg: './assets/customer-svg/svg/5 star.svg',
        description: 'Chorizo, peppers, onions, and cheese wrapped in aflour tortilla.',
        rate: 230,
    },

    {
        img: './assets/customer-img/img/methi-chi-bhaji.png',
        name: 'Methi Chi Bhaji',
        veg_NonVeg_Img: './assets/customer-svg/svg/veg.svg',
        tasteImg: './assets/customer-svg/svg/Vegan.svg',
        tasteText: 'Vegan',
        ratingImg: './assets/customer-svg/svg/5 star.svg',
        description: 'Poha is a dish made from flattened rice flakes, flavored with spices and peanuts.',
        rate: 90,
    },

    {
        img: './assets/customer-img/img/kolhapuri-chicken.png',
        name: 'Kolhapuri Chicken',
        veg_NonVeg_Img: './assets/customer-svg/svg/Non-veg.svg',
        tasteImg: './assets/customer-svg/svg/Gluten-Free.svg',
        tasteText: 'Non Veg',
        ratingImg: './assets/customer-svg/svg/5 star.svg',
        description: 'Upma is a dish made from semolina (rava or suji) cooked with spices and vegetables, creating a textured breakfast option.',
        rate: 110,
    },

    {
        img: './assets/customer-img/img/vangi-bhaat.png',
        name: 'Dal Bhaat',
        veg_NonVeg_Img: './assets/customer-svg/svg/veg.svg',
        tasteImg: './assets/customer-svg/svg/Vegan.svg',
        tasteText: 'Vegan',
        ratingImg: './assets/customer-svg/svg/5 star.svg',
        description: 'Millet upma is a dish, made using millet grains, offering a wholesome and  gluten-free breakfast option.',
        rate: 130,
    },
]


//SPLIT


var half1 = maharashtrianArr.slice(0, Math.ceil(maharashtrianArr.length / 2));
var half2 = maharashtrianArr.slice(Math.ceil(maharashtrianArr.length / 2));

var clutter1 = " ";
var clutter2 = " ";

for (var i = 0; i < half1.length; i++) {
    var val = half1[i];
    clutter1 += `
    <div
        class="menu-content-item d-flex ai-center justify-space-between">
        <div class="menu-food d-flex ai-flex-start g-12">
            <div class="menu-food-img d-flex ai-flex-end">
                <img src="${val.img}"
                    alt="menu-food-img">
                <div class="item-status">
                    <p>Added</p>
                </div>
            </div>
            <div
                class="menu-food-description d-flex flex-d-col ai-flex-start g-8">
                <div
                    class="menu-food-title flex-d-col ai-flex-start g-4">
                    <div class="menu-food-name">
                        <p>${val.name}</p>
                    </div>
                    <div
                        class="menu-food-speciality d-flex ai-center justify-flex-start g-8">
                        <div
                            class="veg-nonveg d-flex ai-center justify-center">
                        <img src="${val.veg_NonVeg_Img}" alt=""> 
                        </div>
                        <div
                            class="taste d-flex ai-center justify-center g-4">
                            <div
                                class="taste-icon d-flex ai-center justify-center">
                                <img src="${val.tasteImg}" alt="">
                            </div>
                            <div class="taste-text">
                                <p>${val.tasteText}</p>
                            </div>
                        </div>
                        <div
                            class="ratings d-flex ai-center justify-center">
                            <img src="${val.ratingImg}" alt="">
                        </div>
                    </div>
                </div>
                <div class="menu-food-details">
                    <p>${val.description}
                    </p>
                </div>
            </div>
        </div>
        <div
            class="menu-food-quantity d-flex flex-d-col ai-center justify-center g-8">
            <p class="rate">&#8377;${val.rate}</p>
            <div class="add-remove d-flex ai-center justify-center g-8">
                <button class="btn d-flex ai-center justify-center">
                    <span
                        class="remove-btn material-symbols-rounded">remove</span>
                </button>
                <div class="quantity">
                    <p>0</p>
                </div>
                <button class="btn d-flex ai-center justify-center">
                    <span
                        class="add-btn material-symbols-rounded">add</span>
                </button>
            </div>
        </div>
    </div>`;
}

for (var j = 0; j < half2.length; j++) {
    var val = half2[j];
    clutter2 += `
    <div
        class="menu-content-item d-flex ai-center justify-space-between">
        <div class="menu-food d-flex ai-flex-start g-12">
            <div class="menu-food-img d-flex ai-flex-end">
                <img src="${val.img}"
                    alt="menu-food-img">
                <div class="item-status">
                    <p>Added</p>
                </div>
            </div>
            <div
                class="menu-food-description d-flex flex-d-col ai-flex-start g-8">
                <div
                    class="menu-food-title flex-d-col ai-flex-start g-4">
                    <div class="menu-food-name">
                        <p>${val.name}</p>
                    </div>
                    <div
                        class="menu-food-speciality d-flex ai-center justify-flex-start g-8">
                        <div
                            class="veg-nonveg d-flex ai-center justify-center">
                        <img src="${val.veg_NonVeg_Img}" alt=""> 
                        </div>
                        <div
                            class="taste d-flex ai-center justify-center g-4">
                            <div
                                class="taste-icon d-flex ai-center justify-center">
                                <img src="${val.tasteImg}" alt="">
                            </div>
                            <div class="taste-text">
                                <p>${val.tasteText}</p>
                            </div>
                        </div>
                        <div
                            class="ratings d-flex ai-center justify-center">
                            <img src="${val.ratingImg}" alt="">
                        </div>
                    </div>
                </div>
                <div class="menu-food-details">
                    <p>${val.description}
                    </p>
                </div>
            </div>
        </div>
        <div
            class="menu-food-quantity d-flex flex-d-col ai-center justify-center g-8">
            <p class="rate">&#8377;${val.rate}</p>
            <div class="add-remove d-flex ai-center justify-center g-8">
                <button class="btn d-flex ai-center justify-center">
                    <span
                        class="remove-btn material-symbols-rounded">remove</span>
                </button>
                <div class="quantity">
                    <p>0</p>
                </div>
                <button class="btn d-flex ai-center justify-center">
                    <span
                        class="add-btn material-symbols-rounded">add</span>
                </button>
            </div>
        </div>
    </div>`;
}

document.querySelector('#maharashtrianPg1').innerHTML = clutter1;
document.querySelector('#maharashtrianPg2').innerHTML = clutter2;
