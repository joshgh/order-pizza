var pizzaList = [];

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
  if (this.pizzaSize === "Medium"){
    currentCost += 2;
  } else if (this.pizzaSize === "Large"){
    currentCost += 5;
  } else if (this.pizzaSize === "Extra Large"){
    currentCost += 8;
  }
  if (this.toppings.length > 3){
    currentCost += (this.toppings.length - 3) * 1.5;
  }
  return currentCost;
}

$(document).ready(function() {
  $("#submit").click(function(){
    var size =  $("input[name='size']:checked"). val();
    var toppings = $("#toppings").val();
    var myPizza = new Pizza(size);
    myPizza.toppings = toppings;
    pizzaList.push(myPizza);
    $("ul#pizzaList").append("<li>Pizza #" + pizzaList.length + "</li>")
    $("#pizzaList li").last().click(function(){
      $(".size").text(myPizza.pizzaSize);
      $(".toppings").text(myPizza.toppings);
      $(".cost").text(myPizza.cost().toFixed(2));
    })
  })
});
