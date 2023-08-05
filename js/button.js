function checkKey(e) {
    if (!enableClick) {
      return;
    }
    enableClick = false;
  
    // setTimeout(() => {
    //   enableClick = true;
    // }, 1500);
  
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