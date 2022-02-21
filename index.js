// dtetction of which button is clicked by mouse//
var numberOfDrumButton=document.querySelectorAll(".drum").length
for(var i=0;i<numberOfDrumButton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonInnerHtml=this.innerHTML                                              
        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    })

}

//detection of which key is pressed on keyboard//
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
   
})


function makeSound(key){
    switch (key) {
        case "w":
       var audio=new Audio("sounds/tom-1.mp3");
       audio.play();
            break;
        case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
           break;
        case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
        case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        
        default:
            alert("wrong key")
            break;
    }
}

function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100)
}

