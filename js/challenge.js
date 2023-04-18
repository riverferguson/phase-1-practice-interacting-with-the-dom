

// Global Variables
//let counterInt = 0
const likesUl = document.querySelector("ul.likes")

//Helper Functions
const incrementCounter = (value) => {
    counter.textContent = parseInt(counter.textContent) + 1
}

const isRunning = () => pause.innerText === "pause" ? true : false 

//Attach event-listeners 

minus.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) - 1  
})


plus.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) + 1
})



document.querySelector('#comment-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = document.querySelector('#comment-input').value
    const p = document.createElement('p')
    p.className = 'comment'
    p.textContent = userInput 
    list.appendChild(p)
    e.target.reset()

})

heart.addEventListener('click', (e) => {
    const currentTimer = counter.textContent
    const likesAmount = document.querySelector(`li[data-num="${currentTimer}"]`)
    if (likesAmount) {
        document.querySelector(`li[data-num="${currentTimer}"] span`).innerText = parseInt
        (document.querySelector(`li[data-num="${currentTimer}"] span`).innerText) + 1
        likesAmount.innerHTML = likesAmount.innerHTML.replace("time", "times")
    } else {
        const li = document.createElement('li')
        li.setAttribute('data-num', currentTimer)
        
        const span = document.createElement('span')
        span.textContent = '1'
        li.append(`${currentTimer} has been liked `, span, ' time')
        likesUl.append(li)
    }
    
})

pause.addEventListener('click', () => {
    pause.textContent = pause.innerText === "pause" ? "resume" : "pause"
    heart.disabled = !heart.disabled
    minus.disabled = !minus.disabled
    plus.disabled = !plus.disabled
})

//Start off the logic
setInterval(() => {
    isRunning() ? incrementCounter() : null
}, 1000)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



