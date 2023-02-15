// grab the input, append button from HTML
let input = document.querySelector('.input-Tasks');
let button = document.querySelector('.append-Btn');

// add event listeners
button.addEventListener('click', () => {

    // creating DOM elements
    const output = document.createElement('ul');
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const checkbox = document.createElement('input');
    const editBtn = document.createElement('button');

    // adding classses to DOM elements for styling
    output.classList.add('task');
    deleteBtn.classList.add('delete');
    checkbox.classList.add('checkbox');

    // asigning values to created DOM elements
    li.innerText = input.value;
    deleteBtn.textContent = 'X';
    checkbox.type = 'checkbox';
    editBtn.textContent = 'Edit Task'

    // delete the input and delete button
    deleteBtn.addEventListener('click', function() {
        output.removeChild(output.firstChild);
        output.removeChild(deleteBtn);
        output.removeChild(checkbox);
        output.removeChild(editBtn);
    });

    // append the list items and buttons
    output.appendChild(li);
    output.appendChild(checkbox);
    output.appendChild(deleteBtn);
  
    document.body.appendChild(output);
    // clear the input once item is inserted
    input.value = '';
})

