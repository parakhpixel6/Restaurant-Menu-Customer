document.onkeydown = checkKey;
// document.onclick=checkKey;

let enableClick = true;

// setTimeout(() => {
//   let nodes = document.getElementById("menu-right-book")?.childNodes;
//   if (!nodes) {
//     return;
//   }

//   nodes[1]?.classList?.remove("active");
//   nodes[1]?.classList?.add("seen");
//   nodes[3]?.classList?.add("active");
//   nodes[5]?.classList?.add("active");
// }, 2000);


function checkKey(e) {
  if (!enableClick) {
    return;
  }
  enableClick = false;

  setTimeout(() => {
    enableClick = true;
  }, 1500);

  e = e || window.event;
  let active = document.getElementsByClassName("menu-right-flip active");

  if (active) {
    let nodes = document.getElementById("menu-right-book")?.childNodes;

    let index = 0;
    if (!nodes) {
      return;
    }
    nodes.forEach((e, i) => {

      if (
        e.classList?.value?.includes("active") &&
        (e.classList?.value?.includes("menu-right-ff") ||
          e.classList?.value?.includes("breakfast"))
      ) {
        index = i;
      }
    });
    console.log(e);
    if (e.keyCode == "13" || e.keyCode == "ArrowLeft") {
      if (index - 4 > 0) {
        nodes.forEach((e, i) => {
          if (
            e.classList?.value?.includes("active") &&
            e.classList?.value?.includes("menu-right-ff")
          ) {
            e.classList.remove("active");
            i - 2 > 0 && nodes[i - 2]?.classList.remove("active");
          }
        });

        nodes[index - 6]?.classList?.add("active");
        nodes[index - 4]?.classList?.add("active");
        nodes[index - 6]?.classList?.remove("seen");
        nodes[index - 4]?.classList?.remove("seen");
        setTimeout(() => {
          nodes[index - 4] && nodes[index - 4].classList?.remove("indexReset");
          nodes[index - 6] && nodes[index - 6].classList?.remove("indexReset");
        }, 900);
      }
    } else if (e.keyCode == "13" || e.keyCode == "ArrowRight") {
      if (index + 4 < nodes.length) {
        nodes.forEach((e, i) => {
          if (e.classList?.value?.includes("active")) {
            if (e.classList?.value?.includes("menu-right-ff")) {
              e.classList.remove("active");
              e.classList.add("seen");
              i - 2 > 0 && nodes[i - 2]?.classList.remove("active");
            } else {
              e.classList.remove("active");

              e.classList.add("seen");
            }
            setTimeout(() => {
              e.classList.add("indexReset");
            }, 900);
          }
        });

        nodes[index + 2]?.classList?.add("active");
        nodes[index + 4]?.classList?.add("active");
        setTimeout(() => {
          nodes[index + 2]?.classList?.remove("indexReset");
          nodes[index + 4]?.classList?.remove("indexReset");
        }, 900);
      }
    }
  }
}

function selectionPage(node, event) {
  if (!event?.target?.classList?.value?.includes("menu-content-wrap")) {
    return;
  }
  let nodes = document.getElementById("menu-right-book")?.childNodes;
  // let node = "home";
  console.log(nodes);
  let point = 0;
  if (!nodes) {
    // console.log(nodes);
    return;
  }
  nodes.forEach((e, i) => {
    if (!e?.innerHTML) {
        console.log(nodes);
        return;
    }
    if (e.classList.value.includes("active")) {
        console.log(nodes);
      e.classList.remove("active");
    }
    if (e.classList.value.includes(node)) {
      point = 1;
    } else {
        if (!point) {
        setTimeout(() => {
          e.classList.add("indexReset");
        }, 900);
        e.classList.add("seen");
      }
      event.target.parentElement.classList.add("active");
      event.target.parentElement.previousElementSibling.classList.add("active");
    }
  });
}

// const breakfast = document
//   .querySelectorAll('[data-point="Breakfast"]')[0]
//   .addEventListener("click", (event) => {
//     selectionPage("breakfast", event);
//     console.log('hey');
//   });
// const continental = document
//   .querySelectorAll('[data-point="Continental"]')[1]
//   .addEventListener("click", (event) => {
//     selectionPage("continental", event);
//   });
// const chinese = document
//   .querySelectorAll('[data-point="Chinese"]')[1]
//   .addEventListener("click", (event) => {
//     selectionPage("chinese", event);
//   });
// const north_indian = document
//   .querySelectorAll('[data-point="North-Indian"]')[1]
//   .addEventListener("click", (event) => {
//     selectionPage("north_indian", event);
//   });
// const maharashtrian = document
//   .querySelectorAll('[data-point="Maharashtrian"]')[1]
//   .addEventListener("click", (event) => {
//     selectionPage("maharashtrian", event);
//   });
// const south_indian = document
//   .querySelectorAll('[data-point="South-Indian"]')[1]
//   .addEventListener("click", (event) => {
//     selectionPage("south_indian", event);
//   });
// const beverages = document
//   .querySelectorAll('[data-point="Beverages"]')[1]
//   .addEventListener("click", (event) => {
//     selectionPage("beverages", event);
//   });



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
    fast[0].style.zIndex = "12";
    fast[1].style.zIndex = "11";
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
    conti[0].style.zIndex = "12";
    conti[1].style.zIndex = "11";
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
    xing[0].style.zIndex = "12";
    xing[1].style.zIndex = "11";
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
