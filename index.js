let password = prompt('Введите пароль')
let findCapitalLetter = password.replace(/[^A-Z]/g, '')
let findNumber = password.replace(/[^123456789]/g, '')
if (password.length >= 3 && password.length <= 30 && findCapitalLetter && findNumber) {
    alert('Пароль валидный. Добро пожаловать в аккаунт!')
} else {
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}

