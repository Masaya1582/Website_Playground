const memoInput = document.getElementById('memo-input');
const addButton = document.getElementById('add-button');
const memoList = document.getElementById('memo-list');

addButton.addEventListener('click', () => {
  const memoText = memoInput.value;
  if (memoText.trim() !== '') {
    const memoItem = document.createElement('li');
    memoItem.className = 'memo-item';
    memoItem.innerHTML = `
      <span>${memoText}</span>
      <span class="remove-button">Remove</span>
    `;
    memoList.appendChild(memoItem);
    memoInput.value = '';

    const removeButton = memoItem.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      memoList.removeChild(memoItem);
    });
  }
});
