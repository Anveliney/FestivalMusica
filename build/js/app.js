document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    const CANTIDADDEIMAGENES = 16;

    for(let i = 1; i <= CANTIDADDEIMAGENES; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = `Imagen Galeria`
        imagen.class = `Imagen Galeria`

        //Event Handler
        imagen.onclick = function (){
            mostrarImagen(i)
        }


        galeria.appendChild(imagen);
    }
}

function mostrarImagen (i){
    
    //Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');

    //Agregar al HTML
    console.log(modal);

}