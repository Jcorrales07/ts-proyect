(() => {
  let isEnable = true;
  // isEnable = 'aasd';
  // isEnable = 'Hola';

  isEnable = false;

  let isNew: boolean = false;

  console.log('isNew', isNew);
  isNew = true;

  console.log('isNew', isNew);

  const random = Math.random()
  console.log(random)
  isNew = random >= 0.5 ? true : false;
  console.log(
  `random: ${random}, Is greater than 0.5?:`, isNew
  )

})()
