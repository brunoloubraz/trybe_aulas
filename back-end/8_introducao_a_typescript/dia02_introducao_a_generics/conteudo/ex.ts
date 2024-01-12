type Product = {
  barcode: string,
  price: number,
};

// function getProduct() {
//   const product = {} as Product;
//   product.barcode = '123c456b789a'; // Error: Property 'barcode' does not exist on type '{}'.
//   return product;
// }

function getProduct(): Product {
  const product: Product = {
    barcode: '123c456b789a', // Error: Property 'barcode' does not exist on type '{}'.
    price: 20,
  } ;
  return product;
}

console.log(getProduct());