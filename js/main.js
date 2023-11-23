// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)


// отримуємо елемент "p" з "html"
let textRef = document.querySelector('p');

// створюємо тег "img"
let imgRef = document.createElement('img');

// після тега "p" додаємо тег "img"
textRef.after(imgRef);

function showImg() {
    let randomImg = Math.floor(Math.random() * 9) + 1;
    imgRef.src = `./images/${randomImg}.jpg`;
}
showImg();