const darkModeBtn = document.getElementById("darkModeBtn");
const body=document.querySelector("body");
const imgs=document.querySelectorAll("img");


console.log(darkModeBtn, body, imgs);

darkModeBtn.addEventListener("click", (e)=> {
    console.log(e.target);
    if(e.target.checked){
        // console.log("yes");
        body.style.filter = 'invert(100)';
        imgs.forEach((img)=>{
            img.style.filter='invert(100)';
        });
        
    }else{
        // console.log("no");
        body.style.filter = 'invert(0)';
        imgs.forEach((img)=>{
            img.style.filter = 'invert(0)';
        });
    }
    if(!body.classList.contains('animate')){
        body.classList.toggle('animate');
    }else{
        body.classList.remove('animate')
    }
});