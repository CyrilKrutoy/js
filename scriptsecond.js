// //Even & Odd

// let isUserNumber = confirm('Хотите узнать число?');
// console.log('Ask user: ', isUserNumber, "type: ", typeof (isUserNumber));

// if (isUserNumber) {
//     let number = +p  rompt("Введите число");
//     console.log('Inputed number: ', number, "type: ", typeof number);
//     if (isNaN(number)) {
//         alert('Это не число!');
//     } else {
//         if (!number) {
//             alert('Вы отказались');
//         } else {
//             if (number % 2 === 0) {
//                 alert("Четное!");
//             } else {
//                 alert("Не четное!");
//             }
//         }
//     }
// } else {
//     alert('Вы не согласились');
// }




// // Enter number 
//function  en ( ) {
// let enterNumber = +prompt('Введите число!')
// console.log('Enter number: ', enterNumber, "type: ", typeof (enterNumber))
// if (enterNumber < 0) {
//     result = enterNumber % 3 === 0 ? enterNumber ** 2 : enterNumber % 8;
// }
// else if (enterNumber > 0) {
//     let squareRoot = Math.sqrt(enterNumber);
//     let more = Math.ceil(square Root);
//     result = more > 1 ? more ** 2 : more - 0.5;
// } else {
//     result = enterNumber.toString();
// }
// alert(`${result} (${typeof (result)})`);
// }

// GAME
function guess() {
    let randomNumber = Math.random() * 10;
    let ourNumber = Math.round(randomNumber);
    if (confirm("Нажмите ОК если вам есть 18")) {
        tryToGuess();
    }
    else {
        alert("Вы слишком молоды")
    }
}
function tryToGuess() {
    let userGuess = +prompt("Какую цифру мы загадали?");
    if (userGuess == ourNumber) {
        alert("Угадали!")
    }
    else {
        alert("Нет! Попробуйте еще!");
        tryToGuess();
    }
}

