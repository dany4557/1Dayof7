let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';
 
//Utilizamos el la metódo parseInt para obtener el valor entero de la variable StringUn
if ( numeroUn === parseInt(stringUn)) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

//Utilizamos la metódo toString() que lo que busca es cambiar el valor primitivo que tenemos por su formta cadena de texto
if (numeroTreinta.toString() === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo, aunque hemos tratado el Int con tu Método');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

//Utilizamos la función de igual y le damos como parametro la variable numeroDiez , a lo que la función nos retornará el valor en string.
if (String(numeroDiez) === stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes, aunque hemos tratado el Int con una función')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}