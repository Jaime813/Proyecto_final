let productos = [];
let productosFiltrados = [];
let currentPage = 1;
let productosPorPagina = 15;

// Detectar si estamos en buscador
const esBuscador = window.location.pathname.includes("buscador.html");
if (esBuscador) {
    productosPorPagina = 10;
}



function cargarProductos() {
    const productosGuardados = JSON.parse(localStorage.getItem('productos'));

    if (productosGuardados && productosGuardados.length > 0) {
        productos = productosGuardados;
    } else {
        productos = [
            { id: 1, nombre: "Taladro", precio: 1200, categoria: "Herramienta", stock: 5, imagen: "img/fondo.png" },
            { id: 2, nombre: "Compresor", precio: 3400, categoria: "Maquinaria", stock: 3, imagen: "img/fondo.png" },
            { id: 3, nombre: "Sierra Circular", precio: 2100, categoria: "Herramienta", stock: 7, imagen: "img/fondo.png" }
        ];
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    productosFiltrados = [...productos];
    renderProductos();
}


function registrarProducto(event) {
    event.preventDefault(); // Evita que recargue la página

    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const stock = parseInt(document.getElementById('stock').value);
    const imagen = document.getElementById('imagen').value || 'img/fondo.png';

    if (nombre && categoria && !isNaN(precio) && !isNaN(stock)) {
        const nuevoProducto = {
            id: Date.now(), // ID único
            nombre,
            categoria,
            precio,
            stock,
            imagen
        };

        

        productos.push(nuevoProducto);
        localStorage.setItem('productos', JSON.stringify(productos));

        alert('Producto registrado exitosamente ✅');
        document.getElementById('formulario-producto').reset();
    } else {
        alert('Por favor complete todos los campos correctamente ❗');
    }
}



function renderProductos() {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = '';
    const inicio = (currentPage - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosFiltrados.slice(inicio, fin);

    if (productosPagina.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron productos.</p>';
    } else {
        productosPagina.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('producto');

            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;
            img.width = 100;

            const h3 = document.createElement('h3');
            h3.textContent = producto.nombre;

            const precio = document.createElement('p');
            precio.textContent = `Precio: $${producto.precio}`;

            const categoria = document.createElement('p');
            categoria.textContent = `Categoría: ${producto.categoria}`;

            const stock = document.createElement('p');
            stock.textContent = `Stock: ${producto.stock}`;

            div.append(img, h3, precio, categoria, stock);
            contenedor.appendChild(div);
        });
    }

    renderPaginacion();
}

function renderPaginacion() {
    const paginacion = document.getElementById('paginacion');
    paginacion.innerHTML = '';
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    if (currentPage > 1) {
        const btnAnterior = document.createElement('button');
        btnAnterior.textContent = 'Anterior';
        btnAnterior.onclick = () => cambiarPagina(currentPage - 1);
        paginacion.appendChild(btnAnterior);
    }

    const paginaInfo = document.createElement('span');
    paginaInfo.textContent = ` Página ${currentPage} de ${totalPaginas} `;
    paginacion.appendChild(paginaInfo);

    if (currentPage < totalPaginas) {
        const btnSiguiente = document.createElement('button');
        btnSiguiente.textContent = 'Siguiente';
        btnSiguiente.onclick = () => cambiarPagina(currentPage + 1);
        paginacion.appendChild(btnSiguiente);
    }
}

function cambiarPagina(pagina) {
    currentPage = pagina;
    renderProductos();
}

function filtrarProductos() {
    const filtroNombre = document.getElementById('filtro-nombre')?.value.toLowerCase() || '';
    const filtroCategoria = document.getElementById('filtro-categoria')?.value.toLowerCase() || '';
    const filtroPrecioMax = parseFloat(document.getElementById('filtro-precio-max')?.value);

    productosFiltrados = productos.filter(producto => {
        return (
            (filtroNombre === '' || producto.nombre.toLowerCase().includes(filtroNombre)) &&
            (filtroCategoria === '' || producto.categoria.toLowerCase().includes(filtroCategoria)) &&
            (isNaN(filtroPrecioMax) || producto.precio <= filtroPrecioMax)
        );
    });

    currentPage = 1;
    renderProductos();
}

function limpiarFiltros() {
    document.getElementById('filtro-nombre').value = '';
    document.getElementById('filtro-categoria').value = '';
    document.getElementById('filtro-precio-max').value = '';
    productosFiltrados = [...productos];
    currentPage = 1;
    renderProductos();
}

window.onload = cargarProductos;
