// # setInterval
//         Purpose: Call a function on a repeated basis. (ex: every 1 second)
        
//     # setTimeout
//         Purpose: Call a function after a certain amount of time.
        
    
//     * When used, both setInterval and setTimeout return and ID.  That ID can be given to clearInterval or clearTimeout to stop the timers.


const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const timer = document.getElementById("timer")

let count = 0
let intervalId
timer.textContent = count

function incrementTimer(){
    count++
    timer.textContent = count
}
// setinterval (incrementtimer 1000) calls the above functon and starts a timer
startBtn.addEventListener('click', function(){
    intervalId = setInterval(incrementTimer, 1000) 
})

stopBtn.addEventListener('click', function(){
clearInterval(intervalId)
})


// set time out only happens once so dont need a stop button
// startBtn.addEventListener("click", function(){
//     intervalId = setTimeout(incrementTimer, 1000)
// })
// stopBtn.addEventListener("click", function(){
//     clearTimeout(intervalId)
// })