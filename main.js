
let content = document.getElementById('container');
document.getElementById('btn-calcular').addEventListener('click', () => {
   
//Funciones Importantes
function applyTaxes(costo, impuestos){
    return costo * (1 + (impuestos / 100));
}

function priceProfit(costo, margen){
    return (costo / (100 - margen) * 100);
}
function roundPrice(value){
    return Math.ceil(value / 100) * 100;
};

//Constantes

  let COST = parseFloat(document.getElementById('costo').value);
  const PORCENT = parseFloat(document.getElementById('porcentaje').value);
  const ADIT = parseFloat(document.getElementById('adicionales').value) || 0;
  const TAX = parseFloat(document.getElementById('impuestos').value) || 0;

  //Aplicar impuestos
    COST = applyTaxes(COST, TAX);
  //Calcular Ganancia +  adicionales
    let salePrice = priceProfit(COST, PORCENT) + ADIT;
  //Redondear Numero por Centenas
    salePrice = roundPrice(salePrice);

 //Imprimir resultado
    let resultBox = document.getElementById('cont-salePrice');

    if(!resultBox){
        resultBox = document.createElement('div');
        resultBox.id = 'cont-salePrice';
        content.appendChild(resultBox);
    }

    resultBox.innerHTML = `<h1 class="title-PV">Precio de Venta</h1>
                            <h2>$${salePrice.toFixed(2)}</h2>`;
});

console.log('EL JS YA ESTÁ CARGADO!')
