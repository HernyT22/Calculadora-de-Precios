let content = document.getElementById('container');
document.getElementById('btn-calcular').addEventListener('click', () => {
   

function applyTaxes(costo, impuestos){
    return costo * (1 + (impuestos / 100));
}

function priceProfit(costo, margen){
    return (costo / (100 - margen) * 100);
}

  let COST = parseFloat(document.getElementById('costo').value);
  const PORCENT = parseFloat(document.getElementById('porcentaje').value);
  const ADIT = parseFloat(document.getElementById('adicionales').value) || 0;
  const TAX = parseFloat(document.getElementById('impuestos').value) || 0;

COST = applyTaxes(COST, TAX);

let salePrice = priceProfit(COST, PORCENT) + ADIT;

 console.log(salePrice);


 let resultBox = document.getElementById('cont-salePrice');

 if(!resultBox){
    resultBox = document.createElement('div');
    resultBox.id = 'cont-salePrice';
    content.appendChild(resultBox);
 }
 resultBox.innerHTML = `<h1 class="title-PV">Precio de Venta</h1>
                        <h2>$${salePrice.toFixed(2)}</h2>`;
});
