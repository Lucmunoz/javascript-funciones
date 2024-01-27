//Obtengo el nombre de la pagina abierta
var path = window.location.pathname;
var page = path.split("/").pop();

if(page === "pintar.html") 
    {

    /*
    <script>
        function pintar(){
            ele.style.backgroundColor = 'yellow'
        }
        const ele = document.getElementById("ele1")
        ele.addEventListener("click", pintar);
    </script>
    */

    //######## RESPUESTA 2.2 ##########
    /*
    const ele = document.getElementById ("ele1");
    function pintar(elemento){
            elemento.style.backgroundColor = 'yellow';
        }

    ele.addEventListener("click", function(){
    pintar(ele);
    })

    // Lo anterior se puede transformar de una funcion anónima al tipo arrow function
    // ele.addEventListener("click", ()=> pintar(ele))
    */

    //######## RESPUESTA 2.3 ##########

    const ele = document.getElementById ("ele1");
    function pintar(elemento, color ='green'){
            elemento.style.backgroundColor = color;
        }
    ele.addEventListener("click", function(){
        pintar(ele,"yellow")})

    /*
    //Lo anterior se puede declarar como arrow function.
    ele.addEventListener("click", () => pintar(ele,"yellow"))
    */

    /*
    //TODO el codigo anterior se puede optimizar declarandola de la siguiente manera.

    const ele = document.getElementById ("ele1"); //defino mi elemento objetivo
    const pintar = (elemento, color ='green') => elemento.style.backgroundColor = color //defino mi funcion anónima
    ele.addEventListener("click", ()=> pintar(ele,"yellow"))
    */

    /*
    // Es mas, si el color fuera fijo (no asignable como una variable), el código podría reducirse aun mas haciendo uso del atributo target
    const ele = document.getElementById ("ele1"); //defino mi elemento objetivo
    ele.addEventListener("click", (ele)=> ele.target.style.backgroundColor = "yellow") // defino accion en cuanto se detecte el evento click
    */
}



if(page === "4_colores.html") 
{
    //######## RESPUESTA EJERCICIO 3 ##########
    let color_cuadrado =""

    const divCuadrado_1 = document.getElementById ("cuadrado_1")
    const divCuadrado_2 = document.getElementById ("cuadrado_2");
    const divCuadrado_3 = document.getElementById ("cuadrado_3");
    const divCuadrado_4 = document.getElementById ("cuadrado_4");
    const divCuadrado_key = document.getElementById ("key");
    const contenedorObjetivo = document.getElementById ("contenedor_principal");

    /*
    //######## FORMA 1 ##########

        function pintarCuadrado(elemento, color ='white'){
                console.log(elemento)
                elemento.style.backgroundColor = color;
            }  

        divCuadrado_1.addEventListener("click", function(){
            pintarCuadrado(divCuadrado_1,"black")})
        
        divCuadrado_2.addEventListener("click", function(){
            pintarCuadrado(divCuadrado_2,"black")})

        divCuadrado_3.addEventListener("click", function(){
            pintarCuadrado(divCuadrado_3,"black")})

        divCuadrado_4.addEventListener("click", function(){
            pintarCuadrado(divCuadrado_4,"black")})
    */


    /*//######## FORMA 2 ##########
    
        const pintarCuadrado = (event) => {
            event.target.style.backgroundColor="black"
        }

        divCuadrado_1.addEventListener("click", pintarCuadrado)
        divCuadrado_2.addEventListener("click", pintarCuadrado)
        divCuadrado_3.addEventListener("click", pintarCuadrado)
        divCuadrado_3.addEventListener("click", pintarCuadrado)
    */

    /*//######## FORMA DEFINITIVA ##########
        divCuadrado_1.addEventListener("click", (divCuadrado_1)=> divCuadrado_1.target.style.backgroundColor = "black")
        divCuadrado_2.addEventListener("click", (divCuadrado_2)=> divCuadrado_2.target.style.backgroundColor = "black")
        divCuadrado_3.addEventListener("click", (divCuadrado_3)=> divCuadrado_3.target.style.backgroundColor = "black")
        divCuadrado_4.addEventListener("click", (divCuadrado_4)=> divCuadrado_4.target.style.backgroundColor = "black")
    */
   
    //######## FORMA 3 haciendo uso de funciones anónimas ##########

    const pintarCuadrado = (elemento, color) => {
            //console.log (elemento)
            elemento.style.backgroundColor =color
        }

        divCuadrado_1.addEventListener("click", ()=>pintarCuadrado(divCuadrado_1,"black"))
        divCuadrado_2.addEventListener("click", ()=>pintarCuadrado(divCuadrado_2,"black"))
        divCuadrado_3.addEventListener("click", ()=>pintarCuadrado(divCuadrado_3,"black"))
        divCuadrado_4.addEventListener("click", ()=>pintarCuadrado(divCuadrado_4,"black"))


    document.addEventListener('keydown', function (event) {

        if(((event.key === 'a'))||((event.key === 's'))||((event.key === 'd'))) {
           
            if (event.key === 'a') {
                color_cuadrado='pink'
            } else if (event.key === 's') {
                color_cuadrado='orange'
            } else if (event.key === 'd') {
                color_cuadrado='skyblue'
            }
            divCuadrado_key.style.backgroundColor = color_cuadrado
        } 
        
        else {
            if (event.key === 'q') {
                color_cuadrado='purple'
                crearNuevoCuadrado(color_cuadrado)
            } else if (event.key === 'w') {
                color_cuadrado='gray'
                crearNuevoCuadrado(color_cuadrado)
            } else if (event.key === 'e') {
                color_cuadrado='brown'
                crearNuevoCuadrado(color_cuadrado)
                
            }
        } 

        /*else {
            if (event.key === 'q') {
                crearNuevoCuadrado('purple')
            } else if (event.key === 'w') {
                color_cuadrado='gray'
                crearNuevoCuadrado('gray')
            } else if (event.key === 'e') {
                color_cuadrado='brown'
                crearNuevoCuadrado('brown')
            }
        }*/

    })

    /*function crearNuevoCuadrado(color)
    { 
        const DivCuadrado_N = document.createElement("div");
        DivCuadrado_N.style.width = "200px"
        DivCuadrado_N.style.height = "200px"
        DivCuadrado_N.style.backgroundColor = color
        contenedorObjetivo.appendChild(DivCuadrado_N)
    }*/

    const crearNuevoCuadrado = (color) =>{ 
        const DivCuadrado_N = document.createElement("div");
        DivCuadrado_N.style.width = "200px"
        DivCuadrado_N.style.height = "200px"
        DivCuadrado_N.style.backgroundColor = color
        contenedorObjetivo.appendChild(DivCuadrado_N)
    }

}
