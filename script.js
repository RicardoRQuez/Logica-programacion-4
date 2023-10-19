const formFibo = document.getElementById("formFibo");
formFibo.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputNumber = document.getElementById("inputNumber").value;

  if (!isNaN(inputNumber)) {
    const resultado = calcularFibonacci(inputNumber);
    const fibonacci = document.getElementById("fibonacci");
    fibonacci.innerText = resultado;
  } else {
    alert("Debe ingresar un numero valido, intente nuevamente.");
  }
});

function calcularFibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }

  let series = [0, 1];

  while (series.length < n) {
    let nextFib = series[series.length - 1] + series[series.length - 2];
    series.push(nextFib);
  }

  return series;
}
