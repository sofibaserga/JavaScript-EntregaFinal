const llenarCarrito = () =>{

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

            let eliminarProducto = document.createElement("p");
            eliminarProducto.className = "eliminar-producto";
            eliminarProducto.innerHTML = `x`;
            contenidoCarrito.append(eliminarProducto);

            eliminarProducto.addEventListener('click', eliminarItem);

        })


        const total = carrito.reduce ((acumulador,producto) => acumulador + producto.precio, 0);

        const popUpTotal = document.createElement("div");
        popUpTotal.className = "popUpTotal"
        popUpTotal.innerHTML = `El total es $${total}
        `;
        popUp.append(popUpTotal)


    }


verCarrito.addEventListener('click', llenarCarrito);

const eliminarItem = () => {
    const encontrarIndex = carrito.find ((producto) => producto.index)

    carrito = carrito.filter ((carritoIndex) => {
        return carritoIndex !== encontrarIndex;
    })

    guardarLocalStorage();
    llenarCarrito();
}

