let money, time;



function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null){
       money = prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};




function chooseExpenses (){
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
}

chooseExpenses();

function detectDayBudget(){
    appData.moneyOneDay = (appData.budget / 30).toFixed();
    alert('Ваш бюджет на 1 день: ' + appData.moneyOneDay);
}

detectDayBudget();

function detectLevel(){
    if (appData.moneyOneDay < 100){
        console.log('Минимальный уровень достатка');
    } else if(appData.moneyOneDay > 100 && appData.moneyOneDay < 2000){
        console.log('Средний уровень достатка');
    } else if(appData.moneyOneDay > 2000 ){
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();


function checkSevings(){
    if (appData.savings == true){
        let save = prompt('Какова сумма накоплений?');
        let percent = prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSevings();

function chooseOptExpenses(){
    for (let i=1; i<= 3; i++){
        let answ = prompt('Статья необязательных расходов?');       
        appData.optionalExpenses[i] = answ;
    }
}

chooseOptExpenses();

console.log(appData);