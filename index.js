let a;
let date;
let time;
setInterval(() => {
    a = new Date();
    data = a.toLocaleDateString();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('clock').innerHTML = data + "<br>" + "&nbsp&nbsp" +time;
}, 1000);
    
const toggle = document.getElementById('btn');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
});