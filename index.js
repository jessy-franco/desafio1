

let productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");

function VuelvaPronto (){
    alert("Gracias por su compra!");
}
function TotalProductos(){
    let Total = ListaProductos.reduce((a, b) => a + b, 0);
    alert(`El total de su compra es: ${Total}`);
}
const ListaProductos= [];
while(productos!=""){
    if(productos=="p"){
        let plantas=parseInt(prompt("El valor de cada planta es de 400 pesos. ingrese cuantas plantas desea comprar."));
        let resultado= (`${plantas}`)* 400;
        alert (`El total de su compra es: ${resultado}`);
        ListaProductos.push(resultado);
        let carrito= prompt("Desea comprar mas productos? (s)/(n)");
        switch(carrito){
            case "s":
                productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                TotalProductos();
                VuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }
        

    }
    else if(productos=="m"){
        let macetas=parseInt(prompt("El valor de cada maceta es de 500 pesos. ingrese cuantas macetas desea comprar."));
        let resultado2= (`${macetas}`)* 500;
        alert (`El total de su compra es: ${resultado2}`);
        ListaProductos.push(resultado2);
        let carrito= prompt("Desea comprar mas productos? (s)/(n)")
        switch(carrito){
            case "s":
                productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                TotalProductos();
                VuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }
    }
    else if(productos=="i"){
        let insumos=parseInt(prompt("El valor de cada insumo es de 300 pesos. ingrese cuantas insumos desea comprar."))
        let resultado3= (`${insumos}`)* 300;
        alert (`El total de su compra es: ${resultado3}`);
        ListaProductos.push(resultado3);
        let carrito= prompt("Desea comprar mas productos? (s)/(n)")
        switch(carrito){
            case "s":
                productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                TotalProductos();
                VuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }
        
    }
    
    else{
        alert("La opcion ingresada no es válida");
        productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
        continue
    }
break
}