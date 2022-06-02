// const a=10;
// const b=20;
// function sum(a,b){
//     if(typeof a != "number"||typeof b !="number") return -1;
//     const result = a+b;
//     return result;
// }
// console.log(sum(a,b));

// const myInfo={
//     name:"Thaí",
//     age: 26,
//     isStatus: false,
//     street: {
//         name: "Hưng Yên",
//         address: "Kim Động",
//     },
//     running: function(){
//         return "object running";
//     },
// };

// console.log(myInfo[running]);
// console.log(myInfo.running());

const productList = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: "./images/1.png",
    time: "30 Minutes",
    type: "Snack",
  },
  {
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    img: "./images/2.png",
    time: "30 Minutes",
    type: "Fish",
  },
  {
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    img: "./images/3.png",
    time: "30 Minutes",
    type: "Snack",
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise",
    img: "./images/4.png",
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    id: 5,
    name: "The Creamiest Creamy Chicken",
    img: "./images/5.png",
    time: "30 Minutes",
    type: "Noodles",
  },
  {
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    img: "./images/6.png",
    time: "30 Minutes",
    type: "Sweet",
  },
];

function showProducts(products) {
  if (!Array.isArray(products) || products.length == 0) return false;
  let result = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    result += `
          <div>
          
          <a href="pageDetail.html?id=${product.id}">
            <img src="${product.img}" class="rounded-3xl" alt="" />
          </a>
                <p class="text-[#F54748] my-2">
                <a href="./pageDetail.html?id=${product.id}">${product.name}</a>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>${product.time}</span>
                <img
                  src="./src/images/ForkKnife.png"
                  class="inline-block"
                  alt=""
                /><span>${product.type}</span>
              </div>
          `;
  }
  return result;
}

document.getElementById("products").innerHTML = showProducts(productList);
