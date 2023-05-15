document.addEventListener('mouseout', function tiping(event) {
    event.target.classList.add('tiping');
});
    

Number.prototype.num = function(n) {
    //convierto el number a string
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function actualiza() {

    var ahora = new Date();
      min = ahora.getMinutes(),
      hor = ahora.getHours(),
      mes = ahora.getMonth(),
      dia = ahora.getDate(),
      año = ahora.getFullYear();

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var etiq = ["mes", "d", "a", "h", "m"],

    //toma el valor actual que voy a recorrer
    corr = [meses[mes], dia, año, hor.num(2), min.num(2)];

    //nodeValue actualiza en tiempo real

    for (var i = 0; i < etiq.length; i++)
      document.getElementById(etiq[i]).firstChild.nodeValue = corr[i];

  }
  
  function iniciar() {
    actualiza();
    window.setInterval("actualiza()", 1);
  }