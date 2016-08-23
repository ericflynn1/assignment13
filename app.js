function getGames () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://charlotte-games-rater.herokuapp.com/games');
    request.addEventListener('load', function() {
        let games = JSON.parse(request.responseText);
        console.log('games');
        let parent = document.querySelector('#game-list');

        for (let i = 0; i <games.length; i++) {
            let element = document.createElement('li');
            element.textContent = games[i].name + '(' + games[i].rating + ' stars';
            parent.appendChild(element);
        }
    });
    request.send();
}
function addNewGame () {
    let game = {
        name: document.querySelector('#new-name').value,
        rating: parseInt(document.querySelector('#new-rating').value),
        releaseDate: parseInt(document.querySelector('#release-date').value),
    };
        let request = new XMLHttpRequest();
        request.open('POST', 'http://charlotte-games-rater.herokuapp.com/games');
        request.send(JSON.stringify(game));
}
window.addEventListener('load', function () {
    console.log('testing');
    getGames();
    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', function () {
        addNewGame();
    });
});
console.log('-------------------------------------------------------');
function getCawfee () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.addEventListener('load', function() {
        let games = JSON.parse(request.responseText);
        console.log('games');
        let parent = document.querySelector('#game-list');

        for (let i = 0; i <games.length; i++) {
            let element = document.createElement('li');
            element.textContent = games[i].name + '(' + games[i].rating + ' stars';
            parent.appendChild(element);
        }
    });
    request.send();
}
function addNewCawfee () {
    let game = {
        name: document.querySelector('#new-name').value,
        rating: parseInt(document.querySelector('#new-rating').value),
        releaseDate: parseInt(document.querySelector('#release-date').value),
    };
        let request = new XMLHttpRequest();
        request.open('POST', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
        request.send(JSON.stringify(game));
}
window.addEventListener('load', function () {
    console.log('testing');
    getGames();
    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', function () {
        addNewCawfee();
    });
});


console.log('-------------------------------------------------------');
function getCars () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.addEventListener('load', function() {
        let games = JSON.parse(request.responseText);
        console.log('games');
        let parent = document.querySelector('#game-list');

        for (let i = 0; i <games.length; i++) {
            let element = document.createElement('li');
            element.textContent = games[i].name + '(' + games[i].rating + ' stars';
            parent.appendChild(element);
        }
    });
    request.send();
}
function addNewCawfee () {
    let game = {
        name: document.querySelector('#new-name').value,
        rating: parseInt(document.querySelector('#new-rating').value),
        releaseDate: parseInt(document.querySelector('#release-date').value),
    };
        let request = new XMLHttpRequest();
        request.open('POST', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
        request.send(JSON.stringify(game));
}
window.addEventListener('load', function () {
    console.log('testing');
    getGames();
    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', function () {
        addNewCawfee();
    });
});