var istatus =document.querySelector("h5")
var btn = document.querySelector("#add")
var check= 0
btn.addEventListener("click",function(){
    if(check ==0){istatus.innerHTML ="added to list"
    istatus.style.color="green"
    btn.innerHTML="Remove from list"
    check=1      }
    else{
   istatus.innerHTML="removed from the list"
   istatus.style.color="red"
   btn.innerHTML="add to the list"
   check =0

    }
})

