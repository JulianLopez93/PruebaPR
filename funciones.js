function multiplicarNumeros(req, res) {
  const { numero1, numero2 } = req.query; // obtenemos los números de la query string
  
  // comprobamos si los parámetros son números
  if (isNaN(numero1) || isNaN(numero2)) {
    res.status(400).send('Los parámetros deben ser números.');
  } else {
    const resultado = parseFloat(numero1) * parseFloat(numero2); // multiplicamos los números
    res.send(`El resultado de la multiplicación es: ${resultado}`);
  }
}

function sumarNumeros(req, res) {
  const { numero1, numero2 } = req.query; // obtenemos los números de la query string
  
  // comprobamos si los parámetros son números
  if (isNaN(numero1) || isNaN(numero2)) {
    res.status(400).send('Los parámetros deben ser números.');
  } else {
    const resultado = parseFloat(numero1) + parseFloat(numero2); // multiplicamos los números
    res.send(`El resultado de la multiplicación es: ${resultado}`);
  }
}

function restaNumeros(req, res) {
  const { numero1, numero2 } = req.query; // obtenemos los números de la query string
  
  // comprobamos si los parámetros son números
  if (isNaN(numero1) || isNaN(numero2)) {
    res.status(400).send('Los parámetros deben ser números.');
  } else {
    const resultado = parseFloat(numero1) - parseFloat(numero2); // multiplicamos los números
    res.send(`El resultado de la resta es: ${resultado}`);
  }
}
