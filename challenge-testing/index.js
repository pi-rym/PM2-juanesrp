class CarritoCompra {
  constructor() {
    this.carrito = [];
  }

  agregarProducto(Producto) {
    this.carrito.push(Producto);
  }

  calcularTotal() {
    if (!this.carrito.length) {
      throw Error("Factura Inválida");
    }
    let total = 0;
    for (let item of this.carrito) {
      total += item.price * item.quantity;
    }

    return total;
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
      throw Error("Porcentaje Inválido");
    }

    let total = this.calcularTotal();
    let descuento = (total * porcentaje) / 100;
    return total - descuento;
  }
}

module.exports = CarritoCompra;
