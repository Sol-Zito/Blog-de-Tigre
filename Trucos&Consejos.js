let trucos = [
  {
    image: `../img/viajesConAmigos.jpg`,
    titulo: "Cómo organizar un viaje con amigos",
    descripcion:
      "Como expertos viajeros, somos conscientes de que planificar unas vacaciones puede tomar bastante tiempo. Esto es aún más complicado si vas con amigos y tienen que ponerse todos de acuerdo. Queremos facilitarles este proceso y para ello, les acompañamos desde el momento en el que tienen que decidir su próximo destino",
    descripcionCorta:
      "Como expertos viajeros, somos conscientes de que planificar unas vacaciones puede tomar bastante tiempo...",
    consejos: [
      "Determinen su presupuesto",
      "Guarden sus resultados favoritos para más tarde",
      "Dividan las tareas",
      "Utilicen aplicaciones para organizarse",
      "Guarden toda la información de su viaje en un solo lugar",
    ],
  },
  {
    image: "../img/preparacionViaje.jpg",
    titulo: "4 consejos para prepararse para un viaje futuro",
    descripcion:
      "La idea de viajar puede parecer muy lejana. Por eso estamos acá, para ayudarte a conseguir la información que necesitás para que puedas soñar ahora y viajar después. Como viajeros que somos, tenemos ganas de desempolvar nuestros pasaportes y volver a viajar. Sin embargo, hasta que llegue ese día, dedicamos nuestra energía a prepararnos para ese increíble viaje futuro.",
    descripcionCorta:
      "La idea de viajar puede parecer muy lejana. Por eso estamos acá, para ayudarte a conseguir la información que necesitás para que puedas soñar ahora y viajar...",
    consejos: [
      "Fortalecé el pensamiento positivo",
      "Prepará tu presupuesto",
      "Seguí los precios",
      "Escapate a mundos imaginarios",
    ],
  },
  {
    image: "../img/viajarSolo.jpg",
    titulo: "Viajar sola",
    descripcion:
      "Podríamos buscar miles de cosas para hacer, pero si viajamos con la mente abierta, vamos a encontrar un millón de cosas para hacer cuando estemos allí. Una de las cosas que siempre hago cuando viajo es lo que llamo “Wanderlost” ( algo así, en inglés, como un juego de palabras que sería “ansias de pasear y perderse”). Siempre me aseguro de reservar un tiempo en mi itinerario para salir sin rumbo y perderme por ahí. Nunca se sabe qué puede pasar, pero si nos abrimos a la aventura, sin duda la encontraremos.",
    descripcionCorta:
      "Podríamos buscar miles de cosas para hacer, pero si viajamos con la mente abierta, vamos a encontrar un millón de cosas para hacer...",
    consejos: [
      "Jamás salgo a recorrer con auriculares(por seguridad y una experiencia que tuve, me gusta ser consciente de lo que pasa a mi alrededor)",
      "Viajar con la mente abierta",
      "Reservar un tiempo",
      "Bajarse el mapa de Google con anticipación",
    ],
  },
  {
    image: "../img/hacerAmigos.jpg",
    titulo: "5 consejos para hacer amigos en tus viajes",
    descripcion:
      "Un viaje en solitario te puede revolucionar la vida. Cuando no dependés de nadie, podés hacer lo que quieras, cuando quieras y como quieras. Sin embargo, esa sensación de libertad a veces cansa y puede ser que la soledad te sorprenda incluso en el paisaje más maravilloso. En un viaje sin más compañía que tus propios pensamientos, siempre llega un momento en que apetece socializar.",
    descripcionCorta:
      "Un viaje en solitario te puede revolucionar la vida. Cuando no dependés de nadie, podés hacer lo que quieras, cuando quieras y como quieras...",
    consejos: [
      "Unite a un tour gratuito a pie por la ciudad",
      "Usá internet para conocer a gente interesante",
      "Aprendé algo nuevo mientras hacés amigos",
      "Sacale partido a Meetup",
      "Reservá tu lugar en una excursión organizada y lanzate a la aventura",
    ],
  },
  {
    image: `../img/viajesConAmigos.jpg`,
    titulo: "Cómo organizar un viaje con amigos",
    descripcion:
      "Como expertos viajeros, somos conscientes de que planificar unas vacaciones puede tomar bastante tiempo. Esto es aún más complicado si vas con amigos y tienen que ponerse todos de acuerdo. Queremos facilitarles este proceso y para ello, les acompañamos desde el momento en el que tienen que decidir su próximo destino",
    descripcionCorta:
      "Como expertos viajeros, somos conscientes de que planificar unas vacaciones puede tomar bastante tiempo...",
    consejos: [
      "Determinen su presupuesto",
      "Guarden sus resultados favoritos para más tarde",
      "Dividan las tareas",
      "Utilicen aplicaciones para organizarse",
      "Guarden toda la información de su viaje en un solo lugar",
    ],
  },
];

const cards = document.querySelector("#containerCards");

for (data of trucos) {
  cards.innerHTML += `<div class="col"> <div class="card" style="width: 20rem; height: max-content">
   <img
     class="card-img-top"
     src=${data.image}
     alt=${data.titulo}
   />
   <div class="card-body">
     <h5 class="card-title">${data.titulo}</h5>
     <p class="card-text">
       ${data.descripcionCorta}
     </p>
     <div>
       <p class="d-inline-flex gap-1">
         <button
           class="btn btn-primary"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#collapse"
           aria-expanded="false"
           aria-controls="collapse"
         >
           Ver mas..
         </button>
       </p>
       <div class="collapse" id="collapse">
         <div class="card card-body">
           <p>Consejos:<p>
           <ul>
           ${data.consejos}
           </ul>
           
         </div>
       </div>
     </div>
   </div>
   </div>
   </div>
   </br>`;
}
