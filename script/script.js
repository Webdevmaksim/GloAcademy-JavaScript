/* Объявление строго режима, писать его нужно в самом начале иначе он не будет работать */
'use strict';
/* Лучше всегда использовать строгий режим для чистоты написания кода, это избавит меня от написания кода с ошибками */

// Мои переменные
    let mission = 61210,
        income = 'Фриланс',
        money = prompt('Ваш месячный доход.','20000 '),
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Носки, обувь, переезд'),
        deposit = confirm('Есть ли у вас депозит в банке?'),
        expenses1 = prompt('Введите обязательную статью расходов?', 'Телефон'),
        amount1 = +prompt(`Во сколько ${expenses1}  обойдется?`),
        expenses2 = prompt('Введите обязательную статью расходов?', 'Интернет'),
        amount2 = +prompt(`Во сколько ${expenses2} обойдется?`);


/* Задание номер 4 */
// 1 - Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

let getExpensesMonth = () => {
    return amount1 + amount2;
};

// 2 - Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

let getAccumulatedMonth = (moneyMonth, expensesMonth) => {
    
    return moneyMonth - expensesMonth;
};

// 3 - Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 

let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth());

// 4 

let getTargetMonth = (myMiss, budgetMonth) => {
    return Math.ceil(myMiss / budgetMonth);
};

// Функция которая показывает тип перменной

let showTypeOf = (data) => {
    console.log(data, typeof(data));
};


// Функция которая разбивает строку на массив 

let arrayConv = (a) => {
    return a.split(',');
};

// Функция которая показывает какой у меня уровень дохода

let getStatusIncome = (a) => {
    if(a > 1200){
        return ('У вас высокий уровень дохода');
    } else if ( a >= 600 && a <= 1200 ) {
        return ('У вас средний уровень дохода');
    } else if ( a < 600){
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if ( a < 0){
        return ('Что то пошло не так');
    } else {
        return ('Высокий уровень дохода');
    }
    
};

let budgetDay = () =>{
    return accumulatedMonth / 30;
};


showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(`Сумма обязательных расходов за месяц ${getExpensesMonth(amount1, amount2)}`);
console.log(arrayConv(addExpenses));
console.log(`Накопления за месяц (Доходы минус расходы) = ${accumulatedMonth}`);
console.log(`Цель будет достигнута за: ${getTargetMonth(mission, accumulatedMonth)} месяцев`);
console.log(`Мой ежедневный бюджет  ${budgetDay()}`);
console.log(`Уровень моего дохода: ${getStatusIncome(budgetDay())}`);