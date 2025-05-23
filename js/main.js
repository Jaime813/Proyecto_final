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
    productos = productos = [
  {
    "nombre": "Sensor de Proximidad Inductivo",
    "categoria": "Sensores",
    "imagen": "https://ferretronica.com/cdn/shop/files/SensorInductivodeProximidadparaMetalLJ12A3-4-Z-BYPNPNormalmenteAbierto_Ferretronica_f6822d1e-7cdd-4e77-93b8-b3619788941c_x700.jpg?v=1685189319",
    "codigo": "abc16b100",
    "precio": 405.25,
    "marca": "Siemens",
    "compatibilidad": [
      "Arduino",
      "Raspberry Pi"
    ]
  },
  {
    "nombre": "PLC Siemens S7-1200",
    "categoria": "Controladores",
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrm5lL3_UYMg6uZIa6Qspedx8-GQ1-V58Rlg&s",
    "codigo": "abc16b101",
    "precio": 132.87,
    "marca": "Siemens",
    "compatibilidad": [
      "Variadores de Frecuencia",
      "Motores AC"
    ]
  },
  {
    "nombre": "Fuente Switching 24V 10A",
    "categoria": "Fuentes de alimentaci\u00f3n",
    "imagen": "https://bytefix.com/img/producto_3.jpg",
    "codigo": "abc16b102",
    "precio": 493.85,
    "marca": "Omron",
    "compatibilidad": [
      "Sensores",
      "Actuadores"
    ]
  },
  {
    "nombre": "Motor Paso a Paso NEMA 17",
    "categoria": "Motores",
    "imagen": "https://bytefix.com/img/producto_4.jpg",
    "codigo": "abc16b103",
    "precio": 210.68,
    "marca": "ByteMotion",
    "compatibilidad": [
      "Variadores de Frecuencia",
      "Motores AC"
    ]
  },
  {
    "nombre": "Pantalla HMI 7'' t\u00e1ctil",
    "categoria": "Interfaces hombre-m\u00e1quina",
    "imagen": "https://bytefix.com/img/producto_5.jpg",
    "codigo": "abc16b104",
    "precio": 411.94,
    "marca": "Siemens",
    "compatibilidad": [
      "CNC",
      "Impresoras 3D"
    ]
  },
  {
    "nombre": "Variador de Frecuencia 2.2kW",
    "categoria": "Variadores",
    "imagen": "https://bytefix.com/img/producto_6.jpg",
    "codigo": "abc16b105",
    "precio": 341.51,
    "marca": "Honeywell",
    "compatibilidad": [
      "RS485",
      "UART"
    ]
  },
  {
    "nombre": "Rel\u00e9 de Estado S\u00f3lido",
    "categoria": "Rel\u00e9s",
    "imagen": "https://bytefix.com/img/producto_7.jpg",
    "codigo": "abc16b106",
    "precio": 181.44,
    "marca": "Honeywell",
    "compatibilidad": [
      "PLC Siemens",
      "Aut\u00f3matas Allen-Bradley"
    ]
  },
  {
    "nombre": "Cable Ethernet Industrial",
    "categoria": "Cables",
    "imagen": "https://bytefix.com/img/producto_8.jpg",
    "codigo": "abc16b107",
    "precio": 296.76,
    "marca": "ByteMotion",
    "compatibilidad": [
      "SCADA",
      "Modbus TCP/IP"
    ]
  },
  {
    "nombre": "M\u00f3dulo de Expansi\u00f3n Digital",
    "categoria": "M\u00f3dulos",
    "imagen": "https://bytefix.com/img/producto_9.jpg",
    "codigo": "abc16b108",
    "precio": 171.3,
    "marca": "Phoenix Contact",
    "compatibilidad": [
      "HMI",
      "Controladores PID"
    ]
  },
  {
    "nombre": "Actuador Neum\u00e1tico",
    "categoria": "Actuadores",
    "imagen": "https://bytefix.com/img/producto_10.jpg",
    "codigo": "abc16b109",
    "precio": 550.97,
    "marca": "LG Industrial",
    "compatibilidad": [
      "HMI",
      "Controladores PID"
    ]
  },
  {
    "nombre": "Contactor Tripolar 32A",
    "categoria": "Contactores",
    "imagen": "https://bytefix.com/img/producto_11.jpg",
    "codigo": "abc16b110",
    "precio": 28.24,
    "marca": "Siemens",
    "compatibilidad": [
      "Arduino",
      "Raspberry Pi"
    ]
  },
  {
    "nombre": "Disyuntor Termomagn\u00e9tico",
    "categoria": "Protecci\u00f3n el\u00e9ctrica",
    "imagen": "https://bytefix.com/img/producto_12.jpg",
    "codigo": "abc16b111",
    "precio": 295.03,
    "marca": "Honeywell",
    "compatibilidad": [
      "WiFi",
      "Bluetooth"
    ]
  },
  {
    "nombre": "Resistencia de Cartucho 300W",
    "categoria": "Resistencias",
    "imagen": "https://bytefix.com/img/producto_13.jpg",
    "codigo": "abc16b112",
    "precio": 55.95,
    "marca": "Weintek",
    "compatibilidad": [
      "24V DC",
      "12V DC"
    ]
  },
  {
    "nombre": "Acoplador \u00d3ptico",
    "categoria": "Acopladores",
    "imagen": "https://bytefix.com/img/producto_14.jpg",
    "codigo": "abc16b113",
    "precio": 20.25,
    "marca": "Panasonic",
    "compatibilidad": [
      "Redes Industriales",
      "Ethernet/IP"
    ]
  },
  {
    "nombre": "Ventilador de Enfriamiento 24V",
    "categoria": "Ventilaci\u00f3n",
    "imagen": "https://bytefix.com/img/producto_15.jpg",
    "codigo": "abc16b114",
    "precio": 98.88,
    "marca": "Mean Well",
    "compatibilidad": [
      "CNC",
      "Impresoras 3D"
    ]
  },
  {
    "nombre": "Tarjeta de Control CNC",
    "categoria": "CNC",
    "imagen": "https://bytefix.com/img/producto_16.jpg",
    "codigo": "abc16b115",
    "precio": 87.91,
    "marca": "Omron",
    "compatibilidad": [
      "Sensores",
      "Actuadores"
    ]
  },
  {
    "nombre": "Interruptor de L\u00edmite",
    "categoria": "Interruptores",
    "imagen": "https://bytefix.com/img/producto_17.jpg",
    "codigo": "abc16b116",
    "precio": 291.08,
    "marca": "Siemens",
    "compatibilidad": [
      "HMI",
      "Controladores PID"
    ]
  },
  {
    "nombre": "Encoder \u00d3ptico Rotativo",
    "categoria": "Encoders",
    "imagen": "https://bytefix.com/img/producto_18.jpg",
    "codigo": "abc16b117",
    "precio": 347.23,
    "marca": "WAGO",
    "compatibilidad": [
      "HMI",
      "Controladores PID"
    ]
  },
  {
    "nombre": "Filtro EMI Monof\u00e1sico",
    "categoria": "Filtros",
    "imagen": "https://bytefix.com/img/producto_19.jpg",
    "codigo": "abc16b118",
    "precio": 295.05,
    "marca": "ABB",
    "compatibilidad": [
      "PLC Siemens",
      "Aut\u00f3matas Allen-Bradley"
    ]
  },
  {
    "nombre": "Caja de Distribuci\u00f3n IP65",
    "categoria": "Cajas",
    "imagen": "https://bytefix.com/img/producto_20.jpg",
    "codigo": "abc16b119",
    "precio": 419.3,
    "marca": "ByteFix",
    "compatibilidad": [
      "WiFi",
      "Bluetooth"
    ]
  },
  {
    "nombre": "Sensor Fotoel\u00e9ctrico",
    "categoria": "Visualizaci\u00f3n",
    "imagen": "https://bytefix.com/img/producto_21.jpg",
    "codigo": "abc16b120",
    "precio": 430.01,
    "marca": "ABB",
    "compatibilidad": [
      "Arduino",
      "Raspberry Pi"
    ]
  },
  {
    "nombre": "Pantalla OLED I2C",
    "categoria": "Pantallas",
    "imagen": "https://bytefix.com/img/producto_22.jpg",
    "codigo": "abc16b121",
    "precio": 576.71,
    "marca": "ByteFix",
    "compatibilidad": [
      "HMI",
      "Controladores PID"
    ]
  },
  {
    "nombre": "M\u00f3dulo WiFi ESP32",
    "categoria": "Comunicaci\u00f3n",
    "imagen": "https://bytefix.com/img/producto_23.jpg",
    "codigo": "abc16b122",
    "precio": 456.93,
    "marca": "Schneider",
    "compatibilidad": [
      "24V DC",
      "12V DC"
    ]
  },
  {
    "nombre": "C\u00e1mara Termogr\u00e1fica Port\u00e1til",
    "categoria": "Instrumentos",
    "imagen": "https://bytefix.com/img/producto_24.jpg",
    "codigo": "abc16b123",
    "precio": 542.72,
    "marca": "ABB",
    "compatibilidad": [
      "CNC",
      "Impresoras 3D"
    ]
  },
  {
    "nombre": "Term\u00f3metro Infrarrojo Industrial",
    "categoria": "Medici\u00f3n",
    "imagen": "https://bytefix.com/img/producto_25.jpg",
    "codigo": "abc16b124",
    "precio": 176.96,
    "marca": "Phoenix Contact",
    "compatibilidad": [
      "Bater\u00edas",
      "Paneles Solares"
    ]
  },
  {
    "nombre": "Fuente Programable DC",
    "categoria": "Herramientas",
    "imagen": "https://bytefix.com/img/producto_26.jpg",
    "codigo": "abc16b125",
    "precio": 264.57,
    "marca": "Panasonic",
    "compatibilidad": [
      "Redes Industriales",
      "Ethernet/IP"
    ]
  },
  {
    "nombre": "Tester Digital Mult\u00edmetro",
    "categoria": "Transformadores",
    "imagen": "https://bytefix.com/img/producto_27.jpg",
    "codigo": "abc16b126",
    "precio": 398.54,
    "marca": "Bosch",
    "compatibilidad": [
      "PLC Siemens",
      "Aut\u00f3matas Allen-Bradley"
    ]
  },
  {
    "nombre": "Transformador Toroidal 12V",
    "categoria": "Distribuci\u00f3n",
    "imagen": "https://bytefix.com/img/producto_28.jpg",
    "codigo": "abc16b127",
    "precio": 28.9,
    "marca": "Bosch",
    "compatibilidad": [
      "RS485",
      "UART"
    ]
  },
  {
    "nombre": "Caja de Control Industrial",
    "categoria": "Kits",
    "imagen": "https://bytefix.com/img/producto_29.jpg",
    "codigo": "abc16b128",
    "precio": 563.41,
    "marca": "LG Industrial",
    "compatibilidad": [
      "24V DC",
      "12V DC"
    ]
  },
  {
    "nombre": "Kit de Cableado Industrial",
    "categoria": "Conexiones",
    "imagen": "https://bytefix.com/img/producto_30.jpg",
    "codigo": "abc16b129",
    "precio": 549.52,
    "marca": "ByteFix",
    "compatibilidad": [
      "24V DC",
      "12V DC"
    ]
  },
  {
    "nombre": "Bornera Din Rail",
    "categoria": "Sensores",
    "imagen": "https://bytefix.com/img/producto_31.jpg",
    "codigo": "abc16b130",
    "precio": 189.41,
    "marca": "WAGO",
    "compatibilidad": [
      "HMI",
      "Controladores PID"
    ]
  },
  {
    "nombre": "M\u00f3dulo de Relevadores",
    "categoria": "Controladores",
    "imagen": "https://bytefix.com/img/producto_32.jpg",
    "codigo": "abc16b131",
    "precio": 519.34,
    "marca": "Panasonic",
    "compatibilidad": [
      "CNC",
      "Impresoras 3D"
    ]
  },
  {
    "nombre": "Kit de Herramientas Electr\u00f3nicas",
    "categoria": "Fuentes de alimentaci\u00f3n",
    "imagen": "https://bytefix.com/img/producto_33.jpg",
    "codigo": "abc16b132",
    "precio": 399.46,
    "marca": "Bosch",
    "compatibilidad": [
      "Redes Industriales",
      "Ethernet/IP"
    ]
  },
  {
    "nombre": "Detector de Movimiento PIR",
    "categoria": "Motores",
    "imagen": "https://bytefix.com/img/producto_34.jpg",
    "codigo": "abc16b133",
    "precio": 33.83,
    "marca": "ByteMotion",
    "compatibilidad": [
      "PLC Siemens",
      "Aut\u00f3matas Allen-Bradley"
    ]
  },
  {
    "nombre": "Cinta Aislante de Alta Temperatura",
    "categoria": "Interfaces hombre-m\u00e1quina",
    "imagen": "https://bytefix.com/img/producto_35.jpg",
    "codigo": "abc16b134",
    "precio": 250.5,
    "marca": "Panasonic",
    "compatibilidad": [
      "PLC Siemens",
      "Aut\u00f3matas Allen-Bradley"
    ]
  },
  {
    "nombre": "Lubricante El\u00e9ctrico",
    "categoria": "Variadores",
    "imagen": "https://bytefix.com/img/producto_36.jpg",
    "codigo": "abc16b135",
    "precio": 279.23,
    "marca": "Panasonic",
    "compatibilidad": [
      "Variadores de Frecuencia",
      "Motores AC"
    ]
  },
  {
    "nombre": "Interruptor Selector de 3 Posiciones",
    "categoria": "Rel\u00e9s",
    "imagen": "https://bytefix.com/img/producto_37.jpg",
    "codigo": "abc16b136",
    "precio": 373.47,
    "marca": "Phoenix Contact",
    "compatibilidad": [
      "HMI",
      "Controladores PID"
    ]
  },
  {
    "nombre": "C\u00e1mara IP Industrial",
    "categoria": "Cables",
    "imagen": "https://bytefix.com/img/producto_38.jpg",
    "codigo": "abc16b137",
    "precio": 322.39,
    "marca": "ByteMotion",
    "compatibilidad": [
      "Variadores de Frecuencia",
      "Motores AC"
    ]
  },
  {
    "nombre": "Regulador de Voltaje LM317",
    "categoria": "M\u00f3dulos",
    "imagen": "https://bytefix.com/img/producto_39.jpg",
    "codigo": "abc16b138",
    "precio": 57.07,
    "marca": "ByteMotion",
    "compatibilidad": [
      "Variadores de Frecuencia",
      "Motores AC"
    ]
  },
  {
    "nombre": "Tira LED Industrial 24V",
    "categoria": "Actuadores",
    "imagen": "https://bytefix.com/img/producto_40.jpg",
    "codigo": "abc16b139",
    "precio": 288.34,
    "marca": "ABB",
    "compatibilidad": [
      "CNC",
      "Impresoras 3D"
    ]
  },
  {
    "nombre": "Sensor de Gas MQ-2",
    "categoria": "Contactores",
    "imagen": "https://bytefix.com/img/producto_41.jpg",
    "codigo": "abc16b140",
    "precio": 398.58,
    "marca": "Bosch",
    "compatibilidad": [
      "SCADA",
      "Modbus TCP/IP"
    ]
  },
  {
    "nombre": "Tarjeta Arduino Mega",
    "categoria": "Protecci\u00f3n el\u00e9ctrica",
    "imagen": "https://bytefix.com/img/producto_42.jpg",
    "codigo": "abc16b141",
    "precio": 589.2,
    "marca": "Bosch",
    "compatibilidad": [
      "RS485",
      "UART"
    ]
  },
  {
    "nombre": "Raspberry Pi 4",
    "categoria": "Resistencias",
    "imagen": "https://bytefix.com/img/producto_43.jpg",
    "codigo": "abc16b142",
    "precio": 395.31,
    "marca": "WAGO",
    "compatibilidad": [
      "RS485",
      "UART"
    ]
  },
  {
    "nombre": "Panel Solar 12V 50W",
    "categoria": "Acopladores",
    "imagen": "https://bytefix.com/img/producto_44.jpg",
    "codigo": "abc16b143",
    "precio": 341.49,
    "marca": "LG Industrial",
    "compatibilidad": [
      "HMI",
      "Controladores PID"
    ]
  },
  {
    "nombre": "Bater\u00eda de Litio 12V 20Ah",
    "categoria": "Ventilaci\u00f3n",
    "imagen": "https://bytefix.com/img/producto_45.jpg",
    "codigo": "abc16b144",
    "precio": 150.13,
    "marca": "Siemens",
    "compatibilidad": [
      "CNC",
      "Impresoras 3D"
    ]
  },
  {
    "nombre": "Medidor de Consumo El\u00e9ctrico",
    "categoria": "CNC",
    "imagen": "https://bytefix.com/img/producto_46.jpg",
    "codigo": "abc16b145",
    "precio": 570.19,
    "marca": "ABB",
    "compatibilidad": [
      "WiFi",
      "Bluetooth"
    ]
  },
  {
    "nombre": "Controlador PID",
    "categoria": "Interruptores",
    "imagen": "https://bytefix.com/img/producto_47.jpg",
    "codigo": "abc16b146",
    "precio": 391.14,
    "marca": "Mean Well",
    "compatibilidad": [
      "RS485",
      "UART"
    ]
  },
  {
    "nombre": "Sensor de Temperatura PT100",
    "categoria": "Encoders",
    "imagen": "https://bytefix.com/img/producto_48.jpg",
    "codigo": "abc16b147",
    "precio": 199.26,
    "marca": "Honeywell",
    "compatibilidad": [
      "24V DC",
      "12V DC"
    ]
  },
  {
    "nombre": "M\u00f3dulo GSM/GPRS SIM800L",
    "categoria": "Filtros",
    "imagen": "https://bytefix.com/img/producto_49.jpg",
    "codigo": "abc16b148",
    "precio": 124.67,
    "marca": "ABB",
    "compatibilidad": [
      "24V DC",
      "12V DC"
    ]
  },
  {
    "nombre": "Controlador de Carga Solar MPPT",
    "categoria": "Cajas",
    "imagen": "https://bytefix.com/img/producto_50.jpg",
    "codigo": "abc16b149",
    "precio": 595.93,
    "marca": "Honeywell",
    "compatibilidad": [
      "PLC Siemens",
      "Aut\u00f3matas Allen-Bradley"
    ]
  }
];
    productosFiltrados = [...productos];
    renderProductos();
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
                <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
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
    const filtroPrecioMax = parseFloat(document.getElementById('filtro-precio-max').value);

    productosFiltrados = []; // Limpiar antes de agregar

    for (let i = 0; i < productos.length; i++) {
        const p = productos[i];
        const coincideNombre = filtroNombre === '' || p.nombre.toLowerCase().includes(filtroNombre);
        const coincideCategoria = filtroCategoria === '' || p.categoria.toLowerCase().includes(filtroCategoria);
        const coincidePrecio = isNaN(filtroPrecioMax) || p.precio <= filtroPrecioMax;

        if (coincideNombre && coincideCategoria && coincidePrecio) {
            productosFiltrados.push(p);
        }
    }

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
