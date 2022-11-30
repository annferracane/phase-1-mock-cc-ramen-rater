// write your code here
const addNewRamenForm = document.querySelector('#new-ramen');
const ramenMenu = document.querySelector('#ramen-menu');

addNewRamenForm.addEventListener('submit', addNewRamenHandler);

function addNewRamenHandler(event) {
    event.preventDefault();
    const formInputs = event.target.querySelectorAll('input');
    console.log(formInputs.value);

}


