/*

3. **Template Literals:**
   Create a template literal that includes variables `product`, `price`, and `quantity`. The template should output "You purchased [quantity] units of [product] for $[totalPrice].".

*/

const productPurchased = (product, quantity, price) => {
   
   const totalPrice = quantity * price;

   return `You purchased ${quantity} units of ${product} for $${totalPrice}`;
}

const product = "Chocolate";
const quantity = 5;
const price = 50;

console.log(productPurchased(product, quantity, price));

export default productPurchased