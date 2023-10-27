
const result = document.querySelector('.result');
const button = document.querySelector('.btn');
button.addEventListener('click', calculateBMI);
function calculateBMI() {
   const weight = document.getElementById('weight');
   const height = document.getElementById('height');
   const heightPow = Math.pow(height.value, 2);
   const result1 = (weight.value / heightPow * 10000).toFixed(1);
   return result.textContent = `Индекс массы тела (ИМТ): ${result1}`;

}
