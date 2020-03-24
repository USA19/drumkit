var drumButtondLength=document.querySelectorAll('.drum').length;


for (var i=0;i<drumButtondLength;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var buttonInnerHtml=this.innerHTML;
        // console.log(buttonInnerHtml);
        makeSound(buttonInnerHtml);
        animationButton(buttonInnerHtml);
    });
    
   
}

function makeSound(key){
    // console.log(key);
    if(key=="w"){
        var tom1=new Audio('sounds/tom-1.mp3');
        tom1.play();
    }
    else
    if(key=="a"){
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
    }
    else
    if(key=="s"){
        var tom3 =new Audio('sounds/tom-3.mp3');
        tom3.play();
    }
    else
    if(key=="d"){
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
    }
    else

    if(key=="j"){
        var snare=new Audio('sounds/snare.mp3');
        snare.play();
    }
    else
    if(key=="k"){
        var crash=new Audio('sounds/crash.mp3');
        crash.play();
    }
   else{
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
    }
   
}





document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animationButton(event.key);

});


function animationButton(activeKey){
   var button= document.querySelector("."+activeKey);
   button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove('pressed');
    },100);
}








