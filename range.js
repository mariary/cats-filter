const sliderContainer = document.querySelector('.slider-container');

const progressBar = document.querySelector('.slider-container .progress');
const thumb1 = document.querySelector('.slider-container .thumb-1');
const thumb2 = document.querySelector('.slider-container .thumb-2');
const thumbIndicator1 = document.querySelector('.slider-container .thumb-indicator-1');
const thumbIndicator2 = document.querySelector('.slider-container .thumb-indicator-2');
const sliderContainerWidth = sliderContainer.offsetWidth;
const sliderContainerLeft = sliderContainer.offsetLeft;

const displayValue1 = document.querySelector('.slider-values .value-1');
const displayValue2 = document.querySelector('.slider-values .value-2');

var minValue = 0;
var maxValue = 6;
var valueRange = maxValue - minValue;
var value1 = minValue;
var value2 = maxValue;
var dragging1 = false;
var dragging2 = false;
var translate;

function setPosition1() {
    let position = (value1-minValue)/valueRange * sliderContainerWidth;
    thumb1.style.transform = 'translate(-50%)  translateX('+ position  +'px)';
    displayValues();
    setRangeBar();
}

function setPosition2() {
    let position = (value2-minValue)/valueRange * sliderContainerWidth;
    thumb2.style.transform = 'translate(-50%)  translateX('+ position  +'px)';
    displayValues();
    setRangeBar();
}

function setRangeBar(){
    progressBar.style.transform  = ' translateX('+ (value1-minValue)/valueRange * sliderContainerWidth  +'px) scaleX('+ (value2 - value1)/valueRange +')';
}

function displayValues() {
    if (value1 > value2){
        var maxRange = value1;
        var minRange = value2;
    } else {
        var maxRange = value2;
        var minRange = value1;
    }

    displayValue1.innerHTML = Math.round(minRange);
    displayValue2.innerHTML = Math.round(maxRange);
}

displayValues();
setPosition1();
setPosition2();

document.addEventListener('mousemove', function(e) {
    if (dragging1) {
        if (e.clientX < sliderContainerLeft ) {
            value1 = minValue ;
        } else if (e.clientX > sliderContainerWidth + sliderContainerLeft )      {
            value1 = maxValue;
        } else {
            translate = e.clientX - sliderContainerLeft;
            value1 =  Math.round(translate / sliderContainerWidth* valueRange + minValue);
        }
        console.log(value1);
        setPosition1();
    }
    if (dragging2) {
        if (e.clientX < sliderContainerLeft ) {
            value2 = minValue ;
        } else if (e.clientX > sliderContainerWidth + sliderContainerLeft )      {
            value2 = maxValue;
        } else {
            translate = e.clientX - sliderContainerLeft;
            value2 =  Math.round(translate / sliderContainerWidth* valueRange + minValue);
        }
        setPosition2();
    }
});


thumb1.addEventListener('mousedown', function(e) {
    dragging1 = true;
    thumbIndicator1.classList.add('focus');
});

thumb2.addEventListener('mousedown', function(e) {
    dragging2 = true;
    thumbIndicator2.classList.add('focus');
});


document.addEventListener('mouseup', function(e) {
    dragging1 = false;
    dragging2 = false;
    thumbIndicator1.classList.remove('focus');
    thumbIndicator2.classList.remove('focus');
});