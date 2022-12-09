// Todo<->Done 전환 버튼 이벤트
const TodoBtnEl=document.querySelector('.btn--Todo');
const DoneBtnEl=document.querySelector('.btn--Done');
const TodoBlockEl=document.querySelector('.TodoContainer>.Todo__body>.body__Do');
const DoneBlockEl=document.querySelector('.TodoContainer>.Todo__body>.body__Done');
DoneBtnEl.addEventListener('click',function(){
  DoneBlockEl.classList.remove('hidden');
  DoneBlockEl.classList.add('active');
  
  TodoBlockEl.classList.remove('active');
  TodoBlockEl.classList.add('hidden');
})
TodoBtnEl.addEventListener('click',function(){
  TodoBlockEl.classList.remove('hidden');
  TodoBlockEl.classList.add('active');
  
  DoneBlockEl.classList.remove('active');
  DoneBlockEl.classList.add('hidden');
})
// Item->TodoListBlock add
const InputEl = document.querySelector('.TodoContainer>.Todo__header>input');
const TodoListEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');

const appendTodo=()=>{

  // 비어있을때는 추가x
  if(InputEl.value=='') {
    alert("할 일을 적어주세요..");
    return ;
  }
  const liEl=document.createElement('li');
  let code='';
  code+='<div><button class="btnicon" onclick="ToDoneList(this)"><i class="bi bi-check-square"></i></button></div>';
  code+='<div><span>'+InputEl.value+'</span></div>';
  code+='<div>';
  code+='<button class="btnicon"><i class="bi bi-caret-up-square"></i></button>';
  code+='<button class="btnicon"><i class="bi bi-caret-down-square"></i></button>';
  code+='</div>';
  code+='';

  liEl.innerHTML=code;
  TodoListEl.append(liEl);
  InputEl.value='';
};

// 엔터키에 대한 이벤트
InputEl.addEventListener('keydown',function(){
  // console.log(event.keyCode);
  if(event.keyCode==13){
    appendTodo();
  }
})

// Todo->Done Move
const ToDoneList=function(El){
  // alert("CLICKED");
  // alert(El);                         //button
  // alert(El.parentNode);              //div
  // alert(El.parentNode.parentNode);   //li
  const liEl=El.parentNode.parentNode;

  // 1,3 icon 변경
  const childEl1 = liEl.children[0]; //li안의 1번째 div태그(아이콘)
  const childEl2 = liEl.children[1]; //li안의 2번째 div태그(내용)
  const childEl3 = liEl.children[2]; //li안의 3번째 div태그(아이콘)

  childEl1.children[0].remove(); //1번째 div태그 안의 첫번째 자식 제거
  childEl1.innerHTML='<button class="btnicon" onclick="ToTodoList(this)"><i class="bi bi-dash-square"></i></button>';

  childEl3.children[0].remove(); //3번째 div태그 안의 첫번째 자식 제거
  childEl3.innerHTML='<button class="btnicon"><i class="bi bi-trash"></i></button>';

  // TodoListUl -> DoneListUl로 li옮기기
  const DoneListUlEl=document.querySelector('.TodoContainer>.Todo__body>.body__Done>ul');
  DoneListUlEl.append(liEl);
}

// DoneList->TodoList li move
const ToTodoList=function(El){
  // alert("clicked!!");
  const liEl=El.parentNode.parentNode;  //li 태그
  // 1,3 icon 변경
  const childEl1 = liEl.children[0]; //li안의 1번째 div태그(아이콘)
  const childEl2 = liEl.children[1]; //li안의 2번째 div태그(내용)
  const childEl3 = liEl.children[2]; //li안의 3번째 div태그(아이콘)

  childEl1.children[0].remove(); //1번째 div태그 안의 첫번째 자식 제거
  childEl1.innerHTML='<button class="btnicon" onclick="ToDoneList(this)"><i class="bi bi-check-square"></i></button>';

  childEl3.children[0].remove(); //3번째 div태그 안의 첫번째 자식 제거
  childEl3.innerHTML='<button class="btnicon"><i class="bi bi-caret-up-square"></i></button>';
  childEl3.innerHTML+='<button class="btnicon"><i class="bi bi-caret-down-square"></i></button>';
  
  // DoneListUl -> TodoListUl  로 li옮기기
  const TodoListUlEl=document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');
  TodoListUlEl.append(liEl);

}

// 휴지통 버리기