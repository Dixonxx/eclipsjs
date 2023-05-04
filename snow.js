
let nombreUsuario = prompt("ingrese su nombre " + "y " + "apellido");
console.log(nombreUsuario);

alert("hola " + nombreUsuario + ".");

let edad = prompt ("ingrese su edad");

if (edad >=18) {
    alert("excelente puedes ingresar!");
}else {
    alert("losiento no puedes ingresar!");
    
} 



const productos = [
    {nombre: "burton", precio: 20000},
    {nombre: "gnu", precio: 30000}, 
    {nombre: "nitro", precio: 40000},
    {nombre: "element", precio: 25000},
    {nimbre: "dc", precio: 35000},
];
let carrito = []

let selection = prompt("hola desea adquirir un producto si o no")

while (selection != "si" && selection != "no" ){
    alert("ingresa si o no");
    selection = prompt ("deseas continuar con las compras si o no")

} if( selection == "si"){
    alert ("genial");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    
    
    alert(todosLosProductos.join(" - "));
} else if(selection == "no") {
    alert ("gracias por su visita");
}

while(selection != "no"){
    let producto = prompt("ingresa tu pedido");
    let precio = 0

    if (producto == "burton" || producto == "gnu" || producto == "nitro" || producto == "element" ||
    producto == "dc"){
        switch(producto) {
            case "burton":
                precio = 20000;
                break;
            case "gnu":
                precio = 30000;
                break;
            case "nitro":
                precio = 40000;
                break;  
            case "element":
                precio = 25000;
                break; 
            case "dc":
                precio = 35000;
                break; 
                default:
                break;
            
        }
        let unidades = parseInt(prompt("cuantas quieres llevar?"))

        carrito.push({producto, unidades, precio});

    }else {
        alert ("no esta disponible");
    }
    selection = prompt("desea seguir comprando?");

    while(selection === "no"){
        alert("gracias por su compra!");
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
    
        
}

const total = carrito.reduce((ecc,el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por la compra es ${total}`)


