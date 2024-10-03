const imcCategories = [
    { min: 0, max: 18.5, status: "Bajo peso", diet: "Dieta rica en calorías y proteínas para aumentar de peso." },
    { min: 18.5, max: 24.9, status: "Peso normal", diet: "Mantén una dieta equilibrada para mantener tu peso." },
    { min: 25, max: 29.9, status: "Sobrepeso", diet: "Dieta baja en calorías y grasas, con aumento de actividad física." },
    { min: 30, max: 34.9, status: "Obesidad grado I", diet: "Dieta estricta baja en calorías y supervisada por un especialista." },
    // Puedes agregar más categorías si lo deseas
];

/**
 * Función para obtener la categoría del IMC
 * @param {number} imc - El valor del IMC calculado
 * @returns {object} - Objeto con el estado y la dieta recomendada
 */
function getIMCCategory(imc) {
    return imcCategories.find(category => imc >= category.min && imc < category.max) || imcCategories[imcCategories.length -1];
}

export { getIMCCategory };