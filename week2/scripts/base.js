const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteBtn = document.createElement('button');


button.addEventListener('click', () => {
  if (input.value.trim() !== "") {
    // 1. create list item
    const li = document.createElement('li');

    // 2. put input value inside it
    li.textContent = input.value;

    // 3. create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';

    // 4. append delete button to li
    li.append(deleteBtn);

    // 5. append li to the list
    list.append(li);

    // 6. add delete functionality
    deleteBtn.addEventListener('click', () => {
      list.removeChild(li);
    });

    // 7. clear input field
    input.value = '';
    input.focus();
  } else {
    input.focus();
  }
});
