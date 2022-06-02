
function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

const coupons = [
    "15Loco",
    "25Secreto",
    "30Fantastico",
    "elDeLosDevOps"
];
console.log(coupons);

function onClickPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
    let descuento;

    switch(couponValue) {
      case coupons[0]:
        descuento = 15;
      break;
      case coupons[1]:
        descuento = 25;
      break;
      case coupons[2]:
        descuento = 30;
      break;
      case coupons[3]:
          descuento = 50;
      break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

