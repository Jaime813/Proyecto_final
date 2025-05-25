let productos = [];
let productosFiltrados = [];
let currentPage = 1;
let productosPorPagina = 15;

// Detectar si estamos en buscador
const esBuscador = window.location.pathname.includes("buscar.html");
if (esBuscador) {
    productosPorPagina = 10;
}


function cargarProductos() {

    // localStorage.removeItem('productos');


     const productosGuardados = JSON.parse(localStorage.getItem('productos'));

    if (productosGuardados && productosGuardados.length > 0) {
        productos = productosGuardados;
    } else {

   productos = [ 
    {"id": 1, "nombre": "Fuente de poder regulada (0-30V)", "precio": 1800, "categoria": "Instrumentación", "stock": 5, "imagen": "fuente.jpg"},
  {"id": 2, "nombre": "Osciloscopio digital 100MHz", "precio": 5500, "categoria": "Instrumentación", "stock": 2, "imagen": "osciloscopio.jpg"},
  {"id": 3, "nombre": "Multímetro digital True RMS", "precio": 750, "categoria": "Instrumentación", "stock": 10, "imagen": "tester.jpg"},
  {"id": 4, "nombre": "Estación de soldadura con temperatura controlada", "precio": 1200, "categoria": "Herramientas de Reparación", "stock": 6, "imagen": "estacion.jpg"},
  {"id": 5, "nombre": "Microscopio digital USB", "precio": 1600, "categoria": "Instrumentación", "stock": 3, "imagen": "microscop.jpg"},
  {"id": 6, "nombre": "Pinzas antiestáticas (set de 6)", "precio": 300, "categoria": "Herramientas de Reparación", "stock": 15, "imagen": "pinzas6.jpg"},
  {"id": 7, "nombre": "Extractor de humo para soldadura", "precio": 1900, "categoria": "Seguridad", "stock": 2, "imagen": "extractorH.jpg"},
  {"id": 8, "nombre": "Kit de componentes electrónicos (resistencias, capacitores, LEDs)", "precio": 450, "categoria": "Componentes", "stock": 20, "imagen": "kitelectr.jpg"},
  {"id": 9, "nombre": "Pasta para soldar (flux)", "precio": 120, "categoria": "Consumibles", "stock": 40, "imagen": "pastaS.jpg"},
  {"id": 10, "nombre": "Cinta kapton resistente al calor", "precio": 180, "categoria": "Consumibles", "stock": 25, "imagen": "cintaCarlo.jpg"},
  {"id": 11, "nombre": "Caja organizadora para componentes SMD", "precio": 350, "categoria": "Almacenamiento", "stock": 10, "imagen": "cajaCom.jpg"},
  {"id": 12, "nombre": "Ventilador extractor para laboratorio", "precio": 2200, "categoria": "Equipamiento", "stock": 2, "imagen": "venti.jpg"},
  {"id": 13, "nombre": "Limpiador ultrasónico de placas", "precio": 3200, "categoria": "Herramientas de Reparación", "stock": 1, "imagen": "limpiarUltr.jpg"},
  {"id": 14, "nombre": "Alcohol isopropílico 99% (1L)", "precio": 250, "categoria": "Consumibles", "stock": 12, "imagen": "alcoholISo.jpg"},
  {"id": 15, "nombre": "Tester de fuentes ATX", "precio": 500, "categoria": "Diagnóstico", "stock": 5, "imagen": "testerATX.jpg"},
  {"id": 16, "nombre": "Lupa con luz LED para mesa", "precio": 850, "categoria": "Instrumentación", "stock": 4, "imagen": "lupa.jpg"},
  {"id": 17, "nombre": "Desoldador eléctrico", "precio": 950, "categoria": "Herramientas de Reparación", "stock": 3, "imagen": "desoldador.jpg"},
  {"id": 18, "nombre": "Antiestático ESD tapete de trabajo", "precio": 1100, "categoria": "Seguridad", "stock": 5, "imagen": "tapete.jpg"},
  {"id": 19, "nombre": "Kit de destornilladores de precisión", "precio": 400, "categoria": "Herramientas de Reparación", "stock": 10, "imagen": "kitdestorn.jpg"},
  {"id": 20, "nombre": "Ventilador portátil USB para PCBs", "precio": 150, "categoria": "Equipamiento", "stock": 20, "imagen": "ventilaPort.jpg"},
  {"id": 21, "nombre": "Pinza amperimétrica digital", "precio": 1300, "categoria": "Instrumentación", "stock": 3, "imagen": "pinzasamp.jpg"},
  {"id": 22, "nombre": "Cepillo antiestático de limpieza", "precio": 100, "categoria": "Consumibles", "stock": 30, "imagen": "cepilloant.jpg"},
  {"id": 23, "nombre": "Kit de reparación para BGA", "precio": 3500, "categoria": "Herramientas de Reparación", "stock": 2, "imagen": "kitBGA.jpg"},
  {"id": 24, "nombre": "Gafas de protección UV", "precio": 200, "categoria": "Seguridad", "stock": 18, "imagen": "gafas.jpg"},
  {"id": 25, "nombre": "Tiras de LED SMD para prueba", "precio": 300, "categoria": "Componentes", "stock": 25, "imagen": "tirasled.jpg"},
  {"id": 26, "nombre": "Sensor de temperatura infrarrojo", "precio": 600, "categoria": "Instrumentación", "stock": 4, "imagen": "sensorinfr.webp"},
  {"id": 27, "nombre": "Adaptadores universales para cargadores", "precio": 550, "categoria": "Componentes", "stock": 8, "imagen": "adatador.jpg"},
  {"id": 28, "nombre": "Cinta doble faz para fijación de placas", "precio": 90, "categoria": "Consumibles", "stock": 50, "imagen": "cintadoblefaz.jpg"},
  {"id": 29, "nombre": "Cargador variable USB", "precio": 700, "categoria": "Instrumentación", "stock": 6, "imagen": "cargadorvari.jpg"},
  {"id": 30, "nombre": "Mini compresor de aire para limpieza", "precio": 2300, "categoria": "Equipamiento", "stock": 2, "imagen": "minicompre.jpg"},
  {"id": 31, "nombre": "Pinzas de corte de precisión", "precio": 250, "categoria": "Herramientas de Reparación", "stock": 15, "imagen": "pinzacorteprecis.jpg"},
  {"id": 32, "nombre": "Ventilador centrífugo extractor", "precio": 2800, "categoria": "Equipamiento", "stock": 2, "imagen": "ventiladorcentri.webp"},
  {"id": 33, "nombre": "Calibrador digital", "precio": 900, "categoria": "Instrumentación", "stock": 4, "imagen": "calibradordig.jpg"},
  {"id": 34, "nombre": "Batería Li-Ion 18650 (pack x4)", "precio": 650, "categoria": "Componentes", "stock": 12, "imagen": "bateria.jpg"},
  {"id": 35, "nombre": "Estación de retrabajo SMD", "precio": 4700, "categoria": "Herramientas de Reparación", "stock": 1, "imagen": "estacionretrabajo.jpg"},
  {"id": 36, "nombre": "Termómetro infrarrojo sin contacto", "precio": 800, "categoria": "Instrumentación", "stock": 3, "imagen": "termometroinfr.jpg"},
  {"id": 37, "nombre": "Espuma limpiadora de contactos", "precio": 280, "categoria": "Consumibles", "stock": 15, "imagen": "limpiacontact.jpg"},
  {"id": 38, "nombre": "Cinta conductiva de cobre", "precio": 320, "categoria": "Consumibles", "stock": 9, "imagen": "cintaconductiva.jpg"},
  {"id": 39, "nombre": "Tiras de prueba de voltaje", "precio": 100, "categoria": "Diagnóstico", "stock": 30, "imagen": "tirastester.jpg"},
  {"id": 40, "nombre": "Guantes antiestáticos ESD", "precio": 150, "categoria": "Seguridad", "stock": 25, "imagen": "guantesantiesta.jpg"},
  {"id": 41, "nombre": "Estuche de herramientas portátil", "precio": 1800, "categoria": "Almacenamiento", "stock": 5, "imagen": "estuche.jpg"},
  {"id": 42, "nombre": "Kit de conectores JST", "precio": 370, "categoria": "Componentes", "stock": 10, "imagen": "JST.jpg"},
  {"id": 43, "nombre": "Botiquín de primeros auxilios", "precio": 450, "categoria": "Seguridad", "stock": 7, "imagen": "botiquin.jpg"},
  {"id": 44, "nombre": "Extractor de IC (componentes)", "precio": 100, "categoria": "Herramientas de Reparación", "stock": 18, "imagen": "ic.jpg"},
  {"id": 45, "nombre": "Maletín antiestático para transporte", "precio": 2700, "categoria": "Almacenamiento", "stock": 3, "imagen": "maletinant.jpg"},
  {"id": 46, "nombre": "Kit de sensores Arduino", "precio": 800, "categoria": "Componentes", "stock": 6, "imagen": "kitsensores.jpg"},
  {"id": 47, "nombre": "Foco LED lupa de aumento", "precio": 1200, "categoria": "Instrumentación", "stock": 4, "imagen": "focolupa.jpg"},
  {"id": 48, "nombre": "Termocupla tipo K para multímetros", "precio": 150, "categoria": "Instrumentación", "stock": 10, "imagen": "termocuplaK.jpg"},
  {"id": 49, "nombre": "Regla métrica de acero", "precio": 120, "categoria": "Herramientas de Reparación", "stock": 20, "imagen": "regla.jpg"},
  {"id": 50, "nombre": "Aspiradora de escritorio USB", "precio": 360, "categoria": "Equipamiento", "stock": 5, "imagen": "aspiradora.jpg"},
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
            
            id: productos.length + 1,
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
        return;
    }

    for (let i = 0; i < productosPagina.length; i++) {
        const producto = productosPagina[i];
        contenedor.innerHTML += `
            <div class="producto">
                <img src="/img/Product/${producto.imagen}" alt="${producto.nombre}" width="100"
                onerror="this.src='/img/product/sinIMG.png'">

                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Stock: ${producto.stock}</p>
            </div>
        `;
    }

    renderPaginacion();
}




function renderPaginacion() {
    const paginacion = document.getElementById('paginacion');
    paginacion.innerHTML = '';
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    if (currentPage > 1) {
        paginacion.innerHTML += `<button onclick="cambiarPagina(${currentPage - 1})">Anterior</button>`;
    }

    paginacion.innerHTML += `<span> Página ${currentPage} de ${totalPaginas} </span>`;

    if (currentPage < totalPaginas) {
        paginacion.innerHTML += `<button onclick="cambiarPagina(${currentPage + 1})">Siguiente</button>`;
    }
}

function cambiarPagina(pagina) {
    currentPage = pagina;
    renderProductos();
}

function filtrarProductos() {
    const filtroNombre = document.getElementById('filtro-nombre').value.toLowerCase();
    const filtroCategoria = document.getElementById('filtro-categoria').value.toLowerCase();
    

    productosFiltrados = []; // Limpiar antes de agregar

    for (let i = 0; i < productos.length; i++) {
        const p = productos[i];
        const coincideNombre = filtroNombre === '' || p.nombre.toLowerCase().includes(filtroNombre);
        const coincideCategoria = filtroCategoria === '' || p.categoria.toLowerCase().includes(filtroCategoria);
        

        if (coincideNombre && coincideCategoria ) {
            productosFiltrados.push(p);
        }
    }

    currentPage = 1;
    renderProductos();
}

function limpiarFiltros() {
    document.getElementById('filtro-nombre').value = '';
    document.getElementById('filtro-categoria').value = '';
    
    productosFiltrados = [...productos];
    currentPage = 1;
    renderProductos();
}


window.onload = cargarProductos;