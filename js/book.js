// let breakFastClicked = false;

// window.addEventListener('click', () => {

//   if(!breakFastClicked) {
//     // Trigger a click event on the breakfast element
//     const clickEvent = new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true,
//       view: window
//     });
//     breakfast.dispatchEvent(clickEvent);
//     breakFastClicked = true;
//   }
//   // document.querySelector('#food-navigation').classList.remove('opac-0');
//  });


const categories = [
    { cat: document.querySelector('#landing'), class: 'landing' },
    { cat: document.querySelector('#breakfast'), class: 'breakfast' },
    { cat: document.querySelector('#continental'), class: 'continental' },
    { cat: document.querySelector('#chinese'), class: 'chinese' },
    { cat: document.querySelector('#north_indian'), class: 'north_indian' },
    { cat: document.querySelector('#maharashtrian'), class: 'maharashtrian' },
    { cat: document.querySelector('#south_indian'), class: 'south_indian' },
    { cat: document.querySelector('#beverages'), class: 'beverages' },
  ];
  let zIndex = 1;
  categories.forEach(category => {
    category.cat.addEventListener('click', () => {
      categories.forEach(cat => {
        const elements = document.querySelectorAll(`.${cat.class}`);
        elements.forEach((element, index)=> {
            console.log(element, index)
            if (category.class === cat.class) {
                zIndex[cat.class] = zIndex[cat.class] ? zIndex[cat.class] + 1 : 1;
                element.classList.add('active');
                element.classList.remove('indexReset');
                element.classList.remove('seen');

            } else {
              setTimeout(() => {
                element.classList.remove('active');
              }, 2000);
              element.classList.add('seen');
            }
        });
      });
    });
  });
  
  
  // console.log(breakfast);
  // console.log(continental);


