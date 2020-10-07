const input = document.querySelector('input');
const form = document.querySelector('form');
let div = document.querySelector('div')
let inputValue;
let link1;
let link2;
let link3;
let search =  document.getElementById('search');


const createLink = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputValue = input.value;
        link1 = `<a href="https://en.wikipedia.org/wiki/${inputValue}">${inputValue} on wikipedia</a>`
        link2 = `<a href="https://www.britannica.com/search?query=${inputValue}">${inputValue} on britannica</a>`
        console.log(link1 +'   '+ link2);
        div.setAttribute('style', `height = 100vh`)
        div.innerHTML = link1;
        console.log('it works!')

    })
}

createLink()

// document.querySelector('button').addEventListener('submit')