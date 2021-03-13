const form = document.querySelector("form");
const btnDelete = document.querySelector(".btn-delete");
const btnAppend = document.querySelector(".btn-append");
const btnSort = document.querySelector("#sort-btn-down");
const ulList = document.querySelector(".task-list");

btnAppend.addEventListener("click", (e) => {
  console.log(ulList.children.length);
  if (ulList.children.length === 0) {
    ulList.innerText = "";
    ulList.classList.add("task-list");
  }
  let newInput = document.createElement("input");
  let newLi = document.createElement("li");

  ulList.append(newLi);
  newLi.append(newInput);

  newInput.classList.add("window-input");

  let newBtnDelete = document.createElement("button");
  newBtnDelete.innerHTML = "&times;";
  newBtnDelete.setAttribute("onclick", "deleteTask(this)");
  newLi.append(newBtnDelete);
  newBtnDelete.classList.add("btn-delete");
  newLi.classList.add("string-for-text");
});

function deleteTask(element) {
  const parentEl = element.parentElement;
  if (ulList.children.length === 1) {
    ulList.classList.remove("task-list");
    ulList.innerText = "The to-do list is empty...";
  } 
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
