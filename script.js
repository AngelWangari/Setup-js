var uniqueEl=document.getElementById("unique")
var btnEl=document.getElementById("btn")
var str="Random No Is:"
function randomNumbers(){
    //no btwn 1-10000
    return Math.floor(Math.random()*10000)
   
}
console.log(randomNumbers())
btnEl.addEventListener("click",()=>{
    uniqueEl.textContent= str+" "+randomNumbers()
})