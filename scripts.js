document.addEventListener("DOMContentLoaded", () => {
    const formPublicar = document.getElementById('form-publicar');
    const listaProductos = document.getElementById('lista-productos');
    const buscador = document.getElementById('buscador');

    formPublicar.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = document.getElementById('precio').value;
        
        // Crear un nuevo producto
        const producto = document.createElement('div');
        producto.classList.add('producto');
        producto.innerHTML = `
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <p>Precio: $${precio}</p>
        `;
        
        // Añadir el producto a la lista de productos
        listaProductos.appendChild(producto);
        
        // Limpiar el formulario
        formPublicar.reset();
    });

    buscador.addEventListener('input', () => {
        const filtro = buscador.value.toLowerCase();
        const productos = listaProductos.getElementsByClassName('producto');
        
        Array.from(productos).forEach((producto) => {
            const nombre = producto.getElementsByTagName('h3')[0].innerText.toLowerCase();
            if (nombre.indexOf(filtro) > -1) {
                producto.style.display = '';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});
