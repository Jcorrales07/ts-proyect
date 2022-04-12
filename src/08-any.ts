(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola'
  //Asi se puede castear una variable a un tipo especifico
  const rta = (myDynamicVar as string)
  console.log(rta)

  myDynamicVar = 1212;
  const numero = (<number>myDynamicVar).toFixed()
  console.log();

})()
