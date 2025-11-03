const discountTypes = {
  regular: (price) => price * 0.9,
  vip: (price) => price * 0.8,
  employee: (price) => price * 0.7,
};

function calculateDiscount(type, price) {
  const discountFunction = discountTypes[type];
  if (discountFunction) {
    return discountFunction(price);
  }
  return price;
}

console.log(calculateDiscount("regular", 100));
console.log(calculateDiscount("vip", 100));
