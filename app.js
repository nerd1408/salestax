function subTotal() {
    var price = document.orderform.price.value;
    var quantity = document.orderform.quantity.value;
    productPrice = price * quantity;
    document.orderform.subtotal.value = productPrice.toFixed(2);
    return productPrice;
  }
  /
  function calculateTax() {
    var subtotal = subTotal();
    var stax = 0.03;
      tax = subtotal * stax;
    document.orderform.salestax.value = tax.toFixed(3);
    return tax;
  }
  function grandTotal() {
    var subtotal = subTotal();
    var tax = calculateTax();
    document.orderform.subtotal.value = subtotal.toFixed(2);
    document.orderform.salestax.value = tax.toFixed(2);
    var gtotal = subtotal + tax;
    document.orderform.gtotal.value = gtotal.toFixed(2);
  }