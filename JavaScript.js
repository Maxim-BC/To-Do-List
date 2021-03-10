const form = document.querySelector("form");
const windowLabel = document.querySelector("#window-label")
const boxBtnDel = document.querySelector(".box-btn-del")
const btnDelete = document.querySelector(".btn-delete")

form.addEventListener("submit", (e) => {
    e.preventDefault();  
    
    let newNote = document.createElement('input');

    let newBoxString = document.createElement('div');

    windowLabel.append(newBoxString);
    newBoxString.append(newNote);
    
    const note = newNote.classList;
    note.add("window-input")
    

    let newBtnDelete = document.createElement('button');
    newBtnDelete.innerHTML = "X";

    newBtnDelete.setAttribute("onclick", "deleteWindow(this)");

    newBoxString.append(newBtnDelete);
    const btnDel = newBtnDelete.classList;
    btnDel.add("btn-delete")  


    const boxString = newBoxString.classList;
    boxString.add("string-for-text");

    
});

function deleteWindow(element) {
    const nextEl = element.nextElementSibling
    const elemPrevious = element.previousElementSibling
    const parentEl = element.parentElement;
    parentEl.remove();
    elemPrevious.remove();
    nextEl.remove();
}






// function deleteWindow() {
//     windowLabel.remove();
//   }
//   btnDelete.addEventListener('click', deleteWindow);



  









































































































// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let newNote = document.createElement('input');
//     windowLabel.append(newNote);
//     const note = newNote.classList;
//     note.add("window-input")

//     let newBtnDelete = document.createElement('button');
//     newBtnDelete.type ="button"
//     newBtnDelete.innerHTML = "X";
//     boxBtnDel.append(newBtnDelete);
//     const btnDel = newBtnDelete.classList;
//     btnDel.add("btn-delete")   
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!