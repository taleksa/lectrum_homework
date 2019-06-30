/* Задача 2

Перепишите `if..else` с использованием нескольких операторов `?`. 

Для читаемости — оформляйте код в несколько строк.*/

var message;
let login = 'Owner'

message = (login == 'Pitter') ? 'Hi':
(login == 'Owner') ? 'Hello':
(login == '') ? 'unknown': '';