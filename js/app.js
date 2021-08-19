function pinGenerate(){
    //debugger;
    const pin = Math.round(Math.random()*10000);
    const pinString = pin+"";
    document.getElementById('trial').innerText = 3;
    const successMessage = document.getElementById('notify-success').style.display = "none";
    const failureMessage = document.getElementById('notify-failed').style.display = "none";
    const denyMessage = document.getElementById('notify-denied').style.display = "none";
    if(pinString.length == 4){
        return pin;
    }
    else{
        return pinGenerate();
    }
}



document.getElementById('pin-btn').addEventListener('click', function(){
    const pin = pinGenerate();
    document.getElementById('pin-input').value = pin;
});



//calc handle
document.getElementById('calc-body').addEventListener('click', function(event){
    const calcInput = event.target.innerText;
    previousValue = document.getElementById('calc-input').value;
    if(previousValue != null){
        if(isNaN(calcInput)){
            if(calcInput == 'C'){
                document.getElementById('calc-input').value = "";
            }
        }
        else{
            document.getElementById('calc-input').value = document.getElementById('calc-input').value + calcInput;
        }
    }
    
});

//verify pin
function verifyPin(){
    const pin = document.getElementById('pin-input').value;
    const typedNumber = document.getElementById('calc-input').value;
    const successMessage = document.getElementById('notify-success');
    const failureMessage = document.getElementById('notify-failed');
    const denyMessage = document.getElementById('notify-denied');
    const trial = document.getElementById('trial');
    let trialRemain = parseInt(trial.innerText);
    if(trialRemain != 0){
        debugger;
        if(pin == typedNumber){
            successMessage.style.display = 'block';
            failureMessage.style.display = 'none';
        }
        else{
            failureMessage.style.display = 'block';
            successMessage.style.display = 'none';
            trialRemain--;
            trial.innerText = trialRemain;
        }
    }
    else{
        denyMessage.style.display = 'block';
        successMessage.style.display = 'none';
        failureMessage.style.display = 'none';
    }
}