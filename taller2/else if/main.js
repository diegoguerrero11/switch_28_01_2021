let rifa = prompt("Digite un numero entre 1 y 3: ");

switch (rifa) {
    case "1":
        console.log(`te ganastes un viaje a la luna tu numero ganador fue ${rifa}`);
        break;
    case "2":
        console.log(`siguelo intentando`);
        break;

        case "3":
        console.log(`te ganastes una bicileta tu numero ganador fue ${rifa}`);
        break;
         
    default:
        console.log(`Opcion no definida`);
        break;
}