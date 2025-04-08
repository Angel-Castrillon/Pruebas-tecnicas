const inputSearch = document.getElementById('input-search'); // Input de la barra de busqueda
const textBox = document.getElementById('text-box'); // Texto del parrafo


// Recreamos el evento de la busqueda y remarque lo que se encuentra en el input
inputSearch.addEventListener('input', () => {
    const resaltado = textBox.textContent.replace(new RegExp(inputSearch.value, 'gi'), "<mark>$&</mark>");
    textBox.innerHTML = resaltado;
});
