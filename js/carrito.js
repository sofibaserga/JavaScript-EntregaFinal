const verCarrito = document.getElementById('verCarrito');
const popUp = document.getElementById('popUpHeader');
const numeroCarrito = document.getElementById('numeroCarrito');



const llenarCarrito = () => {

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
                    <span class="restar"> - </span>
                    <p>${producto.cantidad}</p>
                    <span class="sumar"> + </span>
                    <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                    <span class="eliminar-producto"> x </span>
            `;
        popUp.append(contenidoCarrito)


        let restar = contenidoCarrito.querySelector('.restar')
        restar.addEventListener('click', () => {
            if (producto.cantidad !== 1) {
                producto.cantidad--;
            }
            guardarLocalStorage();
            llenarCarrito();
        })

        let sumar = contenidoCarrito.querySelector('.sumar')
        sumar.addEventListener('click', () => {
            producto.cantidad++;
            guardarLocalStorage();
            llenarCarrito();
        })


        let eliminarProducto = contenidoCarrito.querySelector('.eliminar-producto')
        eliminarProducto.addEventListener('click', () => {
            eliminarItem(producto.index);

            Toastify({
                text: "Se ha eliminado el producto correctamente",
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: false,
                style: {
                    background: "#DA8E9E",
                },
            }).showToast();
        })


    })


    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);


    const popUpTotal = document.createElement("div");
    popUpTotal.className = "popUpTotal"
    popUpTotal.innerHTML = `El total es $${total}
        `;
    popUp.append(popUpTotal)

    
    const botonesFinales = document.createElement("div");
    botonesFinales.className = "botonesFinales"
    popUp.append(botonesFinales)


    const limpiarCarrito = document.createElement("p");
    limpiarCarrito.className = "limpiar-carrito";
    limpiarCarrito.innerHTML = `Limpiar carrito`;
    botonesFinales.append(limpiarCarrito)

    limpiarCarrito.addEventListener('click', () => {
        carrito = [];
        guardarLocalStorage();
        contadorCarrito();
        llenarCarrito();
    })


    const botonFinalizar = document.createElement("div");
    botonFinalizar.className = "botonFinalizar botonRosa rellenoRosa fs-5 text-center rounded-pill px-4 py-2"
    botonFinalizar.innerHTML = `Finalizar pedido
        `;
    botonesFinales.append(botonFinalizar)


    botonFinalizar.addEventListener(
        "click", () => {
            Swal.fire({
                title: "¿Desea confirmar la compra? El total a pagar es $" + total,
                text: "Con su compra colabora con el cuidado de los gatitos en adopción",
                showCancelButton: true,
                cancelButtonText: "Seguir comprando",
                confirmButtonText: "Confirmar compra",
                confirmButtonColor: "#ECBEC9",
                width: 600,
                padding: "20px",
            }).then((result) => {
                if (result.isConfirmed) {
                    const procesandoCompra = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            Swal.fire({
                                title: "¡Tu compra ha sido realizada con éxito!",
                                icon: "success",
                                iconColor: "#ECBEC9",
                                confirmButtonColor: "#ECBEC9",
                            })
                            
                        }, 1500)
                        Swal.fire({
                            title: "Procesando compra, espere unos segundos...",
                            showConfirmButton: false,
                        })
                    }).catch((error) => {
                        Swal.fire("Ups, algo salió mal")
                        console.log(error)
                    })
                }
            })
        })


    if (carrito.length === 0) {
        const carritoVacio = document.createElement("div");
        carritoVacio.className = "carrito-vacio"
        carritoVacio.innerHTML = `No tienes productos en tu carrito
                `;
        popUp.append(carritoVacio)

        botonFinalizar.style.display = "none";
        limpiarCarrito.style.display = "none";
        popUpTotal.style.display = "none";


    }

}


verCarrito.addEventListener('click', llenarCarrito); 



const eliminarItem = (index) => {
    const encontrarIndex = carrito.find((producto) => producto.index === index)

    carrito = carrito.filter((carritoIndex) => {
        return carritoIndex !== encontrarIndex;
    })

    contadorCarrito();
    guardarLocalStorage();
    llenarCarrito();
}



const contadorCarrito = () => {
    numeroCarrito.style.display = 'flex';

    const carritoLength = carrito.length;
    localStorage.setItem('carritoLength', JSON.stringify(carritoLength))

    numeroCarrito.innerHTML = JSON.parse(localStorage.getItem('carritoLength'))
}

contadorCarrito();



