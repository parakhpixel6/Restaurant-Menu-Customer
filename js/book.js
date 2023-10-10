const breakfast = document.querySelector('#breakfast');
const continental = document.querySelector('#continental');
const chinese = document.querySelector('#chinese');
const north_indian = document.querySelector('#north_indian');
const maharashtrian = document.querySelector('#maharashtrian');
const south_indian = document.querySelector('#south_indian');
const beverages = document.querySelector('#beverages');

const categories = [
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

      console.log(elements);

      elements.forEach((element, index)=> {
        console.log(element, index)
        if (category.class === cat.class) {
          element.classList.add('active');

          if(index === 0){
            element.style.zIndex = zIndex++ + 2;
          
          }
          
          if(index === 1) {
              element.style.zIndex = zIndex++;
          }

        } else {
          
          
          // setTimeout(() => {
            element.classList.remove('active');
          // },2000);
          // element.style.zIndex = zIndex--;
        }
        element.classList.add('seen');

        console.log(element.style.zIndex);
      });
      // console.log(cat.style.zIndex);

      // for(let el = 0; el >= elements.length; el++) {
      //   console.log(el);
      // }


    });
  });
});



console.log(breakfast);
console.log(continental);

