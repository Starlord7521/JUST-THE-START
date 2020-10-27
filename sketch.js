var ball;
var database;
var position;
var form, game, player;
var playerCount;
var gameState = 0;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
}

function draw(){
}