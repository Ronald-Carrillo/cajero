var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var caja = [];
var entregado = [];
var papeles = 0;
var div = 0;

var resultado = document.getElementById("resultado");
var saldo = document.getElementById("saldo");

var imagenes = [];
imagenes["10"] = "billetes10.png";
imagenes["20"] = "billete20.jpg";
imagenes["50"] = "billete50.png";

function valorRestante() {
  for (var b of caja) {
    var total = 0;
    total = total + b.valor * b.cantidad;
  }
  return total;
}

saldo.innerHTML = "saldo disponible " + "560";

class Billetes {
  constructor(v, c, b) {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.billete = b;
    this.imagen.src = imagenes[this.billete];
  }
  mostrar() {
    document.body.appendChild(this.imagen);
  }
}

caja.push(new Billetes(50, 4, "50"));
caja.push(new Billetes(20, 4, "20"));
caja.push(new Billetes(10, 4, "10"));

function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);

      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }

      entregado.push(new Billetes(bi.valor, papeles, bi.billete));
      dinero = dinero - bi.valor * papeles;
    }
  }

  if (dinero > 0) {
    resultado.innerHTML = "soy un cajero pobre";
  } else {
    for (var e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML =
          resultado.innerHTML +
          e.cantidad +
          " billetes de $" +
          e.valor +
          "<br />";
        e.mostrar();
      }
    }
  }
}
