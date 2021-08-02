'use strict';

var gProjs = []

function getProjs() {
    return gProjs
}

function getProjById(projId) {
    var proj = gProjs.find(function (proj) {
        return projId === proj.id
    });
    return proj
}

function createProjs() {
    gProjs.push(_createProj('sokoban', 'Sokoban', 'Better push those boxes', 'lorem ipsum lorem ipsum lorem ipsum', 'projs/sokoban', 'July 2021', ["Matrixes", "keyboard events"]));

    gProjs.push(_createProj('minessweeper', 'Mines Sweeper', 'Removing the mines game', 'The famouse mines sweeper game! There are 3 different levels with different board sizes. When game ends, game time stops.', 'https://benditi.github.io/Sprint1part1/', 'July 2021', ['Matrixes', 'letfmouse events']));

    gProjs.push(_createProj('inThePicture', ' What\'s in the picture?', 'Real fun game!', 'A guessing game where you need to recognise what\'s in the picture.', 'https://benditi.github.io/What-s-in-the-picture/', 'July 2021', ['basic css', 'keyboard events']));


    return gProjs;
}

function _createProj(id, name, title, desc, url, publishedAt, labels) {

    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels
    }
}