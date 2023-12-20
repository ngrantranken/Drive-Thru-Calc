const $ = selector => document.querySelector(selector);

document.getElementById('btnClick').onclick = () => {

    //get user entries from form
    const quantityBurgers = $("#burgers").value;
    const quantityFries = $("#fries").value;
    const quantitySodas = $("#sodas").value;

    //check user entries
    let isValid = true
    if (quantityBurgers == "") {
        quantityBurgers = 0;
    }
    if (quantityFries == "") {
        quantityFries = 0;
    }
    if (quantitySodas == "") {
        quantitySodas = 0;
    }
    //multiply quantity by cost
    const burgersCost = parseFloat(quantityBurgers) * 1;
    const friesCost = parseFloat(quantityFries) * 2;
    const sodasCost = parseFloat(quantitySodas) * 2.5;
   
    //add together total cost of items
    const totalCost = burgersCost + friesCost + sodasCost;
    document.getElementById("orderTotal").value = `\$` + totalCost;
}; 