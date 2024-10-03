import { getIMCCategory } from '../Modelo/IMC_modelo.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('imcForm');
    const resultDiv = document.getElementById('result');
    const imcValueSpan = document.getElementById('imcValue');
    const imcStatusSpan = document.getElementById('imcStatus');
    const imcDietSpan = document.getElementById('imcDiet');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar el envío del formulario

        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const genero = document.getElementById('genero').value;

        if (peso > 0 && altura > 0 && genero !== "") {
            const imc = peso / (altura * altura);
            const imcRounded = imc.toFixed(2);
            const category = getIMCCategory(imc);

            // Actualizar la vista con los resultados
            imcValueSpan.textContent = imcRounded;
            imcStatusSpan.textContent = `${category.status} (${genero})`;
            imcDietSpan.textContent = category.diet;

            resultDiv.style.display = 'block';
        } else {
            alert('Por favor, ingresa todos los valores válidos para peso, altura y género.');
        }
    });
});
