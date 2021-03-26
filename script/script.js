/* Объявление строго режима, писать его нужно в самом начале иначе он не будет работать */
'use strict';
/* Лучше всегда использовать строгий режим для чистоты написания кода, это избавит меня от написания кода с ошибками */

/* Урок номер 2 */
/* Создание переменных */
// let money = 600;
// console.log(typeof money);

// let income = 'Фриланс';
// console.log(typeof income);

// let addExpenses = 'Мобильный, Еда, Девушка';
// console.log(addExpenses.length);
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));

// let deposit = true;
// console.log(typeof deposit);

let mission = 61210;

// let period = 12;
// console.log("Период равен " + period + " месяцев " + "Цель заработать " + mission + " Долларов сша $");
/* Переменная которая высчитвает бюджет за день */
// let budgetDay = (money/30);
// console.log(budgetDay);

/* Усложненое дз не готово так что сюда не смотреть */
/* Усложнённое задание */
// let num = 266219;

// let numString = num.toString();
// console.log(numString);
// let numArray = numString.split('');
// console.log(numArray);

/* Урок номер 3 */
/* Модалка true - false */
// let question = confirm('Тебе есть 18 лет ?');
// console.log(question);
/* Модалка с полем для ввода */
// let question2 = prompt('Сколько вам лет ?', '28');
// console.log(typeof question2);

/* Урок номер 3 домашнее задание  */
/* 1.Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money */

let money = prompt('Ваш месячный доход.');

/* Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses */

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    console.log(addExpenses);

/* Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false) */

let deposit = confirm('Есть ли у вас депозит в банке?');
    console.log(deposit);

/* Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 

    “Введите обязательную статью расходов?” (например expenses1, expenses2)

    “Во сколько это обойдется?” (например amount1, amount2)

в итоге 4 вопроса и 4 разные переменных */
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько ' + expenses1 +  ' обойдется?');
    /* Нужно для того что-бы Перевести значение amount из строки в число */
    amount1 *= 1;
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько ' + expenses2 +  ' обойдется?');
    /* Нужно для того что-бы Перевести значение amount из строки в число */
    amount2 *= 1;

/* Вычислить бюджет на месяц */
let budgetMonth = money - (amount1 + amount2);
    console.log("Месячный бюджет " + budgetMonth);

/* Вычислить за сколько месяцев я заработаю нужную сумму денег*/
let missionCount = ( mission / budgetMonth);
    console.log("Цель будет достигнута за " + Math.ceil(missionCount) + " Месяцев");

/* Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону */
let budgetDay = (budgetMonth / 30 );
    console.log("Бюджет на день " + Math.floor(budgetDay));

/* Написать конструкцию условий (расчеты приведены в рублях)	

Если budgetDay больше 1200, то “У вас высокий уровень дохода”

Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”

Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”

Если отрицательное значение то вывести “Что то пошло не так”

Учесть варианты 0, 600 и 1200 */
if(budgetDay > 1200){
    console.log("У вас высокий уровень дохода");
} else if( budgetDay > 600 && budgetDay < 1200){
    console.log("У вас средний уровень дохода");
} else if( budgetDay < 600 ){
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if ( budgetDay < 0 ){
    console.log('Что то пошло не так');
} else {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}