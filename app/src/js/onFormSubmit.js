// Variable for todo task items to get the correct ID number.
let elementCount = 0;

// Declared 'onFormSubmit' arrow function, that'll run when TodoForm is submitted.
const onFormSubmit = (e) => {
  // Prevent Default form submission, so it doesn't refresh the page.
  e.preventDefault();
  // Variable for FormTodo input element.
  const { taskName } = e.target;

  // Checks if the form was submitted without a value.
  if (taskName.value === '') {
    // Will set input element to Error mode.
    setInputError(taskName);
    // Returns empty to not go forward with the code.
    return;
  } else {
    // When element is added successfully, will add +1 to the elementCount variable.
    elementCount++;
  }

  // Removes error mode from input
  setInputError(taskName, false);
  
  // Variable for listing parent element, where everything will be appended to.
  const listParent = document.getElementsByClassName('js-todo-listing')[0];

  // Element creations for task items.
  const listItem = document.createElement('li');
  const listItemCheckbox = document.createElement('input');
  const listItemTask = document.createElement('h3');
  const listItemDelete = document.createElement('button');
  const listItemDeleteButton = document.createElement('i');

  // Delete button attribute setting
  listItemDelete.setAttribute('class', 'btn todo-listing__item-delete');
  // Adding onclick attribute for the handleDelete function to be passed into it.
  listItemDelete.setAttribute('onclick', `handleDelete("todo-item--${elementCount}");`);
  listItemDeleteButton.setAttribute('class', 'fas fa-trash');
  // Append the button itself into the parent element for the button.
  listItemDelete.appendChild(listItemDeleteButton);

  // Basic todo task attribute setting and adding input's text into it.
  listItemTask.setAttribute('class', 'todo-listing__item-task');
  listItemTask.appendChild(document.createTextNode(taskName.value));

  // Checkbox attribute setting
  listItemCheckbox.setAttribute('type', 'checkbox');
  listItemCheckbox.setAttribute('class', 'todo-listing__item-checkbox');
  // Adding onclick attribute for the handleUpdateStatus function to be passed into it.
  listItemCheckbox.setAttribute('onclick', "handleUpdateStatus(event)");
  
  // listItem attribute setting and appending before created elements in the right order.
  listItem.setAttribute('id', `todo-item--${elementCount}`);
  listItem.setAttribute('class', 'todo-listing__item');
  listItem.appendChild(listItemCheckbox);
  listItem.appendChild(listItemTask);
  listItem.appendChild(listItemDelete);
  
  // Adds one complete listItem to the listParent element.
  listParent.appendChild(listItem);
  
  // After form submit will update inputs value to be empty.
  taskName.value = '';
};

// created 'setInputError' function, which updates inputs state.
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

// created 'handleDelete' function, which deletes clicked element from the list.
const handleDelete = id => {
  // Find correct element by ID and then removes it.
  document.getElementById(id).remove();
};

// created 'handleDelete' function, which updates clicked element parents classList.
const handleUpdateStatus = e => {
  // Variables for current clicked item and its parent.
  const element = e.target;
  const elementParent = element.parentNode;

  // Toggle class 'is-active' on the parentElement.
  elementParent.classList.toggle('is-active');
};