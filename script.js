const proporcoes = {
    oleo: 4000,
    soda: 1000,
    agua: 2000,
    sabaoEmPo: 90,
    essencia: 5
};

function calcular(ingrediente) {
    const oleoEl = document.getElementById('oleo');
    const sodaEl = document.getElementById('soda');
    const aguaEl = document.getElementById('agua');
    const sabaoEmPoEl = document.getElementById('sabaoEmPo');
    const essenciaEl = document.getElementById('essencia');

    let valor = parseFloat(document.getElementById(ingrediente).value);
    if (isNaN(valor)) return;

    let fator;

    switch (ingrediente) {
      case 'oleo':
        fator = valor / proporcoes.oleo;
        sodaEl.value = (proporcoes.soda * fator).toFixed(1);
        aguaEl.value = (proporcoes.agua * fator).toFixed(1);
        sabaoEmPoEl.value = (proporcoes.sabaoEmPo * fator).toFixed(1);
        essenciaEl.value = (proporcoes.essencia * fator).toFixed(1);
        break;
      case 'soda':
        fator = valor / proporcoes.soda;
        oleoEl.value = (proporcoes.oleo * fator).toFixed(1);
        aguaEl.value = (proporcoes.agua * fator).toFixed(1);
        sabaoEmPoEl.value = (proporcoes.sabaoEmPo * fator).toFixed(1);
        essenciaEl.value = (proporcoes.essencia * fator).toFixed(1);
        break;
      case 'agua':
        fator = valor / proporcoes.agua;
        oleoEl.value = (proporcoes.oleo * fator).toFixed(1);
        sodaEl.value = (proporcoes.soda * fator).toFixed(1);
        sabaoEmPoEl.value = (proporcoes.sabaoEmPo * fator).toFixed(1);
        essenciaEl.value = (proporcoes.essencia * fator).toFixed(1);
        break;
      case 'sabaoEmPo':
        fator = valor / proporcoes.sabaoEmPo;
        oleoEl.value = (proporcoes.oleo * fator).toFixed(1);
        sodaEl.value = (proporcoes.soda * fator).toFixed(1);
        essenciaEl.value = (proporcoes.essencia * fator).toFixed(1);
        aguaEl.value = (proporcoes.agua * fator).toFixed(1);
        break;
      case 'essencia':
        fator = valor / proporcoes.sabaoEmPo;
        oleoEl.value = (proporcoes.oleo * fator).toFixed(1);
        sodaEl.value = (proporcoes.soda * fator).toFixed(1);
        aguaEl.value = (proporcoes.agua * fator).toFixed(1);
        sabaoEmPoEl.value = (proporcoes.sabaoEmPo * fator).toFixed(1);
        break;
    }
}