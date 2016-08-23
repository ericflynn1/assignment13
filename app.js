
console.log('-------------------------------------------------------');
function getCawfee () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.addEventListener('load', function() {
        let coffee = JSON.parse(request.responseText);
        console.log('coffee');
        let parent = document.querySelector('#coffee-list');

        for (let i = 0; i < coffee.length; i++) {
            let element = document.createElement('li');
            element.textContent = [i]coffee.name + '(' + coffee[i].rating + ' stars';
            parent.appendChild(element);
        }
    });
    request.send();
}
function addNewCawfee () {
    let cafe = {
        name: document.querySelector('#cafe-name').value,
        rating: parseInt(document.querySelector('#cafe-rating').value),
        price: parseInt(document.querySelector('#price').value),
    };
        let request = new XMLHttpRequest();
        request.open('POST', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
        request.send(JSON.stringify(cawfee));
}
window.addEventListener('load', function () {
    console.log('testing');
    getCawfee();
    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', function () {
        addNewCawfee();
    });
});


console.log('-------------------------------------------------------');
function getCars () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://stormy-retreat-24546.herokuapp.com/cars');
    request.addEventListener('load', function() {
        let cars = JSON.parse(request.responseText);
        console.log('carss');
        let parent = document.querySelector('#car-list');

        for (let i = 0; i < cars.length; i++) {
            let element = document.createElement('li');
            element.textContent = cars[i].name + '(' + cars[i].rating + ' stars';
            parent.appendChild(element);
        }
    });
    request.send();
}
function addNewCar () {
    let carzo = {
        model: document.querySelector('#new-model').value,
        color: parseInt(document.querySelector('#color').value),
        year: parseInt(document.querySelector('#year').value),
    };
        let request = new XMLHttpRequest();
        request.open('POST', 'https://stormy-retreat-24546.herokuapp.com/cars');
        request.send(JSON.stringify(cars));
}
window.addEventListener('load', function () {
    console.log('testing');
    getCars();
    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', function () {
        addNewCawfee();
    });
});