
console.log("Hello");
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// console.log(buttons);
buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', (ev) => {
        const color = ev.target.id;
        // console.log(color);
        switch (color) {
            case 'grey':
                body.style.backgroundColor = "grey"
                break;
            case 'white':
                body.style.backgroundColor = "white"
                break;
            case 'blue':
                body.style.backgroundColor = "blue"
                break;
            case 'yellow':
                body.style.backgroundColor = "yellow"
                break;
                
            default:
                break;
        }
    })
})