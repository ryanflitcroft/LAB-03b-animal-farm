// import functions
const catImage = document.getElementById('cat-image');
const horseImage = document.getElementById('horse-image');
const dogImage = document.getElementById('dog-image');

const catSound = document.getElementById('cat-sound');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
// reference needed DOM elements

catImage.addEventListener('click', () => {
    catSound.play();
})

horseImage.addEventListener('click', () => {
    horseSound.play();
})

dogImage.addEventListener('click', () => {
    dogSound.play();
})


document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        catSound.play()
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        dogSound.play()
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        horseSound.play()
    }
});

// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
