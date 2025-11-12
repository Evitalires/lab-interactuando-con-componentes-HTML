let opciones = [ 
    {opcion: "Diseño Web", votos: 0},
    {opcion: "Backend", votos: 10},
    {opcion: "Base de Datos", votos: 0}    
]

//
const resultadosVotaciones = document.getElementById("resultadosVotaciones")

//
const reducirVotosBotones = document.querySelectorAll(".reducirVotos");
const aumentarVotosBotones = document.querySelectorAll(".aumentarVotos");
console.log(reducirVotosBotones);


reducirVotosBotones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    reducirVotos(e);
    alert("¡Gracias por tu voto!")
  });
});

aumentarVotosBotones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    aumentarVotos(e);
    alert("¡Gracias por tu voto!")
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
    console.log(nuevosResultados);
    
    opciones = nuevosResultados;
    actualizarResultados(opciones);
}

function actualizarResultados(opciones) {

    resultadosVotaciones.innerHTML = "";

    opciones.forEach(opcion => {
        let li = document.createElement("li")
        console.log(opcion.opcion);
        
        li.innerHTML = `
            <h3>${opcion.opcion} : <span> ${opcion.votos} </span> votos</h3>
        `
        resultadosVotaciones.appendChild(li)
    });
    
    
    console.log("actualizar resultados");
}
actualizarResultados(opciones);


