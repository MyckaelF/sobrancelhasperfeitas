function startTimer(duration, displayMin, displaySec) {

    let timer = duration, minutes, seconds

    setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        displayMin.textContent = minutes
        displaySec.textContent = seconds

        if(--timer < 0) {
            timer = duration
        }

    }, 1000);
}

window.onload = () => {
    
    let duration = 60 * 15
    let displayMin = document.getElementById('displayMin')
    let displaySec = document.getElementById('displaySec')

    startTimer(duration, displayMin, displaySec)
}