const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    speed: 10,
    spaceBetween: 100,
    allowTouchMove: false,

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




//Book Effect Logic


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

const tipImage = document.getElementById('tipImage');        
const tipAdd = document.querySelector('.tipAdd');        
const tipBomb = document.querySelector('.tip-bomb');        
tipAmounts.forEach(amount => {        
  amount.addEventListener('click', () => {            
    if (amount.classList.contains('selected')) 
    {                
      // Update the image source when the selected amount is clicked                
      tipImage.src = './assets/customer-svg/svg/thank you.svg';            
      tipAdd.classList.remove('d-none');
      tipBomb.style.backgroundImage = 'url(/assets/customer-img/img/bomb.gif)';
    }        
  });    
});

const bankOptions = document.querySelectorAll('.bank-option');

bankOptions.forEach(bankOption => {
  bankOption.addEventListener('click', () => {
      bankOptions.forEach(element => {
        element.classList.remove('active');
      });

      bankOption.classList.add('active');
  });
});


const requestOptionsWaiter = document.querySelectorAll('.request-option-waiter p');

requestOptionsWaiter.forEach(requestOption => {
  requestOption.addEventListener('click', () => {
      requestOptionsWaiter.forEach(element => {
        element.classList.remove('active');
      });

      requestOption.classList.add('active');
  });
});
const requestOptionsWater = document.querySelectorAll('.request-option-water p');

requestOptionsWater.forEach(requestOption => {
  requestOption.addEventListener('click', () => {
      requestOptionsWater.forEach(element => {
        element.classList.remove('active');
      });

      requestOption.classList.add('active');
  });
});
const requestOptionsHelp = document.querySelectorAll('.request-option-help p');

requestOptionsHelp.forEach(requestOption => {
  requestOption.addEventListener('click', () => {
      requestOptionsHelp.forEach(element => {
        element.classList.remove('active');
      });

      requestOption.classList.add('active');
  });
});

const foodOptions = document.querySelectorAll('.food-navigation-title p');

foodOptions.forEach(foodOption => {
  foodOption.addEventListener('click', () => {
      foodOptions.forEach(element => {
        element.classList.remove('active');
      });

      foodOption.classList.add('active');
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


// Call Waiter Popup
const showCallWaiter = document.querySelectorAll('.showCallWaiter');
const closeCallWaiter = document.querySelector('#closeCallWaiter');
const callWaiterPopup = document.querySelector('#call-waiter-popup');

// console.log(showCallWaiter);

showCallWaiter.forEach(waiter => {
  console.log(waiter);
  waiter.addEventListener('click', function() {
    callWaiterPopup.style.top = '0%';
    callWaiterPopup.style.opacity = '1';
  })
})

closeCallWaiter.addEventListener('click', function() {
  callWaiterPopup.style.top = '-100%';
  callWaiterPopup.style.opacity = '0';
  let showWaiterTag = document.querySelectorAll('.showCallWaiter a');
  showCallWaiter.forEach(waiter => {
    // console.log(waiter);
    waiter.style.background = "grey";
    // waiter.disabled = true;
    waiter.setAttribute("disabled", "true");
    showWaiterTag.forEach(waiterTag => {
      waiterTag.style.color = "grey";
    })
    setTimeout(function() {
      waiter.style.background = "linear-gradient(90deg, rgb(255, 102, 102) 40%, rgb(255, 150, 136) 100%)";
      waiter.removeAttribute("disabled", "true");
      showWaiterTag.forEach(waiterTag => {
        waiterTag.style.color = "#FF4747";
      })
    }, 12000);
  })
})


// Get Water Popup
const showGetWater = document.querySelectorAll('.showGetWater');
const closeGetWater = document.querySelector('#closeGetWater');
const getWaterPopup = document.querySelector('#get-water-popup');

showGetWater.forEach(water => {
  water.addEventListener('click', function() {
    getWaterPopup.style.top = '0%';
    getWaterPopup.style.opacity = '1';
  })
})

closeGetWater.addEventListener('click', function() {
  getWaterPopup.style.top = '-100%';
  getWaterPopup.style.opacity = '0';
  let showWaterTag = document.querySelectorAll('.showGetWater a');
  showGetWater.forEach(water => {
    // console.log(waiter);
    water.style.background = "grey";
    // waiter.disabled = true;
    water.setAttribute("disabled", "true");
    showWaterTag.forEach(waterTag => {
      waterTag.style.color = "grey";
    })
    setTimeout(function() {
      water.style.background = "linear-gradient(90deg, rgb(255, 102, 102) 40%, rgb(255, 150, 136) 100%)";
      water.removeAttribute("disabled", "true");
      showWaterTag.forEach(waterTag => {
        waterTag.style.color = "#FF4747";
      })
    }, 12000);
  })
})

// Need Help Popup
const showNeedHelp = document.querySelectorAll('.showNeedHelp');
const closeNeedHelp = document.querySelector('#closeNeedHelp');
const needHelpPopup = document.querySelector('#need-help-popup');

showNeedHelp.forEach(help => {
  help.addEventListener('click', function() {
    needHelpPopup.style.top = '0%';
    needHelpPopup.style.opacity = '1';
  })
})

closeNeedHelp.addEventListener('click', function() {
  needHelpPopup.style.top = '-100%';
  needHelpPopup.style.opacity = '0';
  let showHelpTag = document.querySelectorAll('.showNeedHelp a');
  showNeedHelp.forEach(help => {
    // console.log(waiter);
    help.style.background = "grey";
    // waiter.disabled = true;
    help.setAttribute("disabled", "true");
    showHelpTag.forEach(helpTag => {
      helpTag.style.color = "grey";
    })
    setTimeout(function() {
      help.style.background = "linear-gradient(90deg, rgb(255, 102, 102) 40%, rgb(255, 150, 136) 100%)";
      help.removeAttribute("disabled", "true");
      showHelpTag.forEach(helpTag => {
        helpTag.style.color = "#FF4747";
      })
    }, 12000);
  })
})



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



//My Review Nav

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


//WAITING PAYMENT
const makePayment = document.querySelector('#make-my-payment');
makePayment.addEventListener('click', function(){
  setTimeout(function() {
    document.querySelector('.waiting-window').classList.add('d-none');
    document.querySelector('.thanku-wrap').classList.remove('d-none');
  }, 4000);
});

// const makePaymentFooter = document.querySelector('#make-my-payment-footer');
// makePaymentFooter.addEventListener('click', function(){
//   setTimeout(function() {
//     document.querySelector('.waiting-window').classList.add('d-none');
//     document.querySelector('.thanku-wrap').classList.remove('d-none');
//   }, 4000);
// });

function refreshPage(){
  window.location.reload();
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




const LABELCOLORINACTIV = "rgb(238, 238, 238)";
const LABELCOLORACTIV = "yellow";

const RATINGSLABELS = document.querySelectorAll("form.star label");
const RATINGSINPUTS = document.querySelectorAll("form.star input");

// make inputs disappear
RATINGSINPUTS.forEach(function(anInput) {
  anInput.style.display = "none";
});

// manage label click & hover display
function notationLabels(e) {
  let currentLabelRed = e.target;
  let currentLabelBlack = e.target;
  
  // console.log(e.target.localName);
  
  if (e.type == "mouseenter" || !e.target.control.checked) {
    // coloring red from the clicked/hovered label included, going backward till the node start - if we are hovering or the star isn't already checked.
    while (currentLabelRed != null) {
      currentLabelRed.style.color = LABELCOLORACTIV;
      currentLabelRed = currentLabelRed.previousElementSibling;
    }

    // coloring black from the clicked/hovered label excluded, going forward till the node end
    while ((currentLabelBlack = currentLabelBlack.nextElementSibling) != null) {
      currentLabelBlack.style.color = LABELCOLORINACTIV;
    }
  } else {
    // if the clicked label was already checked we uncheck it and prevent the click event from doing its job - defacto enabling zero star rating
    e.target.control.checked = false;
    e.preventDefault();
  }
  
}

function notationLabelsOut(e) {
  let notesNode = e.target.parentNode.querySelectorAll("label");
  let currentLabel = notesNode[notesNode.length - 1];
  
  // console.log("out : " + e.target.localName);
  // console.log("out checked: " + e.target.control.checked);
  
  notesNode.forEach(function redrum(starLabel) {
    starLabel.style.color = LABELCOLORACTIV;
  });

  while (currentLabel != null && !currentLabel.control.checked) {
    currentLabel.style.color = LABELCOLORINACTIV;
    currentLabel = currentLabel.previousElementSibling;
    
    //console.log("currentLabel null?: " + currentLabel);
    // previousElementSibling become the input ...
  }
}

document.addEventListener("DOMContentLoaded", function() {
  RATINGSLABELS.forEach(function(aStar) {
    aStar.style.color="#eee";
    aStar.addEventListener("click", notationLabels);
    aStar.addEventListener("mouseenter", notationLabels);
    aStar.addEventListener("mouseout", notationLabelsOut);
  });

  // stop a callback to the label click event function notationLabels passed on the input element associated ... why ... that's behond me
  // alternatively we could check for e.target.localName in the notationLabels function
  RATINGSINPUTS.forEach(function(aStarInput) {
    aStarInput.addEventListener("click", function(e) {
    e.stopPropagation();
    });
  });
});
