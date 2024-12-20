//  alerta inicial
alert("No te compres todos los juegos!!!!");

document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { nombre: "Alquimistas", imagen: "imagen/alquimistas-el-golem-del-rey.webp", descripcion: "Un fascinante juego de estrategia donde los jugadores investigan fórmulas mágicas." },
        { nombre: "Rey de la Montaña", imagen: "imagen/el-rey-de-la-montana.webp", descripcion: "Una aventura épica en la cima de las montañas más desafiantes." },
        { nombre: "Maze Escape", imagen: "imagen/mazescape-ariadne.webp", descripcion: "Un juego de rompecabezas donde exploras laberintos infinitos." },
        { nombre: "Azul", imagen: "imagen/azul.webp", descripcion: "Un colorido juego de estrategia inspirado en los azulejos portugueses." },
        { nombre: "Kinmo", imagen: "imagen/kinmo.webp", descripcion: "Un juego rápido y divertido para toda la familia." },
        { nombre: "Bunny Kingdom", imagen: "imagen/bunny-kingdom-in-the-sky.webp", descripcion: "Un adorable juego de estrategia donde lideras un reino de conejos." },
        { nombre: "No lo Testeamos", imagen: "imagen/nltnup.webp", descripcion: "Un divertido juego de cartas lleno de caos y risas." },
        { nombre: "7 Wonders", imagen: "imagen/7-wonders-duel.webp", descripcion: "Un emocionante juego de estrategia en el mundo de las civilizaciones antiguas." },
        { nombre: "Ticket to Ride", imagen: "imagen/-aventureros-al-tren-.webp", descripcion: "Un clásico juego de trenes que conecta ciudades y familias." },
    ];

    const container = document.querySelector("#productos .game-cards");

    // tarjetas dinámicas
    productos.forEach((producto) => {
        const card = `
            <div class="card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.nombre}</p>
                <div class="descripcion-ampliada" style="display: none;"></div>
            </div>
        `;
        container.innerHTML += card;
    });

    
    function toggleDescripcion(card, producto) {
        const descripcion = card.querySelector(".descripcion-ampliada");

        if (descripcion.style.display === "block") {
            descripcion.style.display = "none";
            descripcion.innerHTML = "";
        } else {
            
            document.querySelectorAll(".descripcion-ampliada").forEach((desc) => {
                desc.style.display = "none";
                desc.innerHTML = "";
            });

            //descrip. producto
            descripcion.innerHTML = `
                <p>${producto.descripcion}</p>
            `;
            descripcion.style.display = "block";
        }
    }

    // Agregar evento de click
    document.querySelectorAll(".card").forEach((card, index) => {
        card.addEventListener("click", () => {
            toggleDescripcion(card, productos[index]);
        });
    });

    // Verificar  campos del formulario completos
    const formularioContacto = document.querySelector("#contacto form");
    formularioContacto.addEventListener("submit", (event) => {
        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const mensaje = document.querySelector("#mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            console.log("Por favor, completa todos los campos del formulario.");
            event.preventDefault(); 
        } else {
            console.log("Formulario enviado correctamente.");
        }
    });

    //  lista de productos en consola
    console.log("Lista de productos disponibles:");
    productos.forEach((producto) => {
        console.log(`- ${producto.nombre}: ${producto.descripcion}`);
    });
});



//  API de Dog CEO
document.addEventListener("DOMContentLoaded", () => {
    const fetchApiBtn = document.getElementById("fetch-api-btn");
    const apiContent = document.getElementById("api-content");
  
    fetchApiBtn.addEventListener("click", () => {
      fetch("https://dog.ceo/api/breeds/image/random/6")
        .then((response) => response.json())
        .then((data) => {
          apiContent.innerHTML = "";
          data.message.forEach((imageUrl) => {
            const card = `
              <div class="api-card">
                <img src="${imageUrl}" alt="Dog image">
                <p>Un adorable perro</p>
              </div>
            `;
            apiContent.innerHTML += card;
          });
        })
        .catch((error) => console.error("Error al obtener datos de la API:", error));
    });
  });
  