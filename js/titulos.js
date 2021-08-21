const tituloRecomendados = document.getElementById('title-recomendados');

if(tituloRecomendados == 'null'){
    console.log('No se encuentra el ID')
    break;
}else{
    tituloRecomendados.textContent = "Recomendados";
    tituloRecomendados.className = 'title-subsection';
}

const tituloNovedades = document.getElementById('title-novedades');
if(tituloNovedades == null){
    break;
}else{
    tituloNovedades.textContent = "Novedades";
    tituloNovedades.className = 'title-subsection';
}

const tituloEnsayos = document.getElementById('title-ensayos');

if(tituloEnsayos == null){
    break;
}else{
    tituloEnsayos.textContent = "Ensayos";
    tituloEnsayos.className = 'title-subsection';
}

const tituloManuales = document.getElementById('title-manuales');
if(tituloManuales == null){
    break;
}else{
    tituloManuales.textContent = "Manuales";
    tituloManuales.className = 'title-subsection';
}

const tituloGuiones = document.getElementById('title-guiones');

if(tituloGuiones == null){
    break;
}else{
    tituloGuiones.textContent = "Guiones";
    tituloGuiones.className = 'title-subsection';
}

const tituloFicciones = document.getElementById('title-ficciones');

if(tituloFicciones == null){
    break;
}else{
    tituloFicciones.textContent = "Ficciones";
    tituloFicciones.className = 'title-subsection';
}