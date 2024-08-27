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
        imagen.class = ``

        galeria.appendChild(imagen);

        console.log(imagen);
        
    }
}