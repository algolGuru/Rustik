const circle = document.querySelector('.progress_ring_circle');
const circle2 = document.querySelector('.progress_ring_circle2');
const text = document.querySelector('.svg_text');
const text2 = document.querySelector('.svg_text2');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const svg_text = document.querySelector('.svg_text');
const svg_text2 = document.querySelector('.svg_text2');
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;
circle2.style.strokeDasharray = circumference;
circle2.style.strokeDashoffset = circumference;

function  setProgress( percent, percent2 ) {
    circle.style.strokeDashoffset = circumference - percent / 100 * circumference;
    svg_text.innerHTML = percent;
    svg_text2.innerHTML = percent2;

    if (percent <= 90 && percent > 49) {
        circle.style.stroke = '#FFBC10';
        text.style.fill = '#FFBC10';
    }
    if (percent <= 49) {
        circle.style.stroke = '#F5043E';
        text.style.fill = '#F5043E';
    }

    circle2.style.strokeDashoffset = circumference - percent2 / 100 * circumference;

    if (percent2 <= 90 && percent2 > 49) {
        circle2.style.stroke = '#FFBC10';
        text2.style.fill = '#FFBC10';
    }
    if (percent2 <= 49) {
        circle2.style.stroke = '#F5043E';
        text2.style.fill = '#F5043E';
    }
}

setProgress(96, 36);

const mobile = document.querySelector('.mobile');
const desktop = document.querySelector('.desktop');
function chooseMobile() {
    mobile.classList.add('device_active');
    desktop.classList.remove('device_active')
}
function chooseDesktop() {
    desktop.classList.add('device_active');
    mobile.classList.remove('device_active')
}

mobile.mousedown = chooseMobile;
desktop.mousedown = chooseDesktop;

const checkbox = document.querySelector('.checkbox');
const inactive_checkbox = document.querySelector('.inactive_checkbox');
const active_checkbox = document.querySelector('.active_checkbox');


function switch_checkbox() {
    var lab_data = document.querySelector('.lab_data');
    var lab_data_info = document.querySelector('.origin_summary_info');
    if (active_checkbox.classList.contains('none')){
        active_checkbox.classList.remove('none');
        inactive_checkbox.classList.add('none');
        lab_data_info.classList.remove('none');
    } else {
        inactive_checkbox.classList.remove('none');
        active_checkbox.classList.add('none');
        lab_data_info.classList.add('none');
    }
}

checkbox.mousedown = switch_checkbox;

var list = document.querySelectorAll(".list li .arrows img"),
    tab = [], index;

for(var i = 0; i < list.length; i++) {
    tab.push(list[i].innerHTML);
}


for(var j = 0; j < list.length; j++) {
    list[j].onclick = function() {
        if (this.parentElement.querySelector('.arrow_down').classList.contains('none')){
            this.parentElement.querySelector('.arrow_top').classList.add('none');
            this.parentElement.querySelector('.arrow_down').classList.remove('none');
            this.parentElement.parentElement.parentElement.parentElement.querySelector('.list_item_container').classList.add('active_list_item');
            this.parentElement.parentElement.parentElement.parentElement.querySelector('.list_item_detail').classList.remove('none');
        } else {
            this.parentElement.querySelector('.arrow_top').classList.remove('none');
            this.parentElement.querySelector('.arrow_down').classList.add('none');
            this.parentElement.parentElement.parentElement.parentElement.querySelector('.list_item_detail').classList.add('none');
            this.parentElement.parentElement.parentElement.parentElement.querySelector('.list_item_container').classList.remove('active_list_item');
        }

     }
}


const passed_arrows = document.getElementById('passed_arrows');

passed_arrows.onclick = function () {
    if(passed_arrows.parentElement.parentElement.parentElement.querySelector('.list').classList.contains('none')) {
        passed_arrows.parentElement.parentElement.parentElement.querySelector('.list').classList.remove('none')
    } else {
        passed_arrows.parentElement.parentElement.parentElement.querySelector('.list').classList.add('none')
    }
};

const lab_data_arrows = document.getElementById('lab_data_arrows');
const lab_data_items = document.querySelectorAll('.list_item_container_info');
lab_data_arrows.onclick = function () {
    if (lab_data_arrows.querySelector('.arrow_down').classList.contains('none')) {
        lab_data_arrows.querySelector('.arrow_down').classList.remove('none');
        lab_data_arrows.querySelector('.arrow_top').classList.add('none');
        lab_data_items.forEach(element =>
            element.classList.remove('none'))
    } else {
        lab_data_arrows.querySelector('.arrow_down').classList.add('none');
        lab_data_arrows.querySelector('.arrow_top').classList.remove('none');
        lab_data_items.forEach(element =>
            element.classList.add('none'))
    }
};