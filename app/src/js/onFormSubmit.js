let elementCount = 0;

const onFormSubmit = (e) => {
  e.preventDefault();
  elementCount++;

  const taskName = e.target.taskName;

  if (taskName.value === '') {
    setInputError(taskName);
    return;
  }

  setInputError(taskName, false);
  
  const listParent = document.getElementsByClassName('js-todo-listing')[0];
  const listItem = document.createElement('li');
  const listItemCheckbox = document.createElement('input');
  const listItemTask = document.createElement('h3');
  const listItemDelete = document.createElement('button');
  const listItemDeleteButton = document.createElement('i');

  listItemDelete.setAttribute('class', 'btn todo-listing__item-delete');
  listItemDeleteButton.setAttribute('class', 'fas fa-trash');
  listItemDelete.appendChild(listItemDeleteButton);

  listItemTask.setAttribute('class', 'todo-listing__item-task');
  listItemTask.appendChild(document.createTextNode(taskName.value));

  listItemCheckbox.setAttribute('type', 'checkbox');
  listItemCheckbox.setAttribute('class', 'todo-listing__item-checkbox');

  listItem.setAttribute('id', 'todo-item--' + elementCount);
  listItem.setAttribute('class', 'todo-listing__item');
  listItem.appendChild(listItemCheckbox);
  listItem.appendChild(listItemTask);
  listItem.appendChild(listItemDelete);
  
  listParent.appendChild(listItem);

  taskName.value = '';
};

const setInputError = (input, error = true) => {
  const currentInput = input;

  if (error === false) {
    currentInput.classList.remove('is-empty');
    currentInput.placeholder = 'Tell me your plans!';
  } else {
    currentInput.classList.add('is-empty');
    currentInput.placeholder = "Please don't leave me empty!";
  }
};