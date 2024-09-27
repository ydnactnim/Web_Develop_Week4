let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate", price: 2 },
  { name: "Strawberry", type: "Fruit", price: 1 },
  { name: "Vanilla", type: "Vanilla", price: 2 },
  { name: "Pistachio", type: "Nuts", price: 1.5 },
  { name: "Neapolitan", type: "Chocolate", price: 2 },
  { name: "MintChip", type: "Chocolate", price: 1.5 },
  { name: "Raspberry", type: "Fruit", price: 1 },
];

// { scoops: [], total: }
let transactions = [];

// { scoops: [], total: }
transactions.push({
  scoops: ["Chocolate", "Vanilla", "MintChip"],
  total: 5.5,
});
transactions.push({ scoops: ["Raspberry", "StrawBerry"], total: 2 });
transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 });

// 수익 계산
const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log(`You've made ${total} $ today`); // You've made 11.5 $ today

// 각 맛의 판매량
let max = 0;
let max_Stuff = "Nothing";

let flavorDistribution = transactions.reduce((acc, curr) => {
  curr.scoops.forEach((scoop) => {
    if (!acc[scoop]) {
      acc[scoop] = 0;
    }
    acc[scoop]++;

    if (max < acc[scoop]) {
      max = acc[scoop];
      max_Stuff = scoop;
    }
  });
  return acc;
}, {});

console.log(flavorDistribution);
console.log(`Best : ${max_Stuff}, Score : ${max}`);
