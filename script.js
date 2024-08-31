
let input= document.querySelector('input');
let userInput;
let prevValue='';
let userLength;
let prevLength;
let first3Number ;

input.addEventListener('input', (e) => {

    userInput= e.target.value
    userLength= userInput.length
    prevLength= prevValue.length;
    console.log(userLength, prevLength);
    

  
    debugger
    if( /\d+$/.test(userInput)){
        input.value= userInput ;
           }
    else{
        input.value= userInput.slice(0, userLength-1)
      
    
        }

       
        if(userLength===4 && userLength>prevLength) {
            // debugger
          first3Number = userInput.slice(0, 3);
             input.value  =  `+(${first3Number}) - ${userInput[3]}`
             userLength= input.value.length
         
        }

        else if(userLength===9 && userLength<prevLength) {
            input.value= first3Number;
            userLength= input.value.length
            prevValue= input.value
            prevLength= prevValue.length
        }

       

        else if(userLength===9 &&  prevLength ===4) {
            input.value= first3Number;
            userLength= input.value.length
            prevValue= input.value
            prevLength= prevValue.length
        }

        else if(userLength===4 &&  prevLength ===9) {

            input.value  =  `+(${first3Number}) - ${userInput[3]}`
             userLength= input.value.length
            
        }

        prevValue= userInput;
        

})

 
