(() => {
  let productTitle = 'My amazing product'
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;

  productTitle = "Lenovo Legion 5 pro";

  const productDescription = "Es una super computadora y la tengo yo BD"
  let isNew: boolean = false;
  let productPrice = 150;

  //con los back ticks podes hacer varias lineas
  //y embeber variables con ${}
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    Is New?: ${isNew}
    price: ${productPrice}
  `;
  console.log(summary)
})();
