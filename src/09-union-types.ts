//Mira con los union types vos podes hacer que una variable
//Pueda soportar los tipos de datos que vos ocupes

// digamos que el userId puede ser un numero o un string
// no sabes que te puede salir, entonces pones ambas
// para poder trabajar, en vez de usar any
// el pipe | es para poner otro tipo

(() => {


  let userId: string | number ;
  userId = 1233;
  userId = "1233";

  function greeting(myText: string | number) {


    //Mira que typescript cuando nosotros ponemos un if
    // para dar los casos en dado caso que la variable sea de un tipo
    // o de otro, le da el tipado dinamicamente


    if(typeof myText === 'string') {


      //Como le decimos con el if de que si es una tipo string entonces
      // nos ayuda con los metodos de string
      //myText.length //.replace(), .split(), .toLowerCase(), etc...

      console.log(`String ${myText.toLowerCase()}`)


    } else {


      // si no entonces con los de numeros
      myText.toFixed() //.toPrecision()
      console.log(`Number ${myText.toFixed(1)}`)

    }
  }

  greeting('Joe');
  greeting(123.123123);


})()
