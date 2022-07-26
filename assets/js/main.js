const stopwatch = document.querySelector('.stopwatch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const zero = document.querySelector('.zero');
let seconds = 0;
let timer;
let pauseColor;

function createHour(seconds){
    const hour = new Date(seconds * 1000);
    return hour.toLocaleTimeString('pt-BR',{
        timeZone: 'UTC'
    });
}

function startHour(){
    timer = setInterval(function(){
        seconds++;
        stopwatch.innerHTML = createHour(seconds);
    }, 1000)
}

start.addEventListener('click', function(){
    clearInterval(timer);
    startHour();
    clearInterval(pauseColor);
    stopwatch.classList.remove('toPause');
});

pause.addEventListener('click', function(){
    clearInterval(timer);
    stopwatch.classList.add('toPause');
});

zero.addEventListener('click', function(){
    clearInterval(timer);
    stopwatch.innerText = '00:00:00';
    seconds = 0;
    stopwatch.classList.remove('toPause');
});

