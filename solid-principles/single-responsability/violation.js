const fs = require("fs");

function processCart(cart, taxRate = 0.2) {
  if (!Array.isArray(cart)) throw new Error("cart must be an array");
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = +(subtotal * taxRate).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const receipt = `Subtotal: ${subtotal.toFixed(2)}
Tax: ${tax.toFixed(2)}
Total: ${total.toFixed(2)}
`;
  fs.writeFileSync("./receipt.txt", receipt);

  return total;
}

const cart = [
  { price: 9.99, qty: 2 },
  { price: 49.5, qty: 1 },
];

console.log("Total =", processCart(cart, 0.18));
