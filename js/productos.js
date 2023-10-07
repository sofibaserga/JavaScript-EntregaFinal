class Productos {
    index;
    imagen;
    categoria;
    nombre;
    color;
    medidas;
    precio;

    constructor(index, imagen, categoria, nombre, color, medidas, precio) {
        this.index = index;
        this.imagen = imagen;
        this.categoria = categoria;
        this.nombre = nombre;
        this.color = color;
        this.medidas = medidas;
        this.precio = precio;
    }
}

const producto = [];

    producto.push(new Productos('1', '../assets/img/tienda/petra_gris.jpg', 'Manta', 'Petra', 'Gris', '100x120 cm', 8500));
    producto.push(new Productos('2', '../assets/img/tienda/petra_verde.jpg', 'Manta', 'Petra', 'Verde', '100x120 cm', 8500));
    producto.push(new Productos('3', '../assets/img/tienda/petra_natural.jpg', 'Manta', 'Petra', 'Natural', '100x120 cm', 8500));
    producto.push(new Productos('4', '../assets/img/tienda/petra_rosa_natural.jpg', 'Manta', 'Petra', 'Rosa', '65x85 cm', 7500));
    producto.push(new Productos('5', '../assets/img/tienda/petra_verde_natural.jpg', 'Manta', 'Petra', 'Verde', '65x85 cm', 7500));
    producto.push(new Productos('6', '../assets/img/tienda/libreta-sanitaria.jpg', 'Libreta Sanitaria', '', '', '14,5x21 cm', 2000));
    producto.push(new Productos('7', '../assets/img/tienda/rascador-godini.jpg', 'Rascador', 'Godini', '', '', 15000));
    producto.push(new Productos('8', '../assets/img/tienda/rascador-kika.jpg', 'Rascador', 'Kika', '', '', 28000));
    producto.push(new Productos('9', '../assets/img/tienda/rascador-mintie.jpg', 'Rascador', 'Mintie', '', '', 18000));
    producto.push(new Productos('10', '../assets/img/tienda/rascador-tomatito.jpg', 'Rascador', 'Tomatito', '', '', 20000));
    producto.push(new Productos('11', '../assets/img/tienda/rascador-tomipuff.jpg', 'Rascador', 'Tomipuff', '', '', 25000));