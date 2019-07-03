/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение
Object.defineProperty(person, 'salary', {
    get() {
        let date = new Date();
        let year = date.getYear();
        let month = date.getMonth();
        let lastDay = new Date(year, month + 1, 0);
        
        if (lastDay.getDate() - date.getMonth() > 20 ) {
            return 'good salary';
        } else {
            return 'bad salary';
        }
    }
})

person.salary; // good salary

exports.person = person;
