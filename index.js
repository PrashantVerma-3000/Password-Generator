let arr = [];
let uc = document.querySelector('#uppercase');
let lc = document.querySelector('#lowercase');
let num = document.querySelector('#number');
let sym = document.querySelector('#symbol');
let but = document.querySelector('button');
let range = document.querySelector('#password');
let span = document.querySelector('span');
let output = document.querySelector('#output');
function handlecheck(event){
    if(event.target.checked){
        if(event.target.id=='uppercase'){
            arr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }else if(event.target.id=='lowercase'){
            arr.push("abcdefghijklmnopqrstuvwxyz");
        }else if(event.target.id=='number'){
            arr.push("0123456789");
        }else{
            arr.push("!@#$%^&*()_+");
        }
    }else{
        if(event.target.id=='uppercase'){
            arr.splice(arr.indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),1);
        }else if(event.target.id=='lowercase'){
            arr.splice(arr.indexOf("abcdefghijklmnopqrstuvwxyz"),1);
        }else if(event.target.id=='number'){
            arr.splice(arr.indexOf("0123456789"),1);
        }else{
            arr.splice(arr.indexOf("!@#$%^&*()_+"),1);
        }
    }
}
uc.addEventListener('change',handlecheck);
lc.addEventListener('change',handlecheck);
num.addEventListener('change',handlecheck);
sym.addEventListener('change',handlecheck);

range.addEventListener('change',(e)=>{
    span.innerText = e.target.value;

});


function generatePassword(){
    console.log("generate password");
    if(arr.length==0){
        alert("please select atleast one checkbox");
        return;
    }
    let password = "";
    for(let i=1;i<=range.value;i++){
        let index = Math.floor(Math.random()*arr.length);
        let len = arr[index].length;
        password = password + arr[index][Math.floor(Math.random()*len)];
    }
    output.innerText = password;
}
but.addEventListener('click',generatePassword);
