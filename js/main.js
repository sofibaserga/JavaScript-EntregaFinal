let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function agregarAlCarrito(producto) {
    carrito.push(producto);
    guardarLocalStorage()
    console.log(carrito);
}

function crearProductoCard(producto) {
    let ficha = document.createElement("div");
    ficha.className = "cardsProductos adopta__gatitos__cards col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center mb-5";
    ficha.innerHTML = `
        <img src="${producto.imagen}" class="card-img-top adopta__gatitos__cards__img rounded-especifico w-100 mb-3" style="height: 100%">
        <h2 class="adopta__gatitos__cards__h2 fs-4 text-center mb-1">${producto.categoria} ${producto.nombre} ${producto.color} ${producto.medidas}</h2>
        <p class="adopta__gatitos__cards__p fs-5 text-center mb-4">$${producto.precio}</p>
        <button class="btn btn-default botonRosa rellenoRosa fs-5 text-center rounded-pill px-4 py-2 btnAgregarCarrito">Agregar al carrito</button>
    `;

    ficha.querySelector('.btnAgregarCarrito').addEventListener('click', () => {
        agregarAlCarrito(producto);
    });

    return ficha;
}

function dibujarCard() {
    const productoTienda = document.getElementById("productoTienda");
    producto.forEach((producto) => {
        const productCard = crearProductoCard(producto);
        productoTienda.appendChild(productCard);
    });
}

dibujarCard();


const verCarrito = document.getElementById('verCarrito')
const popUp = document.getElementById('popUpHeader')

verCarrito.addEventListener('click', () => {
    popUp.innerHTML = ``

    popUp.style.display = "inline-block";
    const popUpHeader = document.createElement("div");
    popUpHeader.className = "pop-up-header";
    popUpHeader.innerHTML = `
        <h2 class="fs-4 text-center mb-1">Carrito de compras</h2>
    `;
    popUp.append(popUpHeader)

    const popUpCerrar = document.createElement("h2");
    popUpCerrar.className = "pop-up-cerrar";
    popUpCerrar.innerHTML = `x`;

    popUpCerrar.addEventListener('click', () => {
        popUp.style.display = "none";
    })

    popUpHeader.append(popUpCerrar)

    carrito.forEach((producto) => {
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.className = "contenido-carrito";
        contenidoCarrito.innerHTML = `
            <p>${producto.categoria} ${producto.nombre} ${producto.color} ${producto.medidas}</p>
            <p>$${producto.precio}</p>
        `;
        popUp.append(contenidoCarrito)
    })

    const total = carrito.reduce ((acumulador,producto) => acumulador + producto.precio, 0);

    const popUpTotal = document.createElement("div");
    popUpTotal.className = "popUpTotal"
    popUpTotal.innerHTML = `El total es $${total}
    `;
    popUp.append(popUpTotal)


})

const guardarLocalStorage = () => {
    localStorage.setItem('carrito',JSON.stringify(carrito)); 
}

JSON.parse(localStorage.getItem('carrito'));

