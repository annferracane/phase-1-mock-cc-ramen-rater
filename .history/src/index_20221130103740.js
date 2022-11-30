// write your code here
const addNewRamenForm = document.querySelector('#new-ramen');
addNewRamenForm.addEventListener('submit', addNewRamenHandler);

function addNewRamenHandler(event) {
    event.preventDefault();
    const formInputs = event.target.querySelectorAll('input');
    console.log(formInputs);

}

function showMenuItemDetails(event) {
    fetch(`http://localhost:3000/ramens/id=${event.target.id}`)
    console.log(event.target.id);

}

function addRamenToMenu(ramen) {
    // Define Ramen Menu
    const ramenMenu = document.querySelector('#ramen-menu');
     
    // Build Ramen Menu Thumbnail Item
    const ramenMenuThumbnail = document.createElement('img');
    ramenMenuThumbnail.src = ramen.image;
    ramenMenuThumbnail.alt = `Restaurant: ${ramen.restaurant} & Menu Item: ${ramen.name}`;
    ramenMenuThumbnail.id = ramen.id;
    ramenMenuThumbnail.addEventListener('click', showMenuItemDetails);

    // Append Ramen Menu Item to Ramen Menu
    ramenMenu.appendChild(ramenMenuThumbnail);
}

function initialize() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramenData => ramenData.forEach(addRamenToMenu))
}

initialize();

