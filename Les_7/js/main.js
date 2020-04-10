let btnStart = document.getElementById('start'),
    btnExpenses = document.getElementsByTagName('button')[0],
    btnOptionalExpenses = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2];

let budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item'),
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

btnStart.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");   

    while(isNaN(money) || money == '' || money == null){
        money = prompt("Ваш бюджет на месяц?");
    }

    appData.timeData = time;
    appData.budget = money;

    budgetValue.textContent = money;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpenses.addEventListener('click', function(){
    let sum = 0;
    
    for (let i=0; i<expensesItem.length; i++){
        let question = expensesItem[i].value;
        let answer = expensesItem[++i].value;
    
        if ((typeof(question)) === 'string' && (typeof(question)) !== null && (typeof(answer)) !== null  
        && question != '' && answer != '' && question.length < 50){
            console.log('Done');
            appData.expenses[question] = answer;
            sum = sum + +answer;
        } else{               
            i--;
        }
    }
    expensesValue.textContent = sum;
});

btnOptionalExpenses.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < optionalexpensesItem.length; i++){
        let answ = optionalexpensesItem[i].value;       
        appData.optionalExpenses[i] = answ;

        if (appData.optionalExpenses[i] != '' && i != optionalexpensesItem.length-1){
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
        } else {
            optionalExpensesValue.textContent += appData.optionalExpenses[i];
        }
    }   
});

btnCount.addEventListener('click', function(){
    if (appData.budget != undefined){
        appData.moneyOneDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyOneDay;    
    
        if (appData.moneyOneDay < 100){
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if(appData.moneyOneDay > 100 && appData.moneyOneDay < 2000){
            levelValue.textContent = 'Средний уровень достатка';
        } else if(appData.moneyOneDay > 2000 ){
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        budgetValue.textContent = 'Произошла ошибка';
    }    
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;   
        appData.income = items.split(', ');   
        incomeValue.textContent = appData.income; 
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent =  appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent =  appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
        percent = +choosePercent.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent =  appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent =  appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false   
};
