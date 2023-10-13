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

//My Cart remove the div
document.addEventListener('DOMContentLoaded', () => {
    const itemAddedContainers = document.querySelectorAll('.item-added-modify');
    itemAddedContainers.forEach(container => {
        const quantityElement = container.querySelector('.item-add-remove p');
        const removeButton = container.querySelector('.item-remove-btn');
        const addButton = container.querySelector('.item-add-btn');
        const itemModify = container.querySelector('.item-modify');
        const itemAdded = container.querySelector('.item-added');
        removeButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
            quantityElement.textContent = currentQuantity - 1;
            } else {
                quantityElement.textContent = 0; 
            }
            if(quantityElement.textContent === '0')  {
                quantityElement.style.color = '#888';
                removeButton.style.color = '#888';
                removeButton.parentElement.style.border = '1px solid #888';
                addButton.style.color = '#888';
                addButton.parentElement.style.border = '1px solid #888';
                itemModify.style.display = 'none';
                itemAdded.style.paddingBottom = '20px';
            }
        });
        addButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElement.textContent);
            itemAdded.style.paddingBottom = '0px';
            itemModify.style.display = 'flex';
            quantityElement.textContent = currentQuantity + 1;
            quantityElement.style.color = '#54ba54';
            removeButton.style.color = '#54ba54';
            removeButton.parentElement.style.border = '1px solid #54ba54';
            addButton.style.color = '#54ba54';
            addButton.parentElement.style.border = '1px solid #54ba54';
        });
    });
  });

  
// Get all elements with class "item-modify"
const itemModifyElements = document.querySelectorAll('.item-modify');

// Attach click event listener to each "item-modify" element
itemModifyElements.forEach((element) => {
  element.addEventListener('click', function () {
    // Get the next sibling element with class "add-instruction"
    const addInstructionElement = this.nextElementSibling;

    // Reset changes made to the previously clicked element
    const previouslyClickedElement = document.querySelector('.item-modify.clicked');
    if (previouslyClickedElement) {
      const previousAddInstructionElement = previouslyClickedElement.nextElementSibling;
      previouslyClickedElement.querySelector('.material-symbols-rounded').innerText = 'edit_note';
      previouslyClickedElement.querySelector('p').innerText = 'Add Instructions';
      previouslyClickedElement.classList.remove('clicked');
    }

    // Check if "add-instruction" element is currently hidden
    if (addInstructionElement.style.display === 'block') {
      // Hide the clicked "add-instruction" element
      this.querySelector('.material-symbols-rounded').innerText = 'edit_note';
      this.querySelector('p').innerText = 'Add Instructions';
      addInstructionElement.style.display = 'none';
      this.classList.remove('clicked');
    } else {

      const allAddInstructionElements = document.querySelectorAll('.add-instruction');
      allAddInstructionElements.forEach((element) => {
        element.style.display = 'none';
      });

      // Show the clicked "add-instruction" element
      this.querySelector('.material-symbols-rounded').innerText = 'close';
      this.querySelector('p').innerText = 'Cancel';
      addInstructionElement.style.display = 'block';
      this.classList.add('clicked');
    }
  });
});

