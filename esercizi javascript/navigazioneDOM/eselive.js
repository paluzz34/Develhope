const input = document.querySelector('#todoInput')
const btn = document.querySelector('button')
const list = document.querySelector('.list')
const todoArr = []
const resetBtn= document.querySelector('#reset')
 function getValue(){
  if (input.value != '') {
    const value = input.value
    const li = document.createElement('li')
    li.textContent = value
    list.appendChild(li)
    input.value = ''
  } else {
    console.log('inserisci un todo');
  }
 
}
function reset() {
  list.innerHTML = ''
  input.value = ''
}

btn.addEventListener('click', getValue) 
resetBtn.addEventListener ("click", reset)

/*function render(){
  if (input.value != '') {
    const value = input.value
    todoArr.push(value)
    console.log(todoArr);
    list.innerHTML = ''
    console.log('svuoto');
    todoArr.forEach(todo => {
      const li = document.createElement('li')
      li.textContent = todo
      list.appendChild(li)
    }
    )
    console.log('creato');
    input.value = ''
  } else {
    console.log('inserisci un todo');
  }
 
}



btn.addEventListener('click', render)*/