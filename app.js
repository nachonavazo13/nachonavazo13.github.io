// Menu Lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function MostrarOcultarMenu(){
    if(menu_visible == false){
        menu.style.display = "block";
        menu_visible = true;
    }

    else{
        menu.style.display = "none"
        menu_visible = false;
    }
}

// Ocultar el menu una vez que se selecciono la opción

let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Animaciones Barras de % identificadas por si id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);

    }
}

// Seleccionar todas las barras generales para luego manipularlas

let tt = document.getElementById("tt");
crearBarra(tt);

let av = document.getElementById("av");
crearBarra(av);

let sc = document.getElementById("sc");
crearBarra(sc);

let es = document.getElementById("es");
crearBarra(es);

let ae = document.getElementById("ae");
crearBarra(ae);

let ps = document.getElementById("ps");
crearBarra(ps);

let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalTt = setInterval(function(){
            pintarBarra(tt, 17, 0, intervalTt);
        },100);
        const intervalAv = setInterval(function(){
            pintarBarra(av, 12, 1, intervalAv);
        },100);
        const intervalSc = setInterval(function(){
            pintarBarra(sc, 15, 2, intervalSc);
        },100);
        const intervalEs = setInterval(function(){
            pintarBarra(es, 14, 3, intervalEs);
        },100);
        const intervalAe = setInterval(function(){
            pintarBarra(ae, 16, 4, intervalAe);
        },100);
        const intervalPs = setInterval(function(){
            pintarBarra(ps, 13, 5, intervalPs);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}



