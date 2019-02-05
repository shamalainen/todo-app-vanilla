let elementCount = 0;

const onFormSubmit = (e) => {
  e.preventDefault();
  const { taskName } = e.target;

  if (taskName.value === '') {
    setInputError(taskName);
    return;
  } else {
    elementCount++;
  }

  setInputError(taskName, false);
  
  const listParent = document.getElementsByClassName('js-todo-listing')[0];
  const listItem = document.createElement('li');
  const listItemCheckbox = document.createElement('input');
  const listItemTask = document.createElement('h3');
  const listItemDelete = document.createElement('button');
  const listItemDeleteButton = document.createElement('i');

  listItemDelete.setAttribute('class', 'btn todo-listing__item-delete');
  listItemDelete.setAttribute('onclick', `handleDelete("todo-item--${elementCount}");`);
  listItemDeleteButton.setAttribute('class', 'fas fa-trash');
  listItemDelete.appendChild(listItemDeleteButton);

  listItemTask.setAttribute('class', 'todo-listing__item-task');
  listItemTask.appendChild(document.createTextNode(taskName.value));

  listItemCheckbox.setAttribute('type', 'checkbox');
  listItemCheckbox.setAttribute('class', 'todo-listing__item-checkbox');
  listItemCheckbox.setAttribute('onclick', "handleUpdateStatus(event)");
  
  const listItemCheckboxParent = listItemCheckbox.parentNode;

  listItem.setAttribute('id', `todo-item--${elementCount}`);
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

const handleDelete = id => {
  document.getElementById(id).remove();
};

const handleUpdateStatus = e => {
  const element = e.target;
  const elementParent = element.parentNode;

  elementParent.classList.toggle('is-active');
};