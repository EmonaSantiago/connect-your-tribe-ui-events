// De knoppen aanroepen
const buttons = document.querySelectorAll('a')
let timer


// De knoppen for each aanroepen
buttons.forEach(button=>{

  button.addEventListener('click', onClick)
  button.addEventListener('dblclick', onDblClick)
  button.addEventListener('mousedown', onMouseDown)
  button.addEventListener('mouseup', onMouseUp)

})

function onClick() {
  this.classList.toggle('pink')
}

function onDblClick() {
  this.classList.toggle('blue')
}

function onMouseDown() {
  const self = this
  timer = setTimeout(()=>{
    self.classList.toggle('green')
  }, 500)
}

function onMouseUp() {
  clearTimeout(timer)
}