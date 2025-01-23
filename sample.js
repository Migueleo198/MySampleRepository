let sample = [];

const MAX_ITERATIONS = 3;
document.addEventListener('DOMContentLoaded', () => {


let canvas = document.querySelector('canvas');

let canvasRenderer = canvas.getContext('2d'); 

});

for(let iterator=0; iterator<MAX_ITERATIONS; iterator++){
    sample[iterator] = 'Ejemplo bucle';
}

let h1Element = [];

sample.forEach((element,iterator)=>{
    h1Element[iterator] = document.createElement('h1')
    h1Element[iterator].textContent = element;
    document.body.append(h1Element[iterator]);
});



