function getpin () {
 const pin = genaretPin ();
 const pinString = pin + '';
 if (pinString.length === 4 ) {
    return pin;
 }
 else {
    return getpin();
 }
}

function genaretPin () {
    const random = Math.round(Math.random()*10000)
    return random
}

document.getElementById('genaret-pin-button').addEventListener ('click',function () {
    const pin = getpin ();


    const displayPin = document.getElementById('input-pin');
      displayPin.value = (pin)
})

document.getElementById('calculetor').addEventListener('click',function (event) {
    const code = event.target.innerText
    const typeNumber = document.getElementById('calculeter-input')
    const currentTypeNumber = typeNumber.value;

    if (isNaN(code)) {
        if (code === 'C'){
            typeNumber.value ='';
        }
        
        else if (code==='<') {
            const digits = currentTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('') ;
            typeNumber.value =remainingDigits
        }
    }

    else {
        const newType = currentTypeNumber + code
        typeNumber.value = newType
    }
})


document.getElementById('submit-button').addEventListener('click',function(){
   const displayPinfild = document.getElementById('input-pin');
   const currentpin = displayPinfild.value;

   const typeNumberFild = document.getElementById('calculeter-input')
   const typenumberValue =typeNumberFild.value ;

   const successMassage = document.getElementById('success');
   const unsuccessMassage = document.getElementById('unsuccess');

   if (typenumberValue===currentpin) {
    unsuccessMassage.style.display = 'none';
    successMassage.style.display = 'block';
   }

   else {
    
    unsuccessMassage.style.display = 'block';
    successMassage.style.display = 'none';
   }
})