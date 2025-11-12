let opciones = [ 
    {opcion: "Diseño Web", votos: 0},
    {opcion: "Backend", votos: 10},
    {opcion: "Base de Datos", votos: 0}    
]
let votacionCiclo = 0;
let votosAcumulados = 0;

//
const resultadosVotaciones = document.getElementById("resultadosVotaciones")

//
const reducirVotosBotones = document.querySelectorAll(".reducirVotos");
const aumentarVotosBotones = document.querySelectorAll(".aumentarVotos");



reducirVotosBotones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    reducirVotos(e);
    alert("¡Gracias por tu voto!");
  });
});

aumentarVotosBotones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    aumentarVotos(e);
    alert("¡Gracias por tu voto!");
  });
});

function reducirVotos(e) {
    const texto = e.target.nextElementSibling.innerText;

    const nuevosResultados = opciones.map(opc =>
            opc.opcion === texto
            //No baja de 0 
            ? {...opc, votos: Math.max(opc.votos + 1, 0)} 
            : opc
    )
    actualizarResultados(nuevosResultados);
}

function aumentarVotos(e) {
    const texto = e.target.previousElementSibling.innerText;

    const nuevosResultados = opciones.map(opc =>
            opc.opcion === texto
            ? {...opc, votos: opc.votos + 1} 
            : opc
    ) 
    opciones = nuevosResultados;
    actualizarResultados(opciones);
}

function actualizarResultados(opciones) {
    //Contar + 1 para mostrar mensaje.
    votacionCiclo += 1;
    votosAcumulados = 0;

    resultadosVotaciones.innerHTML = "";
    opciones.forEach((opcion, index) => {
        let li = document.createElement("li")
        
        li.innerHTML = `<h3>${opcion.opcion} : <span> ${opcion.votos} </span> votos</h3>`
        resultadosVotaciones.appendChild(li);
        votosAcumulados += parseInt(opcion.votos);

        if(votacionCiclo == 6) {
            if(index === opciones.length - 1) {
                votacionCiclo = 0;
                console.log(`Total votos acumulados: ${votosAcumulados}.`);
            }
        }

    });
    
    
    console.log("actualizar resultados");
}
actualizarResultados(opciones);


