const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function () {
        console.log('Meow!');
    }
};

console.log(cat.name);
cat.greeting();
cat.color = "black";
console.log(cat.color);