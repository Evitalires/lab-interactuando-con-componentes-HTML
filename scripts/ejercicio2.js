

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = Math.max(cantidad, 0);
        this.total = this.precio*cantidad
    }
    aumentarValor(incremento) {
        console.log(incremento);
        this.precio = this.precio*incremento
    }
}

class Productos {
    constructor(productos) {
        this.productos = productos
    }
    mostrar() {
        const contenedorProductos = document.getElementById("contenedorProductos");
        contenedorProductos.innerHTML = "";

        this.productos.forEach((producto) => {
            const article = document.createElement("article");
            article.classList.add("producto");

            article.innerHTML = `
                <button class="agregarCarrito">Agregar 🛒</button>
                <span>${producto.nombre}</span>
                <span>$${producto.precio}</span>
            `;

            // 🔹 Añadir el evento de clic al botón
            const boton = article.querySelector(".agregarCarrito");
            boton.addEventListener("click", () => this.alCarrito(producto));

            contenedorProductos.appendChild(article);
        });
    }
    alCarrito(producto) {
        console.log("Al carrito");
        console.log(producto);
    }
}
class ProductosCarrito {
  constructor(productos) {
    this.productos = productos;
  }

  mostrar() {
    const contenedor = document.getElementById("contenedorProductosCarrito");
    contenedor.innerHTML = "";

    if (!Array.isArray(this.productos)) {
      console.error("❌ this.productos no es un array:", this.productos);
      return;
    }

    this.productos.forEach((producto) => {
      const article = document.createElement("article");
      article.classList.add("productoCarrito");

      article.innerHTML = `
        <button class="eliminar">X</button>
        <span>${producto.nombre}</span>
        <span>$ ${producto.precio}</span>
        <span>${producto.cantidad}</span>
        <span>$ ${producto.total}</span>
      `;

      const botonEliminar = article.querySelector(".eliminar");
      botonEliminar.addEventListener("click", () => this.eliminarProducto(producto.nombre));

      contenedor.appendChild(article);
    });

    // 👇 Actualiza el resumen del carrito
    this.mostrarTotales();
  }

  eliminarProducto(nombre) {
    this.productos = this.productos.filter(p => p.nombre !== nombre);
    this.mostrar();
  }

  mostrarTotales() {
        const totalElement = document.getElementById("totalCarritoProductos");
        console.log(totalElement);
        
        if (!totalElement) {
            console.warn("❗ No se encontró el elemento #totalCarritoProductos");
            return;
        }

        let total = 0;
        let cantidadTotal = 0;

        this.productos.forEach(p => {
            total += p.precio * p.cantidad;
            cantidadTotal += p.cantidad;
        });

        totalElement.innerHTML = `
            <strong>Total productos:</strong> ${cantidadTotal} <br>
            <strong>Total a pagar:</strong> $${total}
        `;
    }
}

const productos = new Productos([
    new Producto("Coca-Cola", 3000, 1),
    new Producto("Bolsa Papas 1kg", 2000, 2),
    new Producto("Telefono", 2000, 10),
])

productos.mostrar();

const productosCarrito = new ProductosCarrito(productos.productos)
productosCarrito.mostrar();