/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source, example) {
    if (typeof source === 'string' && typeof example === 'string') {
        let spam = example.toLowerCase();
        let initialString = source.toLowerCase();
        let checkString = initialString.indexOf(spam);
        let checkTruth = checkTheTruth(checkString);
        return checkTruth;
    } else {
        throw new Error('is not a string');
    }
}

function checkTheTruth(n) {
    if (n !== -1) {
        return true;
    } else {
        return false;
    }
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
