
function Kind(n) {
    let btn = document.body.querySelectorAll('.btn-kind');
    let types = document.body.querySelectorAll('.type');
    let item = document.body.querySelectorAll('.item');
    let kind = btn[n - 1].outerText.toLowerCase();
    let array = [];
    for (j = 0; j < item.length; j++) {
        item[j].classList.add('hidden');
    }

    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove('btn-kind-active');
    }
    for (i = 0; i < types.length; i++) {
        array[i] = types[i].outerText;
        let p = array[i].indexOf(':');
        array[i] = array[i].slice(p + 1).replace(/\s+/g, '').toLowerCase();
        if (array[i] === kind) {
            item[i].classList.remove('hidden');
        }
    }

    if (kind === 'все') {
        for (i = 0; i < types.length; i++) {
            item[i].classList.toggle('hidden');
        }
    }
    btn[n - 1].classList.toggle('btn-kind-active');

};

function Age() {
    let min = document.querySelector('.slider-values .value-1').innerHTML;
    let max = document.querySelector('.slider-values .value-2').innerHTML;
    let age = document.body.querySelectorAll('.age');
    let item = document.body.querySelectorAll('.item');
    let array = [];
    for (j = 0; j < item.length; j++) {
        item[j].classList.add('hidden');
    }

    for (i = 0; i < age.length; i++) {
        array[i] = age[i].outerText;
        let p = array[i].indexOf(':');
        array[i] = array[i].slice(p + 1).replace(/\s+/g, '').toLowerCase();
        let month = 'мес';
        if (array[i].includes(month) === true && min == 0) {
            item[i].classList.remove('hidden');
        } else if (array[i].includes(month) === false) {
            let w = array[i][0]
            if (w >= min && w <= max) {
                item[i].classList.remove('hidden');
            }
        }
    }
}

function AllFilter() {

    Age();
    let item = document.body.querySelectorAll('.item');
    let types = document.body.querySelectorAll('.type');
    let btn = document.querySelector('.btn-kind-active');
    let kind = btn.innerText.toLowerCase();
    let array = [];
    for (i = 0; i < item.length; i++) {
        if (item[i].classList.contains('hidden') === false) {
            array[i] = types[i].outerText;
            let p = array[i].indexOf(':');
            array[i] = array[i].slice(p + 1).replace(/\s+/g, '').toLowerCase();
            if (array[i] === kind) {
                item[i].classList.remove('hidden');
            }
            else {
                item[i].classList.add('hidden');
            }
        } else {
            continue;
        }

    }
    console.log(array)
}