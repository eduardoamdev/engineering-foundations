function calculateDiscount(type, price) {
  if (type === "regular") return price * 0.9;
  if (type === "vip") return price * 0.8;
  if (type === "employee") return price * 0.7;
  return price;
}

console.log(calculateDiscount("regular", 100));
console.log(calculateDiscount("vip", 100));
