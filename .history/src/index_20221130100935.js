// write your code here
const addNewRamenForm = document.querySelector('#new-ramen');
const ramenMenu = document.querySelector('#ramen-menu');

addNewRamenForm.addEventListener('submit', addNewRamenHandler);

function addNewRamenHandler(event) {
    event.preventDefault();
    const formInputs = event.target.querySelectorAll('input');
    console.log(formInputs);

}

function visualizeRamen() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then()

}


