const addBtn = document.querySelector('#addBtn'); // 추가 버튼 선택

function keyCodeCheck () { // 엔터키로 추가
	if(window.event.keyCode === 13 && todoInput.value !== ''){
        createTodo();
    }
}

addBtn.addEventListener('click', () => { // + 버튼으로 추가
    if(todoInput.value !== ''){ // 빈 값 입력 방지
        createTodo();
    }
})

function createTodo() {
  const todoList = document.querySelector('#todoList');
  const newLi = document.createElement('li'); 
  const newBtn = document.createElement('button'); 
  const newSpan = document.createElement('span');
  const todoInput = document.querySelector('#todoInput');

  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);

  newSpan.textContent = todoInput.value;

  todoList.appendChild(newLi);

  todoInput.value = '';

  newBtn.addEventListener('click', () => {
    newLi.classList.toggle('complete');
  });

  newLi.addEventListener('dblclick', () => {
    newLi.remove();
  });
}
