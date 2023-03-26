var display = document.getElementById('display')
var buttons = document.getElementsByClassName('button')



for (let i=0; i<= buttons.length-1; i++){
    buttons[i].addEventListener('click', function(){
        console.log(this.dataset.type);
        var char = this.dataset.type;
        switch(char){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                display.innerHTML += char;
                break;

            case '+':
                display.innerHTML += ' '+char+' ';
                break;
            case '-':
                display.innerHTML += ' '+char+' ';
                break;
            case '*':
                display.innerHTML += ' '+char+' ';
                break;
            case '/':
                display.innerHTML += ' '+char+' ';
                break;
            case 'c':
                display.innerHTML = '';
                break;
        }
    })
}

