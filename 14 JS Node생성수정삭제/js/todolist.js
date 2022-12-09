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
  // alert(El);                 //button
  // alert(El.parentNode);        //div
  // alert(El.parentNode.parentNode); //li
  const liEl=El.parentNode.parentNode;

  const DoneListEl=document.querySelector('.TodoContainer>.Todo__body>.body__Done>ul');

}

