
var arr = []
const display = document.getElementById("display")
let stor1 = ''
let checker = true
operator = ''

const calc = (num) => {
  num = parseInt(num)
    if(checker){
      arr.push(num)
      display.innerHTML = arr.join('')
    } else {
      arr = []
      arr.push(stor1)
      arr.push(num)
      display.innerHTML = arr.join('')
      checker = true
    }
}

const AC = () => {
  display.innerHTML = ''
  arr = []
  stor1 = ''
  checker = true
}

const add = () =>{
  let stora = arr.join("").toString()
  stora = parseInt(stora)
  display.innerHTML = ''
  arr = []
  operator = 1
  if(checker){
    stor1 = stora
  }
}

const minus = () =>{
  let storm = arr.join("").toString()
  storm = parseInt(storm)
  display.innerHTML = ''
  arr = []
  operator = 2
  if(checker){
    stor1 = storm
  }
}

const equals = () =>{
  let dispNum = parseInt(display.innerHTML)
  let eq = ''
  switch(operator){
    case 1: eq = stor1 + dispNum
    break;
    case 2: eq = stor1 - dispNum
  }
  console.log(dispNum)
  console.log(stor1)
  console.log(eq)
  display.innerHTML = eq
  stor1 = eq
  console.log(stor1)
  checker = false
}