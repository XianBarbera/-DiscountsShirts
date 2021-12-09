function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon")
    const couponValue = inputCoupon.value;


    const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue)

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "The discounted price is: $" + precioConDescuento

}