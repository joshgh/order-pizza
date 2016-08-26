# _Order Pizza_

#### _Lets a user make a pizza order, 26 August 2016_

#### By _**Joshua Huffman**_

## Description

_This webpage allows a user to create pizzas by selecting the size of pizza and toppings to go on the pizza. The pizzas are added to the total order and the user is able to see the price of each pizza and the total price of the order. The user is also able to remove pizzas from the order if they wish._

## Specifications

* It should create a new pizza
  * Example input: new Pizza();
  * Example output: _Pizza{}_

* It should be able to keep track of pizza size
  * Example input: new Pizza("small");
  * Example output: _Pizza{size: "small"}_

* It should be able to add toppings to the pizza
  * Example input: Pizza.addToppings("anchovies");
  * Example output: _Pizza.toppings = ["anchovies"]_

* It should be able to calculate and return the cost of the pizza
 * Example input: Pizza.cost();
 * Example output: 10

* It should be able to keep track of multiple pizzas
  * Example input: create a new pizza when there is already one
  * Desired behavior: add new pizza to a list instead of overwriting old one

## Setup/Installation Requirements

* Visit https://github.com/joshgh/order-pizza
* Clone the repository onto your machine
* Open index.html in your browser of choice


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_If you have any comments or questions please contact me at j.m.huffman@gmail.com_

## Technologies Used

_This webpage uses the Bootstrap framework for some styling and the jquery javascript library for some page functionality_

### License

*MIT License*

Copyright (c) 2016 **_Joshua Huffman_**
