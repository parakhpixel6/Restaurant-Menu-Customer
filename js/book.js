// const breakfast = document.querySelector('#breakfast');
// const continental = document.querySelector('#continental');
// const chinese = document.querySelector('#chinese');
// const north_indian = document.querySelector('#north_indian');
// const maharashtrian = document.querySelector('#maharashtrian');
// const south_indian = document.querySelector('#south_indian');
// const beverages = document.querySelector('#beverages');

// const categories = [
//   { cat: document.querySelector('#breakfast'), class: 'breakfast' },
//   { cat: document.querySelector('#continental'), class: 'continental' },
//   { cat: document.querySelector('#chinese'), class: 'chinese' },
//   { cat: document.querySelector('#north_indian'), class: 'north_indian' },
//   { cat: document.querySelector('#maharashtrian'), class: 'maharashtrian' },
//   { cat: document.querySelector('#south_indian'), class: 'south_indian' },
//   { cat: document.querySelector('#beverages'), class: 'beverages' },
// ];


// let zIndex = 1;
// categories.forEach(category => {
//   category.cat.addEventListener('click', () => {
//     categories.forEach(cat => {

//       const elements = document.querySelectorAll(`.${cat.class}`);

//       console.log(elements);

//       elements.forEach((element, index)=> {
//         console.log(element, index)
//         if (category.class === cat.class) {
//           element.classList.add('active');

//           if(index === 0){
//             element.style.zIndex = zIndex++ + 2;
          
//           }
          
//           if(index === 1) {
//               element.style.zIndex = zIndex++;
//           }

//         } else {
          
          
//           setTimeout(() => {
//             element.classList.remove('active');
//           },2000);
//           // element.style.zIndex = zIndex--;
//         }
//         element.classList.add('seen');

//         console.log(element.style.zIndex);
//       });
//       // console.log(cat.style.zIndex);

//       // for(let el = 0; el >= elements.length; el++) {
//       //   console.log(el);
//       // }


//     });
//   });
// });



// console.log(breakfast);
// console.log(continental);




const breakfast = document.querySelector('#breakfast');
const continental = document.querySelector('#continental');
const chinese = document.querySelector('#chinese');
const north_indian = document.querySelector('#north_indian');
const maharashtrian = document.querySelector('#maharashtrian');
const south_indian = document.querySelector('#south_indian');
const beverages = document.querySelector('#beverages');

// document.querySelectorAll('.breakfast').forEach(fast => {
//   fast.addEventListener('load', function(){
//     // fast.style.zIndex = "12";
//     // fast.style.transition = "none";
//     fast.style.width = "91.9%";
//   });
// });


breakfast.addEventListener('click', function() {
  document.querySelectorAll('.breakfast').forEach(fast => {
    fast.classList.add('active');
    fast.style.zIndex = "12";
  })
  document.querySelectorAll('.continental').forEach(conti => {
    conti.classList.remove('active');
    conti.classList.add('seen');
    conti.style.zIndex = "1";
  })
  document.querySelectorAll('.chinese').forEach(xing => {
    xing.classList.remove('active');
    xing.classList.add('seen');
    xing.style.zIndex = "1";
  })
  document.querySelectorAll('.north_indian').forEach(north => {
    north.classList.remove('active');
    north.classList.add('seen');
    north.style.zIndex = "1";
  })
  document.querySelectorAll('.maharashtrian').forEach(maha => {
    maha.style.zIndex = "1";
    maha.classList.remove('active');
    maha.classList.add('seen');
  })
  document.querySelectorAll('.south_indian').forEach(south => {
    south.style.zIndex = "1";
    south.classList.remove('active');
    south.classList.add('seen');
  })
  document.querySelectorAll('.beverages').forEach(drink => {
    drink.style.zIndex = "1";
    drink.classList.remove('active');
    drink.classList.add('seen');
  })
});


continental.addEventListener('click', function() {
  document.querySelectorAll('.breakfast').forEach(fast => {
    fast.classList.add('seen');
    fast.classList.remove('active');
    fast.style.zIndex = "1";
  })
  document.querySelectorAll('.continental').forEach(conti => {
    conti.classList.add('active');
    conti.classList.remove('seen');
    conti.style.zIndex = "12";
  })
  document.querySelectorAll('.chinese').forEach(xing => {
    xing.style.zIndex = "1";
    xing.classList.remove('active');
    xing.classList.add('seen');
  })
  document.querySelectorAll('.north_indian').forEach(north => {
    north.style.zIndex = "1";
    north.classList.remove('active');
    north.classList.add('seen');
  })
  document.querySelectorAll('.maharashtrian').forEach(maha => {
    maha.style.zIndex = "1";
    maha.classList.remove('active');
    maha.classList.add('seen');
  })
  document.querySelectorAll('.south_indian').forEach(south => {
    south.style.zIndex = "1";
    south.classList.remove('active');
    south.classList.add('seen');
  })
  document.querySelectorAll('.beverages').forEach(drink => {
    drink.style.zIndex = "1";
    drink.classList.remove('active');
    drink.classList.add('seen');
  })
});


chinese.addEventListener('click', function() {
  document.querySelectorAll('.breakfast').forEach(fast => {
    fast.classList.add('seen');
    fast.classList.remove('active');
    fast.style.zIndex = "1";
  })
  document.querySelectorAll('.continental').forEach(conti => {
    conti.classList.remove('active');
    conti.classList.add('seen');
    conti.style.zIndex = "11";
  })
  document.querySelectorAll('.chinese').forEach(xing => {
    xing.classList.add('active');
    xing.classList.remove('seen');
    xing.style.zIndex = "12";
  })
  document.querySelectorAll('.north_indian').forEach(north => {
    north.style.zIndex = "1";
    north.classList.remove('active');
    north.classList.add('seen');
  })
  document.querySelectorAll('.maharashtrian').forEach(maha => {
    maha.style.zIndex = "1";
    maha.classList.remove('active');
    maha.classList.add('seen');
  })
  document.querySelectorAll('.south_indian').forEach(south => {
    south.style.zIndex = "1";
    south.classList.remove('active');
    south.classList.add('seen');
  })
  document.querySelectorAll('.beverages').forEach(drink => {
    drink.classList.remove('active');
    drink.classList.add('seen');
    drink.style.zIndex = "1";
  })
});


north_indian.addEventListener('click', function() {
  document.querySelectorAll('.breakfast').forEach(fast => {
    fast.style.zIndex = "1";
    fast.classList.remove('active');
    fast.classList.add('seen');
  })
  document.querySelectorAll('.continental').forEach(conti => {
    conti.classList.remove('active');
    conti.classList.add('seen');
    conti.style.zIndex = "1";
  })
  document.querySelectorAll('.chinese').forEach(xing => {
    xing.style.zIndex = "1";
    xing.classList.remove('active');
    xing.classList.add('seen');
  })
  document.querySelectorAll('.north_indian').forEach(north => {
    north.style.zIndex = "12";
    north.classList.add('active');
    north.classList.remove('seen');
  })
  document.querySelectorAll('.maharashtrian').forEach(maha => {
    maha.style.zIndex = "1";
    maha.classList.remove('active');
    maha.classList.add('seen');
  })
  document.querySelectorAll('.south_indian').forEach(south => {
    south.style.zIndex = "1";
    south.classList.remove('active');
    south.classList.add('seen');
  })
  document.querySelectorAll('.beverages').forEach(drink => {
    drink.style.zIndex = "1";
    drink.classList.remove('active');
    drink.classList.add('seen');
  })
});


maharashtrian.addEventListener('click', function() {
  document.querySelectorAll('.breakfast').forEach(fast => {
    fast.classList.remove('active');
    fast.classList.add('seen');
    fast.style.zIndex = "1";
  })
  document.querySelectorAll('.continental').forEach(conti => {
    conti.classList.remove('active');
    conti.classList.add('seen');
    conti.style.zIndex = "1";
  })
  document.querySelectorAll('.chinese').forEach(xing => {
    xing.style.zIndex = "1";
    xing.classList.remove('active');
    xing.classList.add('seen');
  })
  document.querySelectorAll('.north_indian').forEach(north => {
    north.style.zIndex = "1";
    north.classList.remove('active');
    north.classList.add('seen');
  })
  document.querySelectorAll('.maharashtrian').forEach(maha => {
    maha.classList.add('active');
    maha.classList.remove('seen');
    maha.style.zIndex = "12";
  })
  document.querySelectorAll('.south_indian').forEach(south => {
    south.style.zIndex = "1";
    south.classList.remove('active');
    south.classList.add('seen');
  })
  document.querySelectorAll('.beverages').forEach(drink => {
    drink.style.zIndex = "1";
    drink.classList.remove('active');
    drink.classList.add('seen');
  })
});


south_indian.addEventListener('click', function() {
  document.querySelectorAll('.breakfast').forEach(fast => {
    fast.classList.remove('active');
    fast.classList.add('seen');
    fast.style.zIndex = "1";
  })
  document.querySelectorAll('.continental').forEach(conti => {
    conti.classList.remove('active');
    conti.classList.add('seen');
    conti.style.zIndex = "1";
  })
  document.querySelectorAll('.chinese').forEach(xing => {
    xing.classList.remove('active');
    xing.classList.add('seen');
    xing.style.zIndex = "1";
  })
  document.querySelectorAll('.north_indian').forEach(north => {
    north.classList.remove('active');
    north.classList.add('seen');
    north.style.zIndex = "1";
  })
  document.querySelectorAll('.maharashtrian').forEach(maha => {
    maha.classList.remove('active');
    maha.classList.add('seen');
    maha.style.zIndex = "1";
  })
  document.querySelectorAll('.south_indian').forEach(south => {
    south.classList.add('active');
    south.classList.remove('seen');
    south.style.zIndex = "12";
  })
  document.querySelectorAll('.beverages').forEach(drink => {
    drink.style.zIndex = "1";
    drink.classList.remove('active');
    drink.classList.add('seen');
  })
});


beverages.addEventListener('click', function() {
  document.querySelectorAll('.breakfast').forEach(fast => {
    fast.classList.remove('active');
    fast.classList.add('seen');
    fast.style.zIndex = "1";
  })
  document.querySelectorAll('.continental').forEach(conti => {
    conti.classList.remove('active');
    conti.classList.add('seen');
    conti.style.zIndex = "1";
  })
  document.querySelectorAll('.chinese').forEach(xing => {
    xing.classList.remove('active');
    xing.classList.add('seen');
    xing.style.zIndex = "1";
  })
  document.querySelectorAll('.north_indian').forEach(north => {
    north.classList.remove('active');
    north.classList.add('seen');
    north.style.zIndex = "1";
  })
  document.querySelectorAll('.maharashtrian').forEach(maha => {
    maha.classList.remove('active');
    maha.classList.add('seen');
    maha.style.zIndex = "1";
  })
  document.querySelectorAll('.south_indian').forEach(south => {
    south.classList.remove('active');
    south.classList.add('seen');
    south.style.zIndex = "1";
  })
  document.querySelectorAll('.beverages').forEach(drink => {
    drink.classList.add('active');
    drink.classList.remove('seen');
    drink.style.zIndex = "12";
  })
});
