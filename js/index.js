// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  // const priceValue = price.innerHTML;
  // const quantityValue = quantity.value;

  const calculation = price * quantity;
  product.querySelector('.subtotal span').innerHTML = calculation;
  return calculation;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // let sum = 0;
  const products = document.querySelectorAll('.product');

  let sum = 0;
  products.forEach((item) => (sum += updateSubtotal(item)));

  const total = (document.querySelector('#total-value span').innerHTML = sum);
  // let newArr = [];
  // newArr.push(subtotal).reduce((a, b) => a + b, 0);

  // for (let i of products) {
  //   return updateSubtotal(i);
  // }

  // ITERATION 3
  //... your code goes here
  // const total = document.querySelector('.total-value span');
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // const removeItem = target.parentNode.parentNode.parentNode;
  // removeItem.removeChild(target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((item) =>
    item.addEventListener('click', removeProduct)
  );
});
