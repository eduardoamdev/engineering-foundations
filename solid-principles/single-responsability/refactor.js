const fs = require("fs");

function validateCart(cart) {
  if (!Array.isArray(cart)) throw new Error("cart must be an array");
}

function calculateTotals(cart, taxRate) {
  const subtotal = cart.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );
  const tax = parseFloat((subtotal * taxRate).toFixed(2));
  const total = parseFloat((subtotal + tax).toFixed(2));
  return { subtotal, tax, total };
}

function generateReceipt(subtotal, tax, total) {
  return `Subtotal: ${subtotal.toFixed(2)}
Tax: ${tax.toFixed(2)}
Total: ${total.toFixed(2)}
`;
}
function saveReceiptToFile(receipt, filename = "./receipt.txt") {
  fs.writeFileSync(filename, receipt);
}

function processCart(cart, taxRate = 0.2) {
  validateCart(cart);
  const { subtotal, tax, total } = calculateTotals(cart, taxRate);
  const receipt = generateReceipt(subtotal, tax, total);
  saveReceiptToFile(receipt);
  return total;
}

const cart = [
  { price: 9.99, qty: 2 },
  { price: 49.5, qty: 1 },
];

console.log("Total =", processCart(cart, 0.18));
