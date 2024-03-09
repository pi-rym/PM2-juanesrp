const CarritoCompra = require("../index");

describe("Pruebas a la clase CarritoCompra", () => {
  let carritoCompra;

  beforeEach(() => {
    carritoCompra = new CarritoCompra();
  });

  it("La clase CarritoCompra este definida", () => {
    expect(typeof CarritoCompra.prototype.constructor).toBe("function");
  });

  it("Debe tener un metodo llamado agregarProducto", () => {
    expect(typeof carritoCompra.agregarProducto).toBe("function");
  });
  it("Debe tener un metodo llamado calcularTotal", () => {
    expect(typeof carritoCompra.calcularTotal).toBe("function");
  });
  it("Debe tener un metodo llamado aplicarDescuento", () => {
    expect(typeof carritoCompra.aplicarDescuento).toBe("function");
  });

  it("El metodo agregarProducto debe agregar el producto a la lista", () => {
    const Producto = { name: "ProductoA", price: 10, quantity: 3 };

    carritoCompra.agregarProducto(Producto);

    expect(carritoCompra.carrito).toEqual([Producto]);
  });

  it("El metodo calcularTotal debe calcular el total con un producto", () => {
    const Producto = { name: "ProductoA", price: 10, quantity: 3 };

    carritoCompra.agregarProducto(Producto);

    expect(carritoCompra.calcularTotal()).toEqual(30);
  });

  it("El metodo calcularTotal debe calcular el total con varios productos", () => {
    const ProductoA = { name: "ProductoA", price: 10, quantity: 3 };
    const ProductoB = { name: "ProductoB", price: 30, quantity: 5 };
    const ProductoC = { name: "ProductoC", price: 5, quantity: 10 };

    carritoCompra.agregarProducto(ProductoA);
    carritoCompra.agregarProducto(ProductoB);
    carritoCompra.agregarProducto(ProductoC);

    expect(carritoCompra.calcularTotal()).toEqual(230);
  });

  it("El metodo calcularTotal debe arrojar error si la lista esta vacia", () => {
    expect(() => carritoCompra.calcularTotal()).toThrowError(
      "Factura Inválida"
    );
  });

  it("El metodo aplicarDescuento debe aplicar el descuento al total de la compra", () => {
    const ProductoA = { name: "ProductoA", price: 10, quantity: 3 };
    const ProductoB = { name: "ProductoB", price: 30, quantity: 5 };
    const ProductoC = { name: "ProductoC", price: 5, quantity: 10 };

    carritoCompra.agregarProducto(ProductoA);
    carritoCompra.agregarProducto(ProductoB);
    carritoCompra.agregarProducto(ProductoC);

    expect(carritoCompra.aplicarDescuento(10)).toEqual(207);
    expect(carritoCompra.aplicarDescuento(0)).toEqual(230);
    expect(carritoCompra.aplicarDescuento(100)).toEqual(0);
  });

  it("El metodo aplicarDescuento debe arrojar un error si el porcentaje de descuento es menor a 0 o mayor a 100", () => {
    const ProductoA = { name: "ProductoA", price: 10, quantity: 3 };
    const ProductoB = { name: "ProductoB", price: 30, quantity: 5 };
    const ProductoC = { name: "ProductoC", price: 5, quantity: 10 };

    carritoCompra.agregarProducto(ProductoA);
    carritoCompra.agregarProducto(ProductoB);
    carritoCompra.agregarProducto(ProductoC);

    expect(() => carritoCompra.aplicarDescuento(-10)).toThrowError(
      "Porcentaje Inválido"
    );
    expect(() => carritoCompra.aplicarDescuento(110)).toThrowError(
      "Porcentaje Inválido"
    );
  });
});
