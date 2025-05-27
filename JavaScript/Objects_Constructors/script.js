
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const player1 = new Player("Rahul", "X");
const player2 = new Player("Tim", "O");


Object.getPrototypeOf(Player.prototype) === Object.prototype;
player1.valueOf();
console.log(player1.valueOf())