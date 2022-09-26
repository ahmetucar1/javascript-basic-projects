(function() {
    
    let screenEl = document.querySelector('.screen')
    let buttonsEl = document.querySelectorAll('.btn')
    let clearEl = document.querySelector('.btn-clear')
    let equalEl = document.querySelector('.btn-equal');

    buttonsEl.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num
            screenEl.value += value;
        })
    })

    equalEl.addEventListener('click', function(e) {
        if(screenEl.value === '') {
            screenEl.value = "";
        }else {
            let answer = eval(screenEl.value)
            screenEl.value = answer;
        }
    })

    clearEl.addEventListener('click', function(e) {
        screenEl.value = "";
    })
})()