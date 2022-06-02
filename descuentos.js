
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return (precioConDescuento);
}

function onClickPriceDiscount () {
    const inputPrice = (document.getElementById("inputPrice"));
    const price = inputPrice.value;
    const inputDiscount = (document.getElementById("inputDiscount"));
    const discount = inputDiscount.value;

    const precioFinal = calcularPrecioConDescuento(price, discount);
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "el precio con descuento es $: " + precioFinal;
}

