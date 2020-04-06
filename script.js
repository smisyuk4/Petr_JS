let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


let question1 = prompt('Введите обязательную статью расходов в этом месяце');
let answer1 = prompt('Во сколько обойдется');
appData.expenses[question1] = answer1;


let question2 = prompt('Введите обязательную статью расходов в этом месяце');
let answer2 = prompt('Во сколько обойдется');
appData.expenses[question2] = answer2;


let moneyOneDay = appData.budget / 30;
alert('Ваш бюджет на 1 день: ' + moneyOneDay);

console.log(appData.expenses);

