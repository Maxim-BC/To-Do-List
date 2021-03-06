const form = document.querySelector("form");
const windowLabel = document.querySelector("#window-label")
const boxBtnDel = document.querySelector(".box-btn-del")
const btnDelete =document.querySelector(".btn-delete")

form.addEventListener("submit", (e) => {
    e.preventDefault();  
    
    let newNote = document.createElement('input');
    windowLabel.append(newNote);
    const note = newNote.classList;
    note.add("window-input")

    let newBtnDelete = document.createElement('button');
    newBtnDelete.type ="button"
    newBtnDelete.innerHTML = "X";
    boxBtnDel.append(newBtnDelete);
    const btnDel = newBtnDelete.classList;
    btnDel.add("btn-delete")

              
});