let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const traerProductos = async () => {
    const response = await fetch("../js/productos.json")
    const data = await response.json();

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
        data.forEach((producto) => {
            const productCard = crearProductoCard(producto);
            productoTienda.appendChild(productCard);
        });
    }
    
    dibujarCard();

    function agregarAlCarrito(producto) {
        const repeat = carrito.some((repeatProduct) => repeatProduct.index === producto.index);
        if (repeat) {
            carrito.map((prod) => {
                if (prod.index === producto.index) {
                    prod.cantidad++;
                }
            })
        } else {
            carrito.push(producto);
            contadorCarrito();
        }
    
        guardarLocalStorage()
        llenarCarrito();
        console.log(carrito);

        Toastify({
            text: "Se ha agregado un producto al carrito",
            duration: 3000,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: false, 
            style: {
                background: "#DA8E9E",
              },
          }).showToast();
    }
}

traerProductos();


const guardarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

JSON.parse(localStorage.getItem('carrito')); 