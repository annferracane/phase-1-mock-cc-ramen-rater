// write your code here
const addNewRamenForm = document.querySelector('#new-ramen');
addNewRamenForm.addEventListener('submit', addNewRamenHandler);

function addNewRamenHandler(event) {
    event.preventDefault();
    const formInputs = event.target.querySelectorAll('input');
    console.log(formInputs);

}

function visualizeRamenMenu(ramenData) {
    // Define Ramen Menu
    const ramenMenu = document.querySelector('#ramen-menu');
     
    // Build Ramen Menu Item
    const ramenMenuThumbnail = document.createElement('img');


    // Append Ramen Menu Item to Ramen Menu
    ramenMenu.appendChild(ramenMenuThumbnail);
}

function initialize() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramenData => visualizeRamenMenu(ramenData))
}


