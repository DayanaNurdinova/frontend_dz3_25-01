// // Задание 1
// var firstNumber = prompt('Введите первое число!')
// var secondNumber = prompt('Введите второе число!')
// function minNumber (firstNumber, secondNumber){
//     if (isNaN(firstNumber) || isNaN(secondNumber)){
//         alert('Введите число!')
//         return;
//     }
//     console.log(Math.min(firstNumber, secondNumber))
// }
// minNumber(firstNumber, secondNumber)
//
// // Задание 2
// const senLenght = prompt('Напишите что нибудь!')
// function  returnFunction(senLength) {
//     alert(`длина строки: ${senLength.length}`)}
// returnFunction(senLenght)
// console.log(senLenght.length)

// Задание 3
function calculate(){
    var result;
    var firstNumber = Number(prompt('Введите первое число!'));
    var sign = prompt ('Введите действие \a+ \a- \a* \a/')
    var secondNumber = Number(prompt('Введите второе число!'))

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Введите только число!')
    }
    switch (sign) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            secondNumber === 0 ? result='Ошибка!':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        default:
            alert('Введите правильные действия')
    }
    alert(result)
}
calculate()