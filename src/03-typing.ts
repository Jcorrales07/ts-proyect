// Esto es una funcion anonima auto ejecutada
// lo que hace esto es añadirle scope al codigo
// para que no choque en caso de que se escriba
// el mismo nombre de variable como paso en el
// archivo 03-demo3.ts

// (() => {})();


(() => {
  let myProductName = 'Product 1'
  let myProductPrice = 123

  myProductName.toLowerCase()

  myProductPrice.toFixed()

  const myProductStock = 1000
  const myProductName2 = 'Product 1'
}) ();

// EXPLICACION

//El motor de inferencia hace e ltrabajo de saber que tipo de dato una
// variable tiene, es como tipo Java pero automatico

// type: string
// let myProductName = 'Product 1'
//type: number
// let myProductPrice = 123

// ayuda a que el editor te muestre las funciones que se puede operar
// con ese tipo de dato
// myProductName.toLowerCase()

// myProductPrice.toFixed()

//type: 1000
// const myProductStock = 1000
//type: 'Producct 1'
// const myProductName2 = 'Product 1'


// El maestro recomienda dejar que el motor de
// inferencia de typescript se encargue de darle
// el tipado a las cosas

// mas adelante se va a ver en que caso
// especificos se usaria de manera explicita
