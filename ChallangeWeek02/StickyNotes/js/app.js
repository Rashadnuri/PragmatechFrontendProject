let button = document.querySelector(".btn")
let close0 = document.querySelector(".fa-times-circle")
let note = document.querySelector(".note_box")

button.addEventListener("click", ()=>{
    note.style.display="flex";
})
close0.addEventListener("click", ()=>{
    note.style.display="none";
})
