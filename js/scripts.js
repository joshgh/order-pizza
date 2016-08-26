
function Pizza(size){
  this.pizzaSize = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping){
  if (!this.toppings.includes(topping)){
    this.toppings.push(topping);
    return this.toppings;
  } else {
    return 0;
  }
}

Pizza.prototype.cost = function(){
  var currentCost = 10;
  if (this.pizzaSize === "m"){
    currentCost += 2;
  } else if (this.pizzaSize === "l"){
    currentCost += 5;
  } else if (this.pizzaSize === "xl"){
    currentCost += 8;
  }

  if (this.toppings.length > 3){
    currentCost += (this.toppings.length - 3) * 1.5;
  }
  return currentCost;
}

$(document).ready(function() {

});
