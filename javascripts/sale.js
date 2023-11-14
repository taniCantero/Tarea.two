const numberElement = document.getElementById("number");
const priceElement = document.getElementById("product");

let purchases = [];

function add() {
    if (numberElement.value === "0" || priceElement.value === "0") {
        window.alert("Debe completar el campo");
    } else {
        const id = parseInt(priceElement.value);
        const producto = returnProducto(id);
        const number = parseInt(numberElement.value);
        const price = parseInt(producto.price);

        let purchase = {
            description: producto.nombre,
            number: number,
            price: price,
        };
        purchases.push(purchase);

        window.alert(`Producto: ${purchase.description}\nImporte: ${purchase.price} Guaraníes\nCantidad: ${purchase.number}`);
    }
}

function returnProducto(id) {
    for (let index = 0; index < productos.length; index++) {
        if (id === productos[index].id) {
            return productos[index];
        }
    }
    
    console.log("Producto no encontrado");
    return null;
}

function display() {
    let string = "";
    for (let index = 0; index < purchases.length; index++) {
        string += `${purchases[index].number} Items de ${purchases[index].description} a ${purchases[index].price} Guaraníes\n`;
    }
    return string;
}

function subtotal() {
    let sum = 0;
    for (let index = 0; index < purchases.length; index++) {
        sum += purchases[index].number * purchases[index].price;
    }
    return sum;
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);

    window.alert(`Resumen de la compra:\n\n${display()}\nSubtotal: ${sum} Guaraníes\nGastos de envío: ${postage} Guaraníes\nTotal: ${sum + postage} Guaraníes`);

    
    purchases = [];
    numberElement.value = "";
    priceElement.value = "";
}

function calcPostageFromPurchase(sum) {
    if (sum === 0 || sum >= 3000) {
        return 0;
    } else if (sum < 2000) {
        return 500;
    } else {
        return 250;
    }
}

var productos = [
    {
        id: 1,
        nombre: "Mezcla original 200g",
        price: 500,
    },
    {
        id: 2,
        nombre: "Mezcla original 500g",
        price: 900,
    },
    {
        id: 3,
        nombre: "Mezcla especial 200g",
        price: 700,
    },
    {
        id: 4,
        nombre: "Mezcla especial 500g",
        price: 1200,
    },
];