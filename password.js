document.getElementById("generate").addEventListener('click', generatePassword);

function generatePassword(){
    // define our variables
    var length=document.getElementById("length").value;
    var uppercase=document.getElementById("uppercase").checked;
    var lowercase=document.getElementById("lowercase").checked;
    var numbers=document.getElementById("numbers").checked;
    var symbols=document.getElementById("symbols").checked;

    // set our character
    var charset='';
    if(uppercase){
        charset+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if(lowercase){
        charset+='abcdefghijklmnopqrstuvwxyz';
    }
    if(numbers){
        charset+='01234456789';

    }

    if(symbols){
        charset+='!@#$%^&*()_+|{}[]?>/=.-';
    }

    var password='';

    for(var i=0;i<length;i++){
        password+=charset.charAt(Math.floor(Math.random()*charset.length));
    }

document.getElementById("password").value=password;

}

document.getElementById("copy").addEventListener('click', copyPassword);

function copyPassword(){
    var password=document.getElementById("password");
    password.select();
    password.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("password copied to clipboard")
}