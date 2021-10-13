const h1=document.querySelector('h1');
const button=document.getElementById('button')
button.addEventListener('click',function(printName){
   h1.innerHTML="Gopi";
  console.log(h1.innerHTML);
});
