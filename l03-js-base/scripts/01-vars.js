/**
 * ПЕРЕМЕННЫЕ
 *
 * Переменная – это «именованное хранилище» для данных. Мы можем использовать
 * переменные для хранения товаров, посетителей и других данных.
 */

// Для создания переменной в JavaScript используйте ключевое слово let

let message;

// Теперь можно поместить в неё данные, используя оператор присваивания =

message = 'Hello';

/**
 * 1. Имя переменной должно содержать только буквы, цифры или символы $ и _
 * 2. Первый символ не должен быть цифрой
 */

// Если имя переменной содержит несколько слов:

let myVeryLongName;

/**
 * КОНСТАНТЫ
 *
 * Переменные, объявленные с помощью const, называются «константами».
 * Их нельзя изменить. Попытка сделать это приведёт к ошибке:
 */

const myBirthday = '18.04.1982';

// myBirthday = '01.01.2001'; // Ошибка

console.log(myBirthday);
