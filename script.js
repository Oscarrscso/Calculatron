let btns = document.querySelectorAll("button")
let currNum = ''
let oldNum = ''
let operator = ''
let mDisp = document.getElementById("mainDisplay")
let sDisp = document.getElementById("subDisplay")

btns.forEach(Element => {
  Element.addEventListener('click', event =>{
    id = event.target.id;
    let clas = event.target.classList

                document.getElementById("plus").classList.remove("is-active")
                document.getElementById("minus").classList.remove("is-active")
                document.getElementById("times").classList.remove("is-active")
                document.getElementById("divide").classList.remove("is-active")

       let nums = document.getElementById(id).innerHTML
        if(id.length > 3 && id != 'equal'){
          operator = id
                oldNum = currNum
                sDisp.innerHTML = oldNum
                mDisp.innerHTML = ''
                currNum = ''
                if(mDisp.innerHTML || sDisp.innerHTML){
                  document.getElementById(id).classList.add("is-active")
                }
        }
          switch(id){

            case "equal":
              if(mDisp.innerHTML && sDisp.innerHTML){
                currNum = parseFloat(currNum)
                    oldNum = parseFloat(oldNum)
                    
              if(operator){
                  switch(operator){
                    
                    case "plus": ans = currNum+oldNum
                        break;
                        
                    case "minus": ans = oldNum-currNum
                        break;

                        case "times": ans = currNum*oldNum
                            break;
                            
                        case "divide": ans = oldNum/currNum
                            break;
                    }
                    
                    mDisp.innerHTML=ans
                      sDisp.innerHTML=''
                        currNum = ans

                  }
                }
              break;

            case "C": 
             currNum = ''
             oldNum = ''
             mDisp.innerHTML = ''
             sDisp.innerHTML = ''
             operator = ''
              break;
          }
          if(clas == "num"){
            mDisp.innerHTML = currNum+=nums
          }   
  });
});