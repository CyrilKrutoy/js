//Even & Odd

let isUserNumber = confirm('Хотите узнать число?');
console.log('Ask user: ', isUserNumber, "type: ", typeof (isUserNumber));

if (isUserNumber) {
    let number = +prompt("Введите число");
    console.log('Inputed number: ', number, "type: ", typeof number);
    if (isNaN(number)) {
        alert('Это не число!');
    } else {
        if (!number) {
            alert('Вы отказались');
        } else {
            if (number % 2 === 0) {
                alert("Четное!");
            } else {
                alert("Не четное!");
            }
        }
    }
} else {
    alert('Вы не согласились');
}




// Enter number 

// let enterNumber = +prompt('Введите число!')
// console.log('Enter number: ', enterNumber, "type: ", typeof (enterNumber))

// if (enterNumber < 0) {
