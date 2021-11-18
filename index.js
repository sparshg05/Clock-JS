const hourHand=document.getElementById("hour");
const minHand=document.getElementById("minute");
const secHand=document.getElementById("second");
const am_pmHand=document.getElementById("AM-PM");
const button=document.querySelector("#set-time");

var functionCall=false;

setInterval(() => {
    
    var time=new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();

    if(h>12){
        hourHand.innerHTML=h-12;
    }else hourHand.innerHTML=h;

    minHand.innerHTML=m;
    secHand.innerHTML=s;

    if((h>=0) && (h<=12)){
        am_pmHand.innerHTML="AM";
    }
    else am_pmHand.innerHTML="PM";

}, 1000);



const makeDiv = ()=>{

    functionCall = true;
    var box=document.createElement("div");
    box.id="dynamic-box";
    document.getElementById('container-1').appendChild(box);
    box.classList.add("dynamic-box");

    let wakeUpInput = document.getElementById("wakeUpTimeSelector");
    let selectedText = wakeUpInput.options[wakeUpInput.selectedIndex].text;
    box.innerText = "The Wake up time is set as - " + selectedText;

    let lunchInput = document.getElementById("lunchTimeSelector");
    selectedText = lunchInput.options[lunchInput.selectedIndex].text;
    box.innerText += "\nThe Lunch time is set as - " + selectedText;

    let napInput = document.getElementById("napTimeSelector");
    selectedText = napInput.options[napInput.selectedIndex].text;
    box.innerText += "\nThe Nap time is set as - " + selectedText;


}

function handleClick(){
    console.log("button clicked")

    let wakeUpInput = document.getElementById("wakeUpTimeSelector").value;
    var hour=new Date().getHours();
    if(hour>12){
        hour=hour-12;
    }

    if(wakeUpInput==hour){
        console.log("Breakfast Time!!")
        document.getElementById("img-container").style.backgroundImage="url('wakeup-img.PNG')";
        document.getElementById("text-container").innerHTML="Breakfast Time!!";
    }

    let lunchInput = document.getElementById("lunchTimeSelector").value;
    if(lunchInput == hour){
        console.log("Lunch Time!!")
        document.getElementById("img-container").style.backgroundImage="url('lunch-img.PNG')";
        document.getElementById("text-container").innerHTML="Lets have some Lunch!!";
    }

    let napInput = document.getElementById("napTimeSelector").value;
    if(napInput == hour){
        console.log("Nap Time!!")
        document.getElementById("img-container").style.backgroundImage="url('goodnight_img.PNG')";
        document.getElementById("text-container").textContent="Good Night !!";
    }

    if(functionCall == false){
        makeDiv();
    }
    
}
