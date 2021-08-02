'use strict';

var gProjs = [
    // {
    //     "id": "sokoban",
    //     "name": "Sokoban",
    //     "title": "Better push those boxes",
    //     "desc": "lorem ipsum lorem ipsum lorem ipsum",
    //     "url": "projs/sokoban",
    //     "publishedAt": 1448693940000,
    //     "labels": ["Matrixes", "keyboard events"],
    // },
]

function getProjs(){
    gProjs.push(getProject('sokoban', 'Sokoban', 'Better push those boxes', 'lorem ipsum lorem ipsum lorem ipsum', 'projs/sokoban', 1448693940000,["Matrixes", "keyboard events"]));
    
    gProjs.push(getProject('minessweeper', 'Mines Sweeper', 'Removing the mines game', 'The famouse mines sweeper game! There are 3 different levels with different board sizes. When game ends, game time stops.','https://benditi.github.io/Sprint1part1/',Date.now(), ['Matrixes', 'letfmouse events']));

    gProjs.push(getProject('inThePicture', ' What\'s in the picture?', 'Real fun game!', 'A guessing game where you need to recognise what\'s in the picture.', 'https://benditi.github.io/What-s-in-the-picture/', Date.now(), ['basic css', 'keyboard events']));
    
    
    return gProjs;
}

function getProject(id, name, title, desc, url, publishedAt, labels){
    var project = {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels
    }
    return project;
}