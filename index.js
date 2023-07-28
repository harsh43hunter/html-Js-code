function getProductPrice() {
    var productCode = document.getElementById("productCode").value;
    var productPrice;
    switch (productCode) {
        case "A":
            productPrice = "$10";
            break;
        case "B":
            productPrice = "$20";
            break;
        case "C" :
            productPrice = "$30";
            break;
        case "D" :
            productPrice = "$40";
            break;
        default:
            productPrice = " Invalid Product Code "
    }
    document.getElementById("output").innerHTML = " The price of the product is " + productPrice ;

}
  