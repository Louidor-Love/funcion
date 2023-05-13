function Mostrarimpareshasta(numero) {
    const impares = [];
    for (let i = 1; i <= numero; i++) {
      if (i % 2 !== 0) {
        impares.push(i);
      }
    }
    return impares;
  }
  console.log(Mostrarimpareshasta(40)); // Output: [1, 3, 5, 7, 9]

