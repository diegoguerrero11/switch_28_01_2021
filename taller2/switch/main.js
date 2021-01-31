
// let sexo = prompt("Digite un numero entre 1 y 3: ");

// switch (sexo) {
//     case "1":
//         console.log(`te ganastes un viaje a la luna`);
//         break;
//     case "2":
//         console.log(`siguelo intentando`);
//         break;

//         case "3":
//         console.log(`te ganaste una bicicleta`);
//         break;
         
//     default:
//         console.log(`Opcion no definida`);
//         break;
// }



let edad    = parseInt(prompt("ingrese su edad "));
if (edad<=0) {
console.log(`error datos mal digitado ${edad}`);
}
 else if(edad<=17){
     console.log(`usted es menor de edad ${edad}`);
 }
 else if(edad>18&&edad<65){
    console.log(`usted es un adulto  ${edad}`);
 }
 else if(edad>65&&edad <=80){
    console.log(`usted es un abuelo y ya se puede pensionar  ${edad}`);
 }
else console.log("usted esta mas cerca de Dios")

