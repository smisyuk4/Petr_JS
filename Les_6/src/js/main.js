let btnStart = document.getElementById('start');

let resultTable = document.getElementsByClassName('result-table')[0];

let expensesItem = document.getElementsByClassName('expenses-item');

let btnConfirm1 = document.getElementsByClassName('expenses-item-btn')[0],
    btnConfirm2 = document.getElementsByClassName('optionalexpenses-btn')[0];

let btnCalculate = document.getElementsByClassName('count-budget-btn')[0];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
