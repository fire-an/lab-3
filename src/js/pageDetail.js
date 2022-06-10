const productList = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: "./src/images/1.png",
    time: "30 Minutes",
    type: "Snack",
  },
  {
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    img: "./src/images/2.png",
    time: "30 Minutes",
    type: "Fish",
  },
  {
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    img: "./src/images/3.png",
    time: "30 Minutes",
    type: "Snack",
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise",
    img: "./src/images/4.png",
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    id: 5,
    name: "The Creamiest Creamy Chicken",
    img: "./src/images/5.png",
    time: "30 Minutes",
    type: "Noodles",
  },
  {
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    img: "./src/images/6.png",
    time: "30 Minutes",
    type: "Sweet",
  },
];

const id = new URLSearchParams(window.location.search).get("id");

function showProduct(products) {
  if (!Array.isArray(products) || products.length == 0) return false;
  let result = "";
  const product = products.find((item) => item.id == id);
  result = `<div class="banner grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
  <div>
    <h2 class="font-bold text-3xl mb-5">
      ${product.name}
    </h2>
    <p class="text-2xl text-[#F54748] font-bold mb-5">$30</p>
    <p class="mb-5">
      Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
      ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
      egestas semper. Aenean ultricies mi vitae est. Mauris placerat
      eleifend leo.
    </p>
    <form action="" class="flex">
      <input
        class="py-3 w-50 px-2 border rounded-md rounded-bl-md mr-5"
        type="text"
        placeholder="Quantity"
      />
      <button
        type="submit"
        class="bg-[#111928] w-15 text-white px-5 rounded-md rounded-br-md"
      >
        Add to Cart
      </button>
    </form>
  </div>
  <div>
    <img src=${product.img} class="w-full" alt="" />
  </div>
  <hr class="lg:hidden" />
</div>`;
  return result;
}

document.getElementById("detail").innerHTML = showProduct(productList);
