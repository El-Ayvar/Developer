document.getElementById("d-perfil").addEventListener("click", function() {
    let nombre = prompt ("Cuál es tu nombre");
    let año = prompt ('¿En qué año naciste?');
    let ciudad = prompt ('¿En qué ciudad vives?');
    let interes = prompt ('¿Te interesa JavaScript? (Sí/No)');
});


const boton = document.getElementById('c-tema');
    const cuerpo = document.body;
        boton.addEventListener('click', () => {
            cuerpo.classList.toggle('modo-oscuro');
});
