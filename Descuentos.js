const coupons = [
    "DIS20",
    "DIS30",
    "DIS40",
];

function Preciofinal (precio, descuento){
    const PorcentajePrecioconDescuento = 100 - descuento;
    const preciocondescuento = ((precio * PorcentajePrecioconDescuento)/100);

    return preciocondescuento;
}

function precioCoupon (precio, coupon){
    const PorcentajePrecioconDescuento = 100 - coupon;
    const precioconCoupon = ((precio * PorcentajePrecioconDescuento)/100);

    return precioconCoupon;
}

function PreciofinalCoupon (precio, descuento, coupon){
    const PorcentajePrecioconDescuento = 100 - descuento - coupon;
    const precioCouponcondescuento = ((precio * PorcentajePrecioconDescuento)/100);

    return precioCouponcondescuento;
}

function Preciofinalcondescuento () {
    const inputprice = document.getElementById ("Price");
    const priceValue = inputprice.value;

    const inputDiscount = document.getElementById ("Discount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById ("Coupon");
    const CouponValue = inputCoupon.value;

    let descuento;

    if (CouponValue === "DIS20") {
        descuento = 20;
        
     } else if (CouponValue === "DIS30") {
        descuento = 30;

    } else if (CouponValue === "DIS40") {
        descuento = 40;
    }

     else if (CouponValue) {
     alert("El cupón " + CouponValue + " no es válido");
    }
        
    const preciocondescuento = Preciofinal(priceValue,discountValue)
    const precioconCoupon = precioCoupon(priceValue,descuento)
    const precioCouponcondescuento = PreciofinalCoupon(priceValue,discountValue, descuento)

    if (priceValue && discountValue && descuento) {
        const resultPC = document.getElementById("ResultPriceC");
        resultPC.innerText = "El precio final con descuento y cupon es $" + precioCouponcondescuento
    }

    else if (priceValue && descuento) {
        const resultPC = document.getElementById("ResultPriceC");
        resultPC.innerText = "El precio final  con cupon es $" + precioconCoupon
    }

    else if (priceValue && discountValue) {
        const resultPC = document.getElementById("ResultPriceC");
        resultPC.innerText = "El precio final con descuento es $" + preciocondescuento
    }

    else {
        const resultPC = document.getElementById("ResultPriceC");
        resultPC.innerText = "El Precio final es $" + priceValue
    }
}
    


//Mensajes : SOlo con precio - Precio + Descuento - Precio + Cupón - Precio + descuento + cupón