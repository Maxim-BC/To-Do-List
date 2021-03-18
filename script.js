const btnAppend = document.querySelector(".btn-append");
const btnSort = document.querySelector("#sort-btn-down");
const taskList = document.querySelector(".task-list");

function deleteTask(element) {
  if (taskList.children.length === 0) {
    taskList.classList.remove("task-list");
    taskList.innerText = "The to-do list is empty...";
  }
  element.remove();
}
addTask();
btnAppend.onclick = addTask;
function addTask() {
  if (taskList.children.length === 0) {
    taskList.innerText = "";
    taskList.classList.add("task-list");
  }
  let newInput = document.createElement("input");
  let newLi = document.createElement("li");

  taskList.append(newLi);
  newLi.append(newInput);

  newInput.classList.add("window-input");
  newLi.classList.add("task-string");

  //--------------------------------------Button delete-------------------------------------------------------

  let newBtnDelete = document.createElement("button");
  newBtnDelete.innerHTML = "&times;";
  newLi.append(newBtnDelete);
  newBtnDelete.classList.add("btn-delete");
  newBtnDelete.addEventListener("click", (event) => {
    const parentEl = event.target.parentElement;
    deleteTask(parentEl);
  });

  const btnDelete = document.querySelectorAll(".btn-delete");
  btnDelete.forEach((element) => {
    element.addEventListener("click", deleteTask);
  });

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
    evt.preventDefault();

    const activeElement = taskList.querySelector(".selected");
    const currentElement = evt.target;
    const isMoveable =
      activeElement !== currentElement &&
      currentElement.classList.contains("task-string");
    if (!isMoveable) {
      return;
    }

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
    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(evt.clientY, currentElement);
    // Проверяем, нужно ли менять элементы местами
    if (
      (nextElement && activeElement === nextElement.previousElementSibling) ||
      activeElement === nextElement
    ) {
      // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
      return;
    }
    taskList.insertBefore(activeElement, nextElement);
  });
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
