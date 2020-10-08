const input = document.querySelector('input');
const form = document.querySelector('form');
let inputValue;

const redirect = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputValue = input.value;
        console.log('it works!')
        window.location.href = `https://en.wikipedia.org/wiki/${inputValue}`;
    })
}
redirect()