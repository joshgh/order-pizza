function Order(){
  this.pizzaList = [];
}

Order.prototype.addPizza = function(pizza){
  this.pizzaList.push(pizza);
  return this.pizzaList;
}

Order.prototype.totalCost = function(){
  var cost = 0;
  this.pizzaList.forEach(function(pizza){
    cost += pizza.cost();
  });
  return cost;
}

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
  function refreshDisplay(order){
    $(".output").text("");
    order.pizzaList.forEach(function(pizza, index){
      $("ul#pizzaList").append("<li><span class='pizza'>Pizza #" + (index + 1) + "</span>" +
                                " | <span class='remove'> Remove</span></li>");
      $("#pizzaList li .pizza").last().click(function(){
        $("li").removeClass("chosen");
        $(this).parent().addClass("chosen");
        $(".size").text(pizza.pizzaSize);
        $(".toppings").text(pizza.toppings);
        $(".cost").text(pizza.cost().toFixed(2));
      });
      $("#pizzaList li .remove").last().click(function(){
        order.pizzaList.forEach(function(element, index){
          if(element === pizza){
            order.pizzaList.splice(index, 1);
          }
        });
        refreshDisplay(order);
      });
    });
    $("#totalCost").text("Total Cost: $" + order.totalCost().toFixed(2));
  }
  var myOrder = new Order;
  $("#submit").click(function(){
    var size =  $("input[name='size']:checked"). val();
    var toppings = $("#toppings").val();
    var myPizza = new Pizza(size);
    myPizza.toppings = toppings;
    myOrder.addPizza(myPizza);
    refreshDisplay(myOrder);
  });
});
