
const shirt = document.querySelector('svg');
const btnShirt = document.querySelectorAll('.color-button');

for (let i = 0; i < btnShirt.length; i++) {
    btnShirt[i].addEventListener('click', () => {
    shirt.style = `fill : ${getComputedStyle(btnShirt[i]).backgroundColor}`;
});
};