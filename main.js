// DOM - document object model
// Получение элементов из HTML верстки

let text = document.getElementById("text");
console.log(text)
let link = document.getElementById("link");
console.log(link)
let item1 = document.getElementById("item1");
console.log(item1)

let getInput = document.getElementById("getInput")
// выводим информацию из инпута
let input = document.getElementById("input")


// функция при клике передает в консоль значение и стирает
getInput.onclick = function ()
{
// value - текст из инпута (значение)
console.log(`текст из инпута = ${input.value}`)
input.value = "";
}
// работа с текстом элементов

// textContent - свойство , которое хнаит в себе текст элемента

console.log(`Tекст в теге р  = ${text.textContent}`)
console.log(`Tекст в теге li с значением item1  = ${item1.textContent}`)


// изменене текста в теге
let changeTxt = document.getElementById("changeTxt");
let changeBtn = document.getElementById("changeBtn");
let flag = 0;
changeBtn.onclick = function ()
{// обращение к инпуту и его значению
    //changeTxt.textContent = input.value

if (flag == 0)
{
    changeTxt.textContent = "текст поменялся"
    flag = 1;
}
    else
    {
        changeTxt.textContent = "Нажми на кнопку чтобы изменить текст"
        flag = 0;
    }
    console.log(`значение переменной flag = ${flag}`)
}

// кликер
//let click = 0;
let clicker = document.getElementById("clicker");

clicker.onclick = function () 
{
    //click++
    //clicker.textContent = click
    if(clicker.textContent < 20 ) 
    {
        clicker.textContent = Number(clicker.textContent) + 1
    } 
    else
    {
        clicker.textContent = 0
    }

}

// textContent
let testlist = document.getElementById("testlist")
console.log(testlist.textContent)

//inner html
let innerp = document.getElementById("innerp")
let innerbtn = document.getElementById("innerbtn")
innerbtn.onclick = function () 
{
    innerp.innerHTML = `<a href ="#">ссылка на бонус</a>`
}

// пользователь вводит имя и программа приветсвует его
let helloinp = document.getElementById("helloinp")
let hellobtn = document.getElementById("hellobtn")
let hellotxt = document.getElementById("hellotxt")