//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById ("InputPrice")
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById ("InputCoupon")
    const couponValue = inputCoupon.value;

    const coupons = [
        {
        name: "Nicolas",
        discount: 15,
        },
        {
        name: "Trabaja",
        discount: 30,
        },
        {
        name: "Lunes a viernes",
        discount: 25,    
        },
    ];
    
    
    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón" + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

    
    
   // const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);

    //const resultP = document.getElementById("resultPrice");
    //resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


