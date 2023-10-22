document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  document.querySelector('form').addEventListener("submit",(e)=>{
    e.preventDefault()
    buildtask(e.target.new_task_description.value)
  })

function buildtask(tassk){
  let p=document.createElement('p')
  let btn=document.createElement('button')
  btn.textContent='x'
  btn.addEventListener('click',handleDelete)
  p.textContent= `${tassk} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)

}

function handleDelete(e){
  e.target.parentNode.remove()
}


});
