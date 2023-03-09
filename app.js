// Crear variables con var, se puede inicializar y darle valor, el valor puede cambiar con re nombrar la variable y darle otro valor

var aprendiendo = true;
/* console.log(aprendiendo) */

// Crear variables const, estas variables nunca cambian, no se les puede re asignar un valor.

const aprendiendo2 = "javascript";
/* console.log(aprendiendo2) */

// crear variables con let, con let si se pueden re asignar los valores al igual que con var, pero cambia el scope, var es una variable para todo el código con let el valor de esta variable es focalizado.

let aprendiendo3 = "es6";
aprendiendo3 = "es6 valor 2";
/* console.log(aprendiendo3) */

//----------------------------------------------
// Scope con var:

var musica = "Rock";

if (musica) {
    var musica = "Grunge";
    console.log("dentro del if: ", musica);
}
console.log("fuera del if:", musica);

// aca ambas respuestas serán Grunge, lo que puede ser problemático. como podemos ver la variable se re escribe dentro de la función pero ademas cambia su valor fuera de la función.

// scope con let:

let musica2 = "Rock";

if (musica2) {
    let musica2 = "Grunge";
    console.log("dentro del if: ", musica2);
}
console.log("fuera del if:", musica2);

// aca dentro del if musica2 = Grunge, pero fuera del if musica2= Rock, esto es algo que seria lo mas esperado ya que queremos que la variable cambie su valor con un scope mas acotado, en este caso dentro de la función.

//----------------------------------------------
// Template Strings

const nombre = "Pablo";
const trabajo = "Desarrollador";

console.log("Nombre: " + nombre + ". Trabajo: " + trabajo);

//esta es la manera de hacerlo con template strings

console.log(`Nombre: ${nombre}. Trabajo:  ${trabajo}`);

// concatenar con multiples lineas

/* const contenedorApp = document.querySelector('#app')
let html = '<ul>' + 
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>'
            '</ul>';
contenedorApp.innerHTML = html */

// --- concatenar con template strings

const contenedorApp = document.querySelector("#app");
let html = `<ul> 
                <li> Nombre: ${nombre}  </li> 
                <li> Trabajo:  ${trabajo} </li>
            </ul>`;
contenedorApp.innerHTML = html;

//----------------------------------------------
// Funciones

function saludar(nombre) {
    console.log(`Bienvenido ${nombre}`);
}
saludar("Pablo");
saludar("Salome");
saludar("Daniel");

// function expression, la diferencia entre ambas funciones es que  la de arriba se puede ejecutar antes de crearla es decir si pongo el consolelog arriba de la función la respuesta sea correcta, en cambio en esta no.

const cliente = function (nombreCliente) {
    console.log("Mostrando datos del cliente " + nombreCliente);
};
cliente("juan");

// funciones parámetros por default, el parámetro por default se cancela como vemos en el primero console log donde le damos parámetros al llamar la función. cuando llamamos a la función sin aplicarle los parámetros, se activan sus parámetros por defecto.

function actividad(nombre = "Walter White", actividad = "Enseñar química") {
    console.log(
        `La persona ${nombre}, esta realizando la actividad ${actividad}`
    );
}
actividad("Juan", "Aprender JS");
actividad();

// arrow functions

let viajando = function (destino) {
    return `Viajando a la ciudad de: ${destino} `;
};

let viaje = viajando("Paris");
console.log(viaje);

//Arrow

let viajandoArrow = (destino2) => `Viajando a la ciudad de : ${destino2}`;

let viaje2 = viajandoArrow("Jardín");
console.log(viaje2);

//---------------------------------------------
// Objetos

//Object literal

const persona = {
    nombre: "Juan",
    profesión: "Desarrollador",
    edad: 36,
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesión);
console.log(persona["edad"]);

// Object Constructor

function Tarea1(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea1("Aprender JS y React", "Urgente");
console.log(tarea1);
console.log(tarea1.nombre);

const tarea2 = new Tarea1("Aprender Figma y adobexd", "Urgente");

const tarea3 = new Tarea1("Aprender mySql", "Urgente");

console.log(tarea2);
console.log(tarea3);

// Prototype se usa para que una función solo pueda usarse a un tipo de objeto especifico, es decir bloquea la función para que solo pueda usarse con el objeto tarea en este caso.

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea = new Tarea("Aprender JS y React", "Urgente");

Tarea.prototype.mostrarInformacionTarea = function () {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
};

console.log(tarea);
console.log(tarea.mostrarInformacionTarea());

// si yo quisiera usar esta misma función en el objeto persona2 :

const persona2 = {
    nombre: "Pablo",
    profesión: "Desarrollador",
    edad: 36,
};
/* const mostrarInfoDePersona = mostrarInformacionTarea(persona2.nombre, persona2.profesión, persona2.edad)
console.log(mostrarInfoDePersona) */

// me salta un error y me dice que mostrarInfoDePersona no esta definida ya que mostrarInformacionTarea es un prototype que funciona solo para tarea.

//------------------------------------------------------------------
// Destructuring de objetos

const aprendiendoJs = {
    version: {
        nueva: "ES6+",
        anterior: "ES5",
    },
    frameworks: ["React", "Vuejs", "AngularJS"],
};

console.log(aprendiendoJs);
//version anterior

/* let version = aprendiendoJs.version.nueva
let framework = aprendiendoJs.frameworks[1] */
/* console.log(framework) */

// destructuring forma nueva

let {  frameworks } = aprendiendoJs;
console.log(frameworks);
let {anterior} = aprendiendoJs.version
console.log(anterior)

//-------------------------------------------------------------------
// object literal enhancement 

const band = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ['Master of Puppets', 'seek & Destroy', 'enter Sandman']

const metallica = {band, genero, canciones}

console.log(metallica)

//-------------------------------------------------------------------
// métodos o funciones en un objeto, this es la forma en la que acedo al valor de ese objeto. 

const persona3 = {
    nombre: 'Pablo',
    trabajo: 'Desarrollador web',
    edad: 35,
    musicaRock : true,
    mostrarInformacionPersona () {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

persona3.mostrarInformacionPersona()

//-------------------------------------------------------------------
//arrays y map

carrito = ['Producto 1', 'Producto 2', 'Producto 3']

console.log(carrito.map(producto => {
    return 'El producto es ' + producto
}))

//-------------------------------------------------------------------
// Object keys, puedo acceder al valor dentro de una llave que esta en un objeto.

const persona4 = {
    nombre: 'Pablo',
    trabajo: 'Desarrollador web',
    edad: 35,
    musicaIdm : true,
    
}

console.log(Object.keys(persona4))

//-------------------------------------------------------------------
// Spread operator, en este caso para unir arrays

let lenguajes = ['Javascript', 'PHP', 'Python']
let frameworks2 = ['ReactJS', 'Laravel', 'Django']

let combinacion = [...lenguajes, ...frameworks2]

console.log(combinacion)

// en este caso para copiar arrays.

let lenguajes2 = ['Javascript', 'PHP', 'Python']

let [ultimo] = [...lenguajes2].reverse()

console.log(ultimo)
// lo que hicimos aca fue primero copiar lenguajes2 con el spread operator, y luego a esa copia pasarle el metodo reverse, este muta el array lo re ordena haciendo que el ultimo elemento sea el primero y luego retorna el primer elemento. si no hubiésemos copiado el array, lenguajes2, se hubiese modificado cosa que no queríamos, para ello lo copiamos y modificamos la copia. 

// en este caso para explayar arrays y poder usar su valor dentro de la función

function suma(a,b,c){
    console.log(a+b+c)
}
const numeros = [1,2,3]

/* suma(numeros) esto da mal */

suma(...numeros)

//-------------------------------------------------------------------
// Métodos en arreglos

const personas = [
    {nombre: 'Pablo', edad: 23, aprendiendo: 'JavaScript'},
    {nombre: 'Flor', edad: 25, aprendiendo: 'Phyton'},
    {nombre: 'Salome', edad: 26, aprendiendo: 'Data Entry'},
    {nombre: 'Daniela', edad: 23, aprendiendo: 'php'},
    {nombre: 'Carlos', edad: 28, aprendiendo: 'MYsQl'}
]

// Mayores de 26 años filter

const mayores = personas.filter(persona => persona.edad > 26
)

console.log(mayores)

// que aprende Pablo y su edad find 

const pablo = personas.find( persona =>  persona.nombre === 'Pablo'
)
console.log(`Pablo esta aprendiendo ${pablo.aprendiendo}`)

// Reduce para el total de las edades de todas las personas

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad
}, 0)

console.log(total)

//-------------------------------------------------------------------
// Promises

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout ( () => {
        let descuento = true

        if(descuento) {
            resolve('Descuento aplicado!')
        } else {
            reject('No se pudo aplicar el descuento')
        }
    }, 3000)
})

aplicarDescuento.then(resultado => {
    console.log(resultado)
}). catch( error => {
    console.log(error)
})

//-------------------------------------------------------------------
// Promises con Ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject)=> {
    
})
    