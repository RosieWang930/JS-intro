var array = ["apples", "bananas", "oranges", "pears", "strawberries", "watermelons", "peaches", "blueberries"];
var randomIndex = Math.floor( Math.random() * array.length );

function sentence(){
  console.log("I don't like" + " " + array[randomIndex]);
}

sentence();
