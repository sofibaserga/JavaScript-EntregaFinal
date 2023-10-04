
const carrito = [];


localStorage.setItem('productos', JSON.stringify(producto))
localStorage.setItem('carrito',JSON.stringify(carrito)); 


function traerProductosStorage() {
    producto = JSON.parse(localStorage.getItem('producto')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];

}


function dibujarCard() {
    const bodyCard = document.querySelector('#productoTienda');
    bodyCard.innerHTML = ``;
    producto.forEach((producto) => {                       ///aca es la funcion para que escriba los productos. En el for each tambien se puede pedir el index
        bodyCard.innerHTML = bodyCard.innerHTML + `
        <div id="productoTienda" class="adopta__gatitos__cards col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center mb-5" data-aos="fade-up">
                <img class="adopta__gatitos__cards__img rounded-especifico w-100 mb-3" src="${producto.imagen}" loading="lazy">
                <h2 class="adopta__gatitos__cards__h2 fs-4 text-center mb-1">${producto.categoria} ${producto.nombre} ${producto.color} ${producto.medidas}</h2>
                <p class="adopta__gatitos__cards__p fs-5 text-center mb-4">$${producto.precio}</p>
                <div>
                    <button id="btnAgregar" class="btn btn-default botonRosa rellenoRosa fs-5 text-center rounded-pill px-4 py-2">Agregar al carrito</button>
                </div>
        </div>
    `
    ;

    });
}

dibujarCard();



const botonAgregar = document.querySelector('#btnAgregar');

botonAgregar.addEventListener('click', () =>{
    carrito.push({
        categoria : producto.categoria,
        nombre : producto.nombre, 
        color : producto.color, 
        medidas : producto.medidas, 
        precio : producto.precio
    })
    console.log(carrito)
})