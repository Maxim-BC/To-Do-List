const form = document.querySelector("form");
const btnDelete = document.querySelector(".btn-delete");
const btnAppend = document.querySelector(".btn-append");
const btnSort = document.querySelector("#sort-btn-down");
const taskList = document.querySelector(".task-list");

btnAppend.addEventListener("click", (e) => {
  if (taskList.children.length === 0) {
    taskList.innerText = "";
    taskList.classList.add("task-list");
  }
  let newInput = document.createElement("input");
  let newLi = document.createElement("li");

  taskList.append(newLi);
  newLi.append(newInput);

  newInput.classList.add("window-input");

  let newBtnDelete = document.createElement("button");
  newBtnDelete.innerHTML = "&times;";
  newBtnDelete.setAttribute("onclick", "deleteTask(this)");
  newLi.append(newBtnDelete);
  newBtnDelete.classList.add("btn-delete");
  newLi.classList.add("task-string");

  //-------------------------------DRAG & DROP----------------------------------------//

  const taskElements = taskList.querySelectorAll(`.task-string`);
  for (const task of taskElements) {
    task.draggable = true;
  }
  taskList.addEventListener("dragstart", (evt) => {
    evt.target.classList.add("selected");
  });

  taskList.addEventListener("dragend", (evt) => {
    evt.target.classList.remove("selected");
  });

  taskList.addEventListener("dragover", (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
    // Находим перемещаемый элемент
    const activeElement = taskList.querySelector(".selected");
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable =
      activeElement !== currentElement &&
      currentElement.classList.contains("task-string");
    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
      return;
    }
    // Находим элемент, перед которым будем вставлять
    const nextElement =
      currentElement === activeElement.nextElementSibling
        ? currentElement.nextElementSibling
        : currentElement;
    // Вставляем activeElement перед nextElement
    taskList.insertBefore(activeElement, nextElement);
  });

  const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter =
      currentElementCoord.y + currentElementCoord.height / 2;
    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement =
      cursorPosition < currentElementCenter
        ? currentElement
        : currentElement.nextElementSibling;

    return nextElement;
  };
});
//---------------------------------------------------------------------------------------------

function deleteTask(element) {
  const parentEl = element.parentElement;
  if (taskList.children.length === 1) {
    taskList.classList.remove("task-list");
    taskList.innerText = "The to-do list is empty...";
  }
  parentEl.remove();
}

//--------------------------------------SORT------------------------------------------------

let src = btnSort.src;
let nameSrc = src.split("/").pop();

btnSort.addEventListener("click", () => {
  const list = [...document.querySelectorAll(".task-string")];
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
    taskList.append(newLi);
  });
});
