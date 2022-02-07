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
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // let sum = 0;
  const products = document.querySelectorAll('.product');

  let sum = 0;
  if (products) products.forEach((item) => (sum += updateSubtotal(item)));

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
  let itemToRemove = target.parentNode.parentNode;
  itemToRemove.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const lastFieldParent = document.querySelector('.create-product');
  const nameInput = lastFieldParent.firstElementChild.querySelector('input');
  let name = nameInput.value;

  const numberInput =
    lastFieldParent.firstElementChild.nextElementSibling.querySelector('input');
  let num = numberInput.value;
  // alert(nameInput + ' ' + numberInput);
  const selectParent = document.querySelector('tbody');
  const creatingEl = document.createElement('tr');
  creatingEl.setAttribute('class', 'product');
  // alert(1);
  creatingEl.innerHTML = `<td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${num}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
  // alert(creatingEl.innerHTML);
  if (name !== '' && num > 0) {
    // alert(selectParent);
    // alert(creatingEl);
    selectParent.appendChild(creatingEl);
    // alert(3);
  }

  selectParent.lastElementChild
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);

  nameInput.value = '';
  numberInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((item) =>
    item.addEventListener('click', removeProduct)
  );

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
