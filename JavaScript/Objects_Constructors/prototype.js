function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player");
}

Object.getPrototypeOf(Player.prototype) === Object.prototype;

console.log(player1.valueOf());
  

