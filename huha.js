let done=document.querySelectorAll('.btn-info');
let deletebtn=document.querySelectorAll('.btn-danger');
let submit=document.querySelector('.btn-outline-success');
const data=document.querySelector('.input-todo');
const section=document.querySelector('.section');

const forms=document.forms['form'];


//add todo
forms.addEventListener('submit',(e)=>{
 e.preventDefault();
 const div=document.createElement('div');
 const details=document.createElement('span');
 const doneBtn= document.createElement('button');
 const deleteBtn= document.createElement('button');

 const data2=data.value;

 div.classList.add('todo');
 details.classList.add('details');
 doneBtn.classList.add('btn');
 doneBtn.classList.add('btn-info');
 doneBtn.textContent='Done';
 deleteBtn.classList.add('btn');
 deleteBtn.classList.add('btn-danger');
 deleteBtn.textContent='Delete';

 div.appendChild(details);
 div.appendChild(doneBtn);
 div.appendChild(deleteBtn);
 section.appendChild(div);

 details.textContent=data2;
 data.value="";

})

//delete todo
section.addEventListener('click',(e)=>{
  if(e.target.textContent=='Delete'){
     const parent=e.target.parentElement.parentElement;
     parent.removeChild(e.target.parentElement);
  }
})
//done
section.addEventListener('click',(e)=>{
 if(e.target.textContent=='Done'){
   const del=document.createElement('del');
   const cap=e.target.previousSibling.textContent;
   e.target.previousSibling.textContent="";
   e.target.previousSibling.appendChild(del);
   del.textContent=cap;
   console.log(e.target.parentElement);
    console.log(e.target.previousSibling.textContent);
 }
})




