"use strict";
const contenido = document.getElementById("contenido"),
  inicio = document.getElementById("inicio"),
  presentacion = document.getElementById("presentacion"),
  interacción = document.getElementById("interacción"),
  contactame = document.getElementById("contactame"),
  redeSociales = document.getElementById("redeSociales");

const AddInicio = () => {
  contenido.innerHTML = `<div class='present'>
        <h1> Bienvenidos a mi web </h1> 
        <img class="fotoPerfil" src="img/Imagen.jpeg" alt="fotoPerfil"/>
     </div>`;
};

const AddPresentacion = () => {
  contenido.innerHTML = ` 
    <p> Mi nombre es Yonny Alexander Ospina, tengo 24 años, naci en la ciudad de Bogotá y actualmente recido en el municipio de la Ceja Antioquia, soy estudiante de Ingeniería informática cursando 5to semeste, amante de la tecnologia y del aprendizaje continuo, me gusta salir de viaje, comer, bailar, hacer depporte, montar en moto, compartir en familia y con mis mascotas. Me centro en el desarrollo de aplicaciones web Frontend y Backend con conocimientos en Html, Css, JavaScript, TypeScript, Git, React, MySQL y NoSQL.</p> `;
};

const AddInteracción = () => {
  contenido.innerHTML = `
        <div class="segundoMenu">
            <nav class="navMenu">
                <ul class="menuDos">
                    <li id="funcion">Función principal</li>
                    <li id="aspectos">Aspectos técnicos</li>
                    <li id="competencias">Competencias</li>
                </ul>
            </nav>
            <div id="respuestas"></div>
        </div>`;

  const funcion = document.getElementById("funcion"),
    aspectos = document.getElementById("aspectos"),
    competencias = document.getElementById("competencias"),
    respuestas = document.getElementById("respuestas");

  const AddFuncion = () => {
    respuestas.innerHTML = `<h3>¿Cuál es tu función principal?</h3>
            <ol>
                <li>
                    Mi función principal como ingeniero informático en el puesto de analista del proceso administrativo es diseñar, implementar y mejorar los sistemas de información y procesos informáticos dentro de una organización, garantizando que los sistemas de información se ajusten a las necesidades del negocio, sean eficientes y efectivos, y se mantengan actualizados con las tendencias y avances tecnológicos.
                </li>
            </ol>`;
  };
  const AddAspectos = () => {
    respuestas.innerHTML = `<h3>Aspectos técnicos fundamentales que debes conocer hoy para desarrollar tu rol</h3>
            <ol>
                <li>
                    Conocimientos de programación: Los ingenieros informáticos deben tener conocimientos sólidos en codificación y lenguajes de programación. Esto les permitirá diseñar, desarrollar y mantener software y aplicaciones informáticas, así como solucionar problemas técnicos que puedan surgir en el proceso.
                </li>
                <li>
                    Metodologías de desarrollo de software: Los ingenieros informáticos deben conocer las metodologías de desarrollo de software, como el ciclo de vida del software. Esto les permitirá planificar, diseñar, desarrollar, probar e implementar software de manera efectiva y eficiente.
                </li>
            </ol>`;
  };
  const AddCompetencias = () => {
    respuestas.innerHTML = `<h3>Competencias que hoy debes desarrollar para ejercer el cargo</h3>
                <ol>
                    <li> 
                        Capacidad para resolver problemas con iniciativa, toma de decisiones, autonomía y creatividad: Los ingenieros informáticos deben ser capaces de resolver problemas de manera efectiva y eficiente, utilizando su creatividad y autonomía para tomar decisiones informadas. Esto les permitirá enfrentar los desafíos técnicos que puedan surgir en su trabajo diario y encontrar soluciones innovadoras.
                    </li>
                    <li>
                        Conocimientos para la realización de mediciones, cálculos, valoraciones, tasaciones, peritaciones, estudios, informes, planificación de tareas y otros trabajos análogos de informática: Los ingenieros informáticos deben tener conocimientos sólidos en matemáticas y estadísticas, así como en la planificación y gestión de proyectos. Esto les permitirá realizar mediciones, cálculos y valoraciones precisas, así como planificar y gestionar proyectos de manera efectiva.
                    </li>
                </ol>`;
  };
  funcion.addEventListener("click", AddFuncion);
  aspectos.addEventListener("click", AddAspectos);
  competencias.addEventListener("click", AddCompetencias);
};

const AddContactos = () => {
  contenido.innerHTML = `          
        <div id="redeSociales">
            <a href="https://www.facebook.com/yonnyxx/?locale=es_LA"> 
                <img src="img/facebook.png"></img> 
            </a>
            <a href="https://api.whatsapp.com/send/?phone=3112959285&text&type=phone_number&app_absent=0">
                <img src="img/whatsapp.png"></img> 
            </a>
            <a href="https://www.instagram.com/yonny_alex/?img_index=1"> 
                <img src="img/instagram.png"></img> 
            </a>
            <a href="https://www.linkedin.com/in/yonnyalex22/">
                <img src="img/linkedin.png"></img> 
            </a>
            <a href="https://github.com/yonny-147"> 
                <img src="img/github.png"></img> 
            </a>
        </div>`;
};

inicio.addEventListener("click", AddInicio);
presentacion.addEventListener("click", AddPresentacion);
interacción.addEventListener("click", AddInteracción);
contactame.addEventListener("click", AddContactos);
