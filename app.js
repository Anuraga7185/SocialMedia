var istatus=document.querySelector("h4")
var addf=document.querySelector("#add")
var removef=document.querySelector("#remove")
var check=0
var card=document.querySelector("#card")
var like=document.querySelector("i")
addf.addEventListener("click",function(){
    if(check==0){
    istatus.innerHTML="Following"
    istatus.style.color="green"
    addf.innerHTML="Friends"
console.log("Added")
    removef.innerHTML="Remove"
    check=1
    }
})

card.addEventListener("dblclick",function(){
    if (check == 1){
    like.style.transform='translate(-50%,-50%) scale(1)'
    setTimeout(function(){
        like.style.transform='translate(-50%,-50%) scale(0)'
    }, 2000)
     console.log("liked")
    }
})
removef.addEventListener("click",function(){
    istatus.innerHTML="Send Request"
    istatus.style.color="black"
    removef.innerHTML=""
    console.log("Removed")
    addf.innerHTML="Add Friend"
    check=0
})

addEventListener("dblclick",function(){

})