/***
 * Convertir el listado 'TOP 5 de empresas Premiums'
 * a un array de objetos del tipo:
 * [
 *  {
 businessName: 'John ...',
 *    businessType: <BUSINESS_TYPE>,
 *    position: <INDEX_ARRAY>
 *  }
 * ]
 * Utilizar la función Array.prototype.map
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
 */

const businessType = "PREMIUM";
const bestBusinesses = [
  "John el pintor",
  "John el arquitecto",
  "John el jardinero",
  "John el electricista",
  "John el carpintero"
];

function getTopFiveBusinesses(type) {
	return bestBusinesses.map((x, y) => {
        	return {
                	businessName: x,
                	businessType: type,
                	position: y + 1
        	};
	});
};

const ages = [15, 10, 15, 18, 62, 45, 26, 2, 62, 21, 62, 34];

/**
 * Filtrar el array 'ages' obteniendo un nuevo array
 * con todas aquellas edades mayor a 18.
 * Utilizar la function Array.prototype.filter
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
 */
const getAllAdults = function (ages) {
  return [];
};

/**
 * Encontrar cuál es el error a la hora de modificar el texto
 * del button
 * Siempre tiene que establecer 'Is the same node'
 */
function changeButtonTextOnClick($button) {
  $button.addEventListener("click", evt => {
    const isSameElement = evt.target.nodeName === this.nodeName;
    let text = "";
    if (isSameElement) {
      text = "Is the same node";
    } else {
      text = "Is not the same node";
    }

    this.innerText = text;
  });
}

/**
 * Modificar la función estableciendo parametrós por defecto
 * y realizar los cambios necesarios para convertirlo en arrow functions
 * @param {*} total
 * @param {*} tax
 */
function calculateTax(total, tax) {
  if (tax === undefined) {
    throw new Error("Tax is not defined");
  }

  return total + total * tax;
}

// UNCOMMENT FOR SERVER SIDE TEST
module.exports = {
  getTopFiveBusinesses: getTopFiveBusinesses,
  getAllAdults: getAllAdults,
  changeButtonTextOnClick: changeButtonTextOnClick,
  bestBusinesses: bestBusinesses,
  businessType: businessType,
  ages: ages,
  calculateTax: calculateTax,
};
