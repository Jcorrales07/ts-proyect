(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice)

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  productInStock = 10
  console.log('productInStock', productInStock)

  if( productInStock > 10) {
    console.log('is greater')
  }

  let discount = parseInt('100');
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply')
  } else {
    console.log('not applied')
  }

  let hex = 0xfff;

  console.log('hex', hex);
  let bin = 0b1010;
  console.log('bin', bin);

  // Number da Referencia a una clase
  const myNumber: Number = 10;
  // number da referencia a un tipo, USAR ESTE
  const anotherNumber: number = 10;
}) ();
