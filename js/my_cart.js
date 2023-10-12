var myCartArr = [
    {
        img: './assets/customer-img/img/Rectangle-8.png',
        name: 'French Toast',
        veg_NonVeg_Img: './assets/customer-svg/svg/Veg.svg',
        tasteImg: './assets/customer-svg/svg/Gluten-Free.svg',
        tasteText: 'Gluten Free',
        ratingImg: './assets/customer-svg/svg/4 star.svg',
        description: 'Thick slices of bread dipped in a cinnamon batter, made with soya milk and mashed bananas',
        rate: 189,
    },

    {
        img: './assets/customer-img/img/Rectangle-7.png',
        name: 'Classic American Breakfast',
        veg_NonVeg_Img: './assets/customer-svg/svg/Non-veg.svg',
        tasteImg: './assets/customer-svg/svg/Gluten-Free.svg',
        tasteText: 'Gluten Free',
        ratingImg: './assets/customer-svg/svg/3 star.svg',
        description: 'Two eggs any style, choice of bacon or sausage, toast, and home fries.',
        rate: 219,
    },

    {
        img: './assets/customer-img/img/Rectangle 8 (1).png',
        name: 'Belgian Chocolate Waffels',
        veg_NonVeg_Img: './assets/customer-svg/svg/Veg.svg',
        tasteImg: './assets/customer-svg/svg/sweet 2.svg',
        tasteText: 'Gluten Free',
        ratingImg: './assets/customer-svg/svg/5 star.svg',
        description: 'Two golden brown chocolate waffles served with whipped cream and fresh berries.',
        rate: 189,
    }
]

var clutter = " ";

myCartArr.forEach((val) => {
    clutter += `
    <div class="item-added-modify d-flex flex-d-col">
    <div class="item-added d-flex ai-center justify-space-between h-fit-content">
        <div class="item-added-details d-flex ai-flex-start h-fit-content w-fit-content g-12">
            <div class="item-added-img">
                <img src="${val.img}" alt="item-added-1">
            </div>
            <div
                class="item-added-content d-flex flex-d-col ai-flex-start g-8">
                <div
                    class="item-added-title d-flex flex-d-col ai-flex-start g-4">
                    <p>${val.name}</p>
                    <div
                        class="item-added-speciality w-fit-content d-flex ai-center justify-flex-start g-8">
                        <div class="speciality-vegNonveg d-flex ai-center justify-center">
                        <img src="${val.veg_NonVeg_Img}" alt="item-added-1">
                        </div>
                        <div class="speciality-rating d-flex ai-center justify-center">
                            <img src="${val.ratingImg}" alt="item-added-1">
                        </div>
                        <div class="speciality-taste d-flex ai-center justify-center g-4">
                            <div class="speciality-taste-icon  d-flex ai-center justify-center">
                                <img src="${val.tasteImg}" alt="item-added-1">
                            </div>
                            <div class="speciality-taste-text">
                                <p>${val.tasteText}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-added-description d-flex flex-d-col">
                    <p>${val.description}</p>
                </div>
            </div>
        </div>
        <div class="item-added-quantity d-flex flex-d-col ai-center justify-center g-8">
            <p>&#8377;${val.rate}</p>
            <div class="item-add-remove d-flex ai-center justify-space-evenly g-6">
                <button class="item-remove d-flex justify-center ai-center">
                    <span
                        class="item-remove-btn material-symbols-rounded">remove</span>
                </button>
                <p>1</p>
                <button class="item-add d-flex justify-center ai-center">
                    <span
                        class="item-add-btn material-symbols-rounded">add</span>
                </button>
            </div>
        </div>
    </div>
    <div class="item-modify d-flex g-4 justify-flex-end ai-center">
        <span class="material-symbols-rounded">edit_note</span>
        <p>Add Instructions</p>
    </div>
    <div class="add-instruction">
        <form action=""
            class="coupon-input d-flex justify-center ai-center g-16">
            <div class="textfield-outlined">
                <input id="input-instruction-1" type="text" placeholder=" ">
                <label for="input-instruction-1">
                    <p>
                        Add your instructions here
                    </p>
                </label>
            </div>
            <button type="button" disabled
                class="add-instruction-btn d-flex ai-center justify-center g-6">
                Add Instruction
            </button>
        </form>
    </div>
    </div>
    `
})

document.getElementById('items-added').innerHTML = clutter;

