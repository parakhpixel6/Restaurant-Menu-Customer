const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    speed: 10,
    spaceBetween: 100,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// Loop through each add-remove element
const addRemoveElements = document.querySelectorAll('.add-remove');
addRemoveElements.forEach(addRemoveElement => {
    const removeButton = addRemoveElement.querySelector('.remove-btn');
    const addButton = addRemoveElement.querySelector('.add-btn');
    const quantityElement = addRemoveElement.querySelector('.quantity p');
    const itemStatusElement = addRemoveElement.closest('.menu-content-item').querySelector('.item-status');

    // Add click event listeners to the buttons
    removeButton.addEventListener('click', decreaseQuantity);
    addButton.addEventListener('click', increaseQuantity);

    function decreaseQuantity() {
        let quantity = parseInt(quantityElement.textContent);

        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
        }

        updateButtonColor();
    }

    function increaseQuantity() {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;

        updateButtonColor();
    }

    function updateButtonColor() {
        let quantity = parseInt(quantityElement.textContent);

        if (quantity > 0) {
            addButton.parentElement.classList.add('green');
            removeButton.parentElement.classList.add('green');
            quantityElement.parentElement.classList.add('green');
            itemStatusElement.style.opacity = '1';
        } else {
            addButton.parentElement.classList.remove('green');
            removeButton.parentElement.classList.remove('green');
            quantityElement.parentElement.classList.remove('green');
            itemStatusElement.style.opacity = '0';
        }
    }
});



//My Placed Order Checkbox at once
const checkboxes = document.querySelectorAll('input[type="checkbox"][name="order-choice"]');
// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    // Uncheck all checkboxes
    checkboxes.forEach(cb => {
      if (cb !== this) {
        cb.checked = false;
        cb.nextElementSibling.classList.remove('checked-label');
      } 
    });

    // Check the current checkbox and update label color
    this.checked = true;
    this.nextElementSibling.classList.add('checked-label');
  });
});


const tipAmounts = document.querySelectorAll('.tip-amount');

tipAmounts.forEach(tipAmount => {
  tipAmount.addEventListener('click', () => {
    if (tipAmount.textContent !== 'Other') {
      tipAmounts.forEach(element => {
        element.classList.remove('selected');
      });

      tipAmount.classList.add('selected');
    } else {
      tipAmounts.forEach(element => {
        element.classList.remove('selected');
      });
      tipAmount.classList.add('selected');
    }
  });
});




//Edit Name Popup
const editName = document.querySelector('#edit_name');
const cancelName = document.querySelector('#cancel-name');
const updateName = document.querySelector('.update-name');

editName.addEventListener('click', function() {
  document.querySelector('.edit-name-modal').style.top = '50%';
  document.querySelector('.edit-name-modal').style.opacity = '1';
  document.querySelector('.edit-name-modal').style.display = 'flex';
  document.querySelector('#progress-section-right-modal').style.overflow = 'initial';
});

cancelName.addEventListener('click', function() {
  document.querySelector('.edit-name-modal').style.top = '-200%';
  document.querySelector('.edit-name-modal').style.opacity = '0';
  // document.querySelector('.edit-name-modal').style.display = 'none';
  document.querySelector('#progress-section-right-modal').style.overflow = 'none';
});

updateName.addEventListener('click', function() {
  document.querySelector('.edit-name-modal').style.top = '-200%';
  document.querySelector('.edit-name-modal').style.opacity = '0';
  // document.querySelector('.edit-name-modal').style.display = 'none';
  document.querySelector('#progress-section-right-modal').style.overflow = 'none';
});



//Add GST Popup
const addGST = document.querySelector('#add_gst');
const cancelGST = document.querySelector('#cancel-gst');
const addGSTT= document.querySelector('.add-gst');

addGST.addEventListener('click', function() {
  document.querySelector('.add-gst-modal').style.top = '50%';
  document.querySelector('.add-gst-modal').style.opacity = '1';
  document.querySelector('.add-gst-modal').style.display = 'flex';
  document.querySelector('#progress-section-right-modal').style.overflow = 'initial';
});

cancelGST.addEventListener('click', function() {
  document.querySelector('.add-gst-modal').style.top = '-200%';
  document.querySelector('.add-gst-modal').style.opacity = '0';
  // document.querySelector('.add-gst-modal').style.display = 'none';
  document.querySelector('#progress-section-right-modal').style.overflow = 'none';
});

addGSTT.addEventListener('click', function() {
  document.querySelector('.add-gst-modal').style.top = '-200%';
  document.querySelector('.add-gst-modal').style.opacity = '0';
  // document.querySelector('.add-gst-modal').style.display = 'none';
  document.querySelector('#progress-section-right-modal').style.overflow = 'none';
});




// Apply Coupons 
const applyCoupons = document.querySelector('#apply-coupons');
const applyCouponsFooter = document.querySelector('#apply-coupons-footer');
const couponClosed = document.querySelector('#coupon-closed');

applyCoupons.addEventListener('click', function() {
  document.querySelector('.coupons-details').style.display = 'block';
  applyCoupons.style.display = 'none';
  // const couponsDetails = document.getElementById("coupons-details");
  // couponsDetails.scrollIntoView();
});

couponClosed.addEventListener('click', function() {
  document.querySelector('.coupons-details').style.display = 'none';
  applyCoupons.style.display = 'initial';
});



// Get all the payment-option elements
const paymentOptions = document.querySelectorAll('.payment-option');

// Iterate over each payment-option element
paymentOptions.forEach(option => {
  // Add a click event listener to each payment-option element
  option.addEventListener('click', function() {
    // Remove the "active" class from all payment-option elements
    paymentOptions.forEach(option => {
      option.classList.remove('active');
    });

    // Add the "active" class to the clicked payment-option element
    this.classList.add('active');

    // Remove the "active" class from all <p> elements inside payment-option elements
    const paragraphs = this.parentElement.querySelectorAll('p');
    paragraphs.forEach(p => {
      p.classList.remove('active');
    });

    // Add the "active" class to the <p> element inside the clicked payment-option element
    const paragraph = this.querySelector('p');
    paragraph.classList.add('active');
  });
});

const askBillButton = document.getElementById('ask-bill-button');
const billText = document.getElementById('bill-text');

askBillButton.addEventListener('click', function() {
  askBillButton.classList.add('hidden');
  billText.classList.remove('hidden');
});


const reviewNav = document.querySelector('.review-nav');
const links = reviewNav.getElementsByTagName('a');

reviewNav.addEventListener('click', function (event) {

  // Check if the clicked element is an <a> tag
  if (event.target.tagName === 'A') {
    // Remove active class from all links
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }

    // Add active class to the clicked link
    event.target.classList.add('active');
  }
});


// Get all elements with class "item-modify"
const itemModifyElements = document.querySelectorAll('.item-modify');

// Attach click event listener to each "item-modify" element
itemModifyElements.forEach((element) => {
  element.addEventListener('click', function() {
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


var get10Button = document.getElementById('get10Button');
var firstVisitButton = document.getElementById('firstVisitButton');

get10Button.addEventListener('click', toggleButton);
firstVisitButton.addEventListener('click', toggleButton);

function toggleButton() {
    var buttonText = this.getElementsByTagName('p')[0];
    var otherButton;

    if (buttonText.innerHTML === 'Applied') {
        buttonText.innerHTML = 'Apply';
        this.classList.remove('applied');
    } else {
        buttonText.innerHTML = 'Applied';
        this.classList.add('applied');

        if (this === get10Button) {
            otherButton = firstVisitButton;
        } else {
            otherButton = get10Button;
        }

        var otherButtonText = otherButton.getElementsByTagName('p')[0];
        otherButtonText.innerHTML = 'Apply';
        otherButton.classList.remove('applied');
    }
}



// window.addEventListener('DOMContentLoaded', function() {
//   // Smooth scrolling on anchor tag click
//   var anchorTags = document.querySelectorAll('a[href^="#"]');
//   anchorTags.forEach(function(anchor) {
//     anchor.addEventListener('click', function(event) {
//       var target = document.querySelector(this.getAttribute('href'));
      
//       if (target) {
//         event.preventDefault();
//         window.scrollTo({
//           left: target.offsetLeft,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
// });




