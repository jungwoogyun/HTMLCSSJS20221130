// Do<->DONE 전환 함수
const TodoBtnEl = document.querySelector('.btn--Todo');
const DoneBtnEl = document.querySelector('.btn--Done');

const TodoBlockEl = document.querySelector('.Todo__body>.body__Do');
const DoneBlockEl = document.querySelector('.Todo__body>.body__Done');

TodoBtnEl.addEventListener('click', () => {
  TodoBlockEl.classList.add('active');
  TodoBlockEl.classList.remove('hidden');
  DoneBlockEl.classList.add('hidden');
  DoneBlockEl.classList.remove('active');

  // 애니메이션 나중에 
  TodoBlockEl.style.animationName='moving';
  TodoBlockEl.style.animationDuration='.4s';


});
DoneBtnEl.addEventListener('click', () => {
  TodoBlockEl.classList.add('hidden'); // DoneBlock X
  TodoBlockEl.classList.remove('active'); // DoneBlock X
  DoneBlockEl.classList.add('active'); // TodoBlock o
  DoneBlockEl.classList.remove('hidden'); // TodoBlock o

});


// 입력시 Todo 로 Append
const InputEl = document.querySelector(".input");
const ToDoListsEl = document.querySelector('.body__Todolists');
const addItem = () => {

  if (InputEl.value == '') {
    alert("할일을 입력하세요..");
    return;
  }
  // alert(InputEl.value);
  const liEl = document.createElement('li');

  let code = '';
  code += '<div><button class="btnicon" onclick="ToDonetList(this)"><i class="bi bi-check-square"></i></button></div>';
  code += '<div><span>' + InputEl.value + '</span></div>';
  code += '<div>';
  code += '<button class="btnicon" onclick=prev(this)><i class="bi bi-arrow-up-square"></i></button>';
  code += '<button class="btnicon" onclick=next(this)><i class="bi bi-arrow-down-square"></i></button>';
  code += '</div>';



  liEl.innerHTML = code;
  ToDoListsEl.append(liEl);

  InputEl.value = '';
};


// 체크시 DoneList로 이동
const ToDonetList = function (El) {
  // alert("CLICKED");
  // alert(El.parentNode.parentNode);
  //  alert(El.parentNode.parentNode.children[0]);
  //  alert(El.parentNode.parentNode.children[1]);
  //  alert(El.parentNode.parentNode.children[2]);


  const liEl = El.parentNode.parentNode;
  const childEl1 = liEl.children[0]; //li 의 첫번째 div
  const childEl2 = liEl.children[1]; //li 의 두번째 div
  const childEl3 = liEl.children[2]; //li 의 세번째 div


  childEl1.children[0].remove();
  childEl1.innerHTML = '<button class="btnicon" onclick="ToTodoList(this)" ><i class="bi bi-dash-square"></i></button>';

  childEl3.children[0].remove();
  childEl3.innerHTML = '<button class="btnicon" onclick=remove(this)><i class="bi bi-trash"></i></button>';

  const DoneListEl = document.querySelector('.Todo__body>.body__Done>.body__Donelists');
  DoneListEl.append(liEl);

}

const ToTodoList = function (El) {
  // alert("Clicked");
  // alert(El.parentNode.parentNode);
  // alert(El.parentNode.parentNode.children[0]);
  // alert(El.parentNode.parentNode.children[1]);
  // alert(El.parentNode.parentNode.children[2]);

  const liEl = El.parentNode.parentNode;
  const childEl1 = liEl.children[0]; //li 의 첫번째 div
  const childEl2 = liEl.children[1]; //li 의 두번째 div
  const childEl3 = liEl.children[2]; //li 의 세번째 div

  childEl1.children[0].remove();
  childEl1.innerHTML = '<button class="btnicon" onclick="ToDonetList(this)" ><i class="bi bi-check-square"></i></button>';

  childEl3.children[0].remove();
  childEl3.innerHTML = '<button class="btnicon" onclick=prev(this)><i class="bi bi-arrow-up-square"></i></button>';
  childEl3.innerHTML += '<button class="btnicon" onclick=next(this)><i class="bi bi-arrow-down-square"></i></button>';


  const TodoListEl = document.querySelector('.Todo__body>.body__Do>.body__Todolists');
  TodoListEl.append(liEl);

}

// 휴지통 버리기 기능
const remove = function(El){
  // alert("remove");
  // alert(El.parentNode.parentNode);
  const liEl = El.parentNode.parentNode;
  let isremove = confirm('정말 삭제 하시겠습니까?');
  if(isremove){
    liEl.remove();
  }
}

// 우선순위 업 다운
const prev = function(El){
  alert('prev');
  // 최상위일때

  // 아닐때
}
const next = function(El){
  alert('next');

  //최하위일때

  //아닐때
}

