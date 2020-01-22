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

let enterNumber = +prompt('Введите число!')
console.log('Enter number: ', enterNumber, "type: ", typeof (enterNumber))
if (enterNumber < 0) {
    result = enterNumber % 3 === 0 ? enterNumber ** 2 : enterNumber % 8;
}
else if (enterNumber > 0) {
    let more = Math.ceil(Math.sqrt(enterNumber));
    result = more > 1 ? more ** 2 : more - 0.5;
} else {
    result = enterNumber.toString();
}
alert(`${result} (${typeof (result)})`);
