function subTotal() {
    var price = document.orderform.price.value;
    var quantity = document.orderform.quantity.value;
    productPrice = price * quantity;
    document.orderform.subtotal.value = productPrice.toFixed(2);
    return productPrice;
  }
  //calculateTax() takes result of subTotal function but has to refer to the result to move forward as opposed to the previous function
  //.toFixed() is the decimal points
  function calculateTax() {
    //var subTotal = document.orderform.subtotal.value; OR for dryer code:
    var subtotal = subTotal();
    var stax = 0.03;
      tax = subtotal * stax;
    document.orderform.salestax.value = tax.toFixed(3);
    return tax;
  }
  //takes the HTML output results from the previous two functions and adds them together. 
  function grandTotal() {
    var subtotal = subTotal();
    var tax = calculateTax();
    document.orderform.subtotal.value = subtotal.toFixed(2);
    document.orderform.salestax.value = tax.toFixed(2);
    var gtotal = subtotal + tax;
    document.orderform.gtotal.value = gtotal.toFixed(2);
  }