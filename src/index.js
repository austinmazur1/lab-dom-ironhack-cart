// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //Use product.querry for everything, so that it selects the children of the product thats being passed in
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");
  //use parse float to convert to a number
  let actualPrice = parseFloat(price.innerText);
  let updateSubtotal = actualPrice * quantity;
  subtotal.innerText = `${updateSubtotal}`;
  return updateSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //Selecting ALL subtotal and span elements
  let subtotals = document.querySelectorAll('.subtotal span');
//CL shows us a node list of the two spans
  // console.log(subtotals);

  //targets the 'total' number
  let total = document.querySelector('#total-value span') 
  console.log(total);
  

  //for loop through this node list
  for (let i = 0; i < subtotals.length; i++) {
    const subtotal = subtotals[i];
    console.log(subtotal);

    //Calling parent node twice to get corresponding product element
    //then we call the function with that product element
    const product = subtotal.parentNode.parentNode;
    updateSubtotal(product)
    // return product
  }

  // ITERATION 3
  for(let x =- 0; x < subtotals.length; x++) {
    let subtotal = parseFloat(subtotals[x].innerText);
    total += subtotal;
  }
  const totalElement = document.querySelector('#total-value span')
  totalElement.innerText = `$${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
