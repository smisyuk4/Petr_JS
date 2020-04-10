let btnStart = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');

let btnExpenses = document.getElementsByTagName('button')[0],
    btnOptionalExpenses = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null){
        money = prompt("Ваш бюджет на месяц?");
    }
}

//start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i=0; i<2; i++){
            let question = prompt('Введите обязательную статью расходов в этом месяце');
            let answer = +prompt('Во сколько обойдется');
        
            if ((typeof(question)) === 'string' && (typeof(question)) !== null && (typeof(answer)) !== null  
            && question != '' && answer != '' && question.length < 50){
                console.log('Done');
                appData.expenses[question] = answer;
            } else{               
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyOneDay = (appData.budget / 30).toFixed();
        alert('Ваш бюджет на 1 день: ' + appData.moneyOneDay);
    },
    detectLevel: function(){
        if (appData.moneyOneDay < 100){
            console.log('Минимальный уровень достатка');
        } else if(appData.moneyOneDay > 100 && appData.moneyOneDay < 2000){
            console.log('Средний уровень достатка');
        } else if(appData.moneyOneDay > 2000 ){
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSevings: function(){
        if (appData.savings == true){
            let save = prompt('Какова сумма накоплений?');
            let percent = prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i=1; i<= 3; i++){
            let answ = prompt('Статья необязательных расходов?');       
            appData.optionalExpenses[i] = answ;
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)'); 
        if(typeof(items) == 'string' || items != '' || typeof(items) != null){
            appData.income = items.split(', ');
            appData.income.push(prompt('Что нибудь ещё?'));
            appData.income.sort();
        }     

        appData.income.forEach(function(itemArray, index){
            alert((index + 1) + ': Способы доп. заработка: ' + itemArray);
        })
    }    
};

/*for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ': '+ appData[key]);
}*/



