//Bueno mira los arrays tienen la misma dinamica
//Que en Java, una vez que tiene un numero el array
//Va a ser solo de numero, NADA MAS

(() => {
  let prices = [1, 2, 3, 4,'asd', true]

  prices.push(123123)


  let products = ['asd', true]
  products.push(12312)
  products.push(false)
  products.push('ASd')

  // Bueno, tambien podes hacer un array que soporte varios
  // Tipos de datos y se declara asi (abajo)
  // o podes poner el cursor encima de este array para saber
  // que tipos soporta
  let exArray = [12, 'string', true]

  // asi se veria
  let mixed:(number | string | boolean )[] = ['holaPapi', true]
  mixed.push(12);
  mixed.push(false);
  mixed.push({});
  mixed.push([])

let number = [1,2,3,4,5,5]
number.map(item => item * 2)

})()
