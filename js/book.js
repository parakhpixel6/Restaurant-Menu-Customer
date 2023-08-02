document.onkeydown = checkKey;
document.onclick=checkKey;

let enableClick = true;

setTimeout(() => {
  let nodes = document.getElementById("menu-right-book")?.childNodes;
  if (!nodes) {
    return;
  }

  nodes[1]?.classList?.remove("active");
  nodes[1]?.classList?.add("seen");
  nodes[3]?.classList?.add("active");
  nodes[5]?.classList?.add("active");
}, 10000);


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
        (e.classList?.value?.includes("even") ||
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
            e.classList?.value?.includes("even")
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
            if (e.classList?.value?.includes("even")) {
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

const breakfast = document
  .querySelectorAll('[data-point="Breakfast"]')[0]
  .addEventListener("click", (event) => {
    selectionPage("breakfast", event);
    console.log('hey');
  });
const continental = document
  .querySelectorAll('[data-point="Continental"]')[0]
  .addEventListener("click", (event) => {
    selectionPage("continental", event);
  });
const chinese = document
  .querySelectorAll('[data-point="Chinese"]')[0]
  .addEventListener("click", (event) => {
    selectionPage("chinese", event);
  });
const north_indian = document
  .querySelectorAll('[data-point="North-Indian"]')[0]
  .addEventListener("click", (event) => {
    selectionPage("north_indian", event);
  });
const maharashtrian = document
  .querySelectorAll('[data-point="Maharashtrian"]')[0]
  .addEventListener("click", (event) => {
    selectionPage("maharashtrian", event);
  });
const south_indian = document
  .querySelectorAll('[data-point="South-Indian"]')[0]
  .addEventListener("click", (event) => {
    selectionPage("south_indian", event);
  });
const beverages = document
  .querySelectorAll('[data-point="Beverages"]')[0]
  .addEventListener("click", (event) => {
    selectionPage("beverages", event);
  });
