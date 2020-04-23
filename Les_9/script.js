let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);

let width2 = box.offsetWidth,
    height2 = box.offsetHeight;

console.log(width2);
console.log(height2);


let width3 = box.scrollWidth,
    height3 = box.scrollHeight;

console.log(width3);
console.log(height3);

console.log(box.getBoundingClientRect());
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.clientWidth);

btn.addEventListener('click', function(){
    box.style.height = box.scrollHeight + 'px';
});


scrollBy(0, 200);
scrollTo(0, 200);