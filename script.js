let btns = document.querySelectorAll("button")
let currNum = ''
let oldNum = ''
let operator = ''
let mDisp = document.getElementById("mainDisplay")
let sDisp = document.getElementById("subDisplay")

btns.forEach(Element => {
  Element.addEventListener('click', event =>{
    id = event.target.id
       let nums = document.getElementById(id).innerHTML
          switch(id){

            case "plus": 
                operator = "plus"
                oldNum = currNum
                sDisp.innerHTML = oldNum
                mDisp.innerHTML = ''
                currNum = ''
                document.getElementById("plus").classList.add("is-active")
                document.getElementById("minus").classList.remove("is-active")
                document.getElementById("times").classList.remove("is-active")
                document.getElementById("divide").classList.remove("is-active")
              break;

            case "minus": 
                operator = "minus"
                oldNum = currNum
                sDisp.innerHTML = oldNum
                mDisp.innerHTML = ''
                currNum = ''
                document.getElementById("plus").classList.remove("is-active")
                document.getElementById("minus").classList.add("is-active")
                document.getElementById("times").classList.remove("is-active")
                document.getElementById("divide").classList.remove("is-active")
              break;

              case "times": 
                operator = "times"
                oldNum = currNum
                sDisp.innerHTML = oldNum
                mDisp.innerHTML = ''
                currNum = ''
                document.getElementById("plus").classList.remove("is-active")
                document.getElementById("minus").classList.remove("is-active")
                document.getElementById("times").classList.add("is-active")
                document.getElementById("divide").classList.remove("is-active")
              break;

              case "divide": 
                operator = "divide"
                oldNum = currNum
                sDisp.innerHTML = oldNum
                mDisp.innerHTML = ''
                currNum = ''
                document.getElementById("plus").classList.remove("is-active")
                document.getElementById("minus").classList.remove("is-active")
                document.getElementById("times").classList.remove("is-active")
                document.getElementById("divide").classList.add("is-active")
              break;

            case "equal":
              document.getElementById("plus").classList.remove("is-active")
              document.getElementById("minus").classList.remove("is-active")
              document.getElementById("times").classList.remove("is-active")
              document.getElementById("divide").classList.remove("is-active")
              if(mDisp.innerHTML && sDisp.innerHTML){
              if(operator){
                  switch(operator){
                    case "plus": 
                    currNum = parseFloat(currNum)
                    oldNum = parseFloat(oldNum)
                      ans = currNum+oldNum
                        mDisp.innerHTML=ans
                        sDisp.innerHTML=''
                        currNum = ans
                        break;
                        
                    case "minus":
                      currNum = parseFloat(currNum)
                    oldNum = parseFloat(oldNum)
                      ans = oldNum-currNum
                        mDisp.innerHTML=ans
                        sDisp.innerHTML=''
                        currNum = ans
                        break;

                        case "times": 
                        currNum = parseFloat(currNum)
                        oldNum = parseFloat(oldNum)
                          ans = currNum*oldNum
                            mDisp.innerHTML=ans
                            sDisp.innerHTML=''
                            currNum = ans
                            break;
                            
                        case "divide":
                          currNum = parseFloat(currNum)
                        oldNum = parseFloat(oldNum)
                          ans = oldNum/currNum
                            mDisp.innerHTML=ans
                            sDisp.innerHTML=''
                            currNum = ans
                            break;
                    }
                  }
                }
              break;

            case "C": 
             currNum = ''
             oldNum = ''
             mDisp.innerHTML = ''
             sDisp.innerHTML = ''
             operator = ''
             document.getElementById("plus").classList.remove("is-active")
                document.getElementById("minus").classList.remove("is-active")
                document.getElementById("times").classList.remove("is-active")
                document.getElementById("divide").classList.remove("is-active")
              break;

            default: 
             mDisp.innerHTML = currNum+=nums
             
          }
  });
});