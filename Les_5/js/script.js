let menu = document.getElementsByClassName('menu'),
    curentMenu = menu[0];

let menuItem = document.getElementsByClassName('menu-item');
curentMenu.insertBefore(menuItem[2], menuItem[1]);

let newBtn = document.createElement('li');         
         newBtn.classList.add('menu-item');
         newBtn.textContent = 'Пятый пункт';
         curentMenu.appendChild(newBtn);

let backGrImg = document.querySelector('body');
    backGrImg.style.backgroundImage = 'url(./img/apple_true.jpg)';
    
let text = document.getElementById('title');
    text.textContent = 'Мы продаем только подлинную технику Apple';

let col = document.getElementsByClassName('column'),
    curentCol = col[1];
let advertising = document.getElementsByClassName('adv');    
    curentCol.removeChild(advertising[0]);
    
let answ = prompt('Какое ваше отношение к технике apple?');
let promtAnsw = document.getElementById('prompt');
promtAnsw.textContent = answ;

    




/*
    
   
    adv = document.getElementsByClassName("adv")[0],    
    promptforApple = document.querySelector("#prompt"),
*/