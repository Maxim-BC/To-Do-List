const form = document.querySelector("form");
const ulList = document.querySelector(".ul-list");
const btnDelete = document.querySelector(".btn-delete");
const btnAppend = document.querySelector(".btn-append");
const btnSort = document.querySelector("#sort-btn-down");

btnAppend.addEventListener("click", (e) => {
  let newInput = document.createElement("input");
  let newLi = document.createElement("li");

  ulList.append(newLi);
  newLi.append(newInput);

  newInput.classList.add("window-input");

  let newBtnDelete = document.createElement("button");
  newBtnDelete.innerHTML = "X";
  newBtnDelete.setAttribute("onclick", "deleteWindow(this)");
  newLi.append(newBtnDelete);
  newBtnDelete.classList.add("btn-delete");
  newLi.classList.add("string-for-text");
});

function deleteWindow(element) {
  const parentEl = element.parentElement;
  parentEl.remove();
}

//--------------------------------------SORT------------------------------------------------
let src = btnSort.src;
let nameSrc = src.split("/").pop();

btnSort.addEventListener("click", () => {
  const list = [...document.querySelectorAll(".string-for-text")];
  if (nameSrc === "Sort_down.svg") {
    nameSrc = "Sort_up.svg";
    btnSort.src = "img/Sort_up.svg";
    list.sort((a, b) => {
      const first = a.querySelector("input").value;
      const second = b.querySelector("input").value;
      if (first < second) {
        return -1;
      } else if (first > second) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    btnSort.src = "img/Sort_down.svg";
    nameSrc = "Sort_down.svg";
    list.sort((a, b) => {
      const first = a.querySelector("input").value;
      const second = b.querySelector("input").value;
      if (first > second) {
        return -1;
      } else if (first < second) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  list.forEach((newLi) => {
    ulList.append(newLi);
  });
});

// sortBtnDown.addEventListener('click', () => {
//     form.get('Name')
//   alert(inputText.value);
// });

//  form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const data = new FormData(event.target);

//         console.log(data.get('Name'));
//       });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let newInut = document.createElement('input');
//     windowLabel.append(newInut);
//     const note = newInut.classList;
//     note.add("window-input")

//     let newBtnDelete = document.createElement('button');
//     newBtnDelete.type ="button"
//     newBtnDelete.innerHTML = "X";
//     boxBtnDel.append(newBtnDelete);
//     const btnDel = newBtnDelete.classList;
//     btnDel.add("btn-delete")
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
