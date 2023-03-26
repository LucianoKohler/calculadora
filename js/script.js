var display = document.getElementById('display')
var buttons = document.getElementsByClassName('button')


for (let i=0; i<= buttons.length-1; i++){
    buttons[i].addEventListener('click', function(){
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
                calculate('value', this.dataset.type)
                break;

            case '+':
            case '-':
            case '*':
            case '/':
            case 'c':
            case '.':
            case '=':
                calculate('action', this.dataset.type)
        }
    })

    function calculate(type, value){
        if(type === 'action'){
            switch(value){
                case '+':
                case '-':
                case '*':
                case '/':
                    display.innerHTML +=value
                    break;
                case 'c':
                    display.innerHTML=''
                    break;
                case '=':
                    display.innerHTML = eval(display.innerHTML)
            }

        }else if (type === 'value'){
            display.innerHTML += value
        }
        }
    }



    
        // switch(operator){
        //     case '+':
        //         return parseFloat(firstnum) + parseFloat(secondnum);
        //         break;
        //     case '-':
        //         return parseFloat(firstnum) - parseFloat(secondnum);
        //         break;
        //     case '*':
        //         return parseFloat(firstnum) * parseFloat(secondnum);
        //         break;
        //     case '/':
        //         return parseFloat(firstnum) / parseFloat(secondnum);
        //         break;
