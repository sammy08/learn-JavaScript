/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

Imagine you work at a pizza restaurant and you want to write a JavaScript program to take orders so you don't have to write them out by hand. You can write a function to perform this task!

Start by writing a function named takeOrder. Inside of its block, use console.log to print 'Order: pizza'

var orderCount = 0;
function takeOrder(topping) {
  console.log ('Order: ' + topping ); 
}
takeOrder("pizza topped with bacon");
