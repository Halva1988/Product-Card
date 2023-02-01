const like = document.querySelector('.card__like');

like.addEventListener('click', () => {
  like.classList.toggle('selected')
})

const amount = document.querySelector('.card__amount');
const remove = document.querySelector('.card__remove');
const add = document.querySelector('.card__add');

add.addEventListener('click', addProduct)
remove.addEventListener('click', removeProduct)

function addProduct() {
  amount.textContent = parseInt(amount.textContent) + 1;
}

function removeProduct() {
  if (amount.textContent == 0) {
    return
  }
  amount.textContent = parseInt(amount.textContent) - 1;
}

