const updateEle = document.getElementById("updateEle")
const increasebtn = document.getElementById("increasebtn")
const resetbtn = document.getElementById("resetbtn")
const decreasebtn = document.getElementById("decreasebtn")

let count = 0;


increasebtn.addEventListener("click",function(){
     count++;

     Textcontent()
     if(count > 0){
        updateEle.style.color = "green"
     }
})
resetbtn.addEventListener("click",function(){
    count = 0;
    Textcontent()
    if(count == 0){
        updateEle.style.color = "black"
      }
})
decreasebtn.addEventListener("click",function(){
    count--;
    Textcontent()
    if(count < 0){
        updateEle.style.color = "red"
      }
})


function Textcontent(){
    updateEle.textContent = count
}