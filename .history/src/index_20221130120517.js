// write your code here


function addNewRamenHandler(event) {
    event.preventDefault();
    const formInputs = Array.from(event.target.querySelectorAll('input'));
    console.log(formInputs);
    const newMenuItem = {};
    formInputs.forEach(formInput => console.log(formInput.id));
    //formInputs.forEach(formInput => console.log(document.querySelector(formInput.id).textContent));
    //formInputs.forEach(formInput => newMenuItem[formInput.name] = formInput.textContent);
    //formInputs.forEach(formInput => console.log(formInput.textContent));
    //console.log(newMenuItem);
}

function displayMenuItemDetails(ramenDetail) {
    const ramenDetailDiv = document.querySelector('#ramen-detail');
    ramenDetailDiv.querySelector('.detail-image').src = ramenDetail.image;
    ramenDetailDiv.querySelector('.name').textContent = ramenDetail.name;
    ramenDetailDiv.querySelector('.restaurant').textContent = ramenDetail.restaurant;
    document.querySelector('#rating-display').textContent = ramenDetail.rating;
    document.querySelector('#comment-display').textContent = ramenDetail.comment;
}


function showMenuItem(event) {
    fetch(`http://localhost:3000/ramens?id=${event.target.id}`)
    .then(res => res.json())
    .then(ramenDetail => ramenDetail.forEach(displayMenuItemDetails))
}


function addRamenToMenu(ramen) {
    // Define Ramen Menu
    const ramenMenu = document.querySelector('#ramen-menu');
     
    // Build Ramen Menu Thumbnail Item
    const ramenMenuThumbnail = document.createElement('img');
    ramenMenuThumbnail.src = ramen.image;
    ramenMenuThumbnail.alt = `Restaurant: ${ramen.restaurant} & Menu Item: ${ramen.name}`;
    ramenMenuThumbnail.id = ramen.id;
    ramenMenuThumbnail.addEventListener('click', showMenuItem);

    // Append Ramen Menu Item to Ramen Menu
    ramenMenu.appendChild(ramenMenuThumbnail);
}

function initialize() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramenData => ramenData.forEach(addRamenToMenu))
}

const addNewRamenForm = document.querySelector('#new-ramen');
addNewRamenForm.addEventListener('submit', addNewRamenHandler);
initialize();


    


