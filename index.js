const inputbox = document.getElementById("input-box");
const licont = document.getElementById("list");

function Addtask() {
    if (inputbox.value.trim() === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value; 
        inputbox.value = ''; 

        let img = document.createElement("img");
        img.src = "8962643.png"; 
        img.className = "close"; 
        img.alt = "Delete"; 
        li.appendChild(img); 

        licont.appendChild(li); 
        saveData(); 
        console.log("Task added:", inputbox.value);
    }
}

licont.addEventListener("click", function(i) {
    if (i.target.tagName === "LI") {
        i.target.classList.toggle("checked"); 
        saveData();
    } else if (i.target.tagName === "IMG" && i.target.className === "close") {
        i.target.parentElement.remove(); 
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", licont.innerHTML); 
}

function show() {
    licont.innerHTML = localStorage.getItem("data") || ''; 
}

show();
