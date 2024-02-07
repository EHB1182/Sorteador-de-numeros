function adivinharNumero() {
    const numeroSecreto = Math.floor(Math.random() * 15) + 1;
    let tentativa = parseInt(prompt("Adivinhe o número entre 1 e 15:"));
  
    while (tentativa !== numeroSecreto) {
      const diferenca = Math.abs(tentativa - numeroSecreto);
  
      if (diferenca === 1) {
        alert("Ta quente!");
      } else if (diferenca > 2) {
        alert("Muito frio!");
      }
  
      tentativa = parseInt(prompt("Tente novamente:"));
    }
  
    alert("QUEIMOU! PARABENS VOCÊ ACHOU O NUMERO!!");
  }
  
  adivinharNumero();