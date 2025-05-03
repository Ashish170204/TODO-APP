let todolist = [
  {
    item: 'Buy milk',
    duedate: '4/10/24'
  },
  {
    item: 'Read book',
    duedate: `6/10/24`
  }
];
displayitems();


function addtodo() {
  let inputElement = document.querySelector('#text');
  let dateElement = document.querySelector('#date');
  let todoitem = inputElement.value;
  let tododate = dateElement.value;
  todolist.push({ item: todoitem, duedate: tododate });
  inputElement.value = '';
  dateElement.value = '';
  displayitems();
}


function displayitems() {
  let containerElement = document.querySelector('.todo-container');

  let newhtml = '';

  for (let i = 0; i < todolist.length; i++) {
    // let item = todolist[i].item;
    // let duedate = todolist[i].duedate;
    // or
    let { item, duedate } = todolist[i];
    newhtml += `
    
          <span>${item}</span>
          <span>${duedate}</span>
          <button class="btn-delete"    
          onclick="todolist.splice(${i},1); displayitems();">delete</button>
    `;
  }
  containerElement.innerHTML = newhtml;
}