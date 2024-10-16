document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number'). value ;
    const pinNumber= document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    if(phoneNumber==='01819736213' && pinNumber==='1234'){
        console.log('You are loged');
        window.location.href ='/home.html'
    }
        
    else{
        alert('wrong number and pin')      
    }
})