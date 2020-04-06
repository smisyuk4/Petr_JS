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

/*
for (let i=0; i<2; i++){
    let question = prompt('Введите обязательную статью расходов в этом месяце');
    let answer = prompt('Во сколько обойдется');

    if ((typeof(question)) === 'string' && (typeof(question)) !== null && (typeof(answer)) !== null  
    && question != '' && answer != '' && question.length < 50){
        console.log('Done');
        appData.expenses[question] = answer;
    } else{               
        i--
    }
}
*/

/*
let i=0;
while (i<2){
    let question = prompt('Введите обязательную статью расходов в этом месяце');
    let answer = prompt('Во сколько обойдется');

    if ((typeof(question)) === 'string' && (typeof(question)) !== null && (typeof(answer)) !== null  
    && question != '' && answer != '' && question.length < 50){
        console.log('Done');
        appData.expenses[question] = answer;
    } else{               
        i--;
    }
}
*/

let i = 0;
do {
    let question = prompt('Введите обязательную статью расходов в этом месяце');
    let answer = prompt('Во сколько обойдется');

    if ((typeof(question)) === 'string' && (typeof(question)) !== null && (typeof(answer)) !== null  
    && question != '' && answer != '' && question.length < 50){
        console.log('Done');
        appData.expenses[question] = answer;
    } else{               
        i--;
    }
    i++;
}while (i<2)


appData.moneyOneDay = appData.budget / 30;
alert('Ваш бюджет на 1 день: ' + appData.moneyOneDay);


if (appData.moneyOneDay < 100){
    console.log('Минимальный уровень достатка');
} else if(appData.moneyOneDay > 100 && appData.moneyOneDay < 2000){
    console.log('Средний уровень достатка');
} else if(appData.moneyOneDay > 2000 ){
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}






console.log(appData.expenses);