

/*let numerorandom=parseInt(prompt("Adivine el numero, ingrese un numero del 1 al 100:"));
alert("El numero ingresado es..." + numerorandom);


while(numerorandom>0){
    let numeroElegido=42
    if(numerorandom>42 && numerorandom<100){
        alert("El numero elegido es muy alto");
    }
    else if(numerorandom>0 && numerorandom<42){
        alert("El numero elegido es muy pequeño")
    }
    else if(numerorandom=== numeroElegido){
        alert("Excelente, adivinaste el numero correcto");
    }
    else{
        let numerorandom=parseInt(prompt("Adivine el numero, ingrese un numero del 1 al 100:"));
        alert("El numero ingresado es..." + numerorandom);
    }
    break
}*/

let productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");

function compra(valor1, valor2, valor3){
    return valor1 + valor2 +valor3;
}

while(productos!=""){
    if(productos=="p"){
        let plantas=parseInt(prompt("El valor de cada planta es de 400 pesos. ingrese cuantas plantas desea comprar."));
        let resultado= (`${plantas}`)* 400;
        alert (`El total de su compra es: ${resultado}`);
        let carrito= prompt("Desea comprar mas productos? (s)/(n)")
        switch(carrito){
            case "s":
                productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                alert("Gracias por su compra!");
                break
            default:
                alert("La entrada no es valida");
        }
        

    }
    else if(productos=="m"){
        let macetas=parseInt(prompt("El valor de cada maceta es de 500 pesos. ingrese cuantas macetas desea comprar."));
        let resultado2= (`${macetas}`)* 500;
        alert (`El total de su compra es: ${resultado2}`);
        let carrito= prompt("Desea comprar mas productos? (s)/(n)")
        switch(carrito){
            case "s":
                productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                alert("Gracias por su compra!");
                break
            default:
                alert("La entrada no es valida");
        }
    }
    else if(productos=="i"){
        let insumos=parseInt(prompt("El valor de cada insumo es de 300 pesos. ingrese cuantas insumos desea comprar."))
        let resultado3= (`${insumos}`)* 300;
        alert (`El total de su compra es: ${resultado3}`);
        let carrito= prompt("Desea comprar mas productos? (s)/(n)")
        switch(carrito){
            case "s":
                productos= prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                alert("Gracias por su compra!");
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
    
}