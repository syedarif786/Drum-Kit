// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//     alert("I got click");
// }

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got click");
// })

var kitButton = document.querySelectorAll("button").length;
for (i=0; i< kitButton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", playAudio);
            function playAudio(){
                buttonInnerHtml = makeSound(this.innerText);
                buttonAnimation(buttonInnerHtml);
                }
            }


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
       
}