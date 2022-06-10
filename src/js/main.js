import { productList } from "./data";

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
