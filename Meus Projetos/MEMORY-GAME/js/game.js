const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');


const characters = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstcard = '';
let secondcard = '';

chechEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`parabéns ${spanPlayer.innerHTML}! Seu tempo Foi: ${timer.innerHTML}`);
    }
}

const checkCards = () => {
    const firstcharacters = firstcard.getAttribute('data-characters');
    const secondcharacters = secondcard.getAttribute('data-characters');

    if (firstcharacters === secondcharacters) {
        firstcard.firstChild.classList.add('disabled-card');
        secondcard.firstChild.classList.add('disabled-card');

        firstcard = '';
        secondcard = '';

        chechEndGame();

    } else {

        setTimeout(() => {

           firstcard.classList.remove('reveal-card');
           secondcard.classList.remove('reveal-card') 
           
           firstcard = '';
           secondcard = '';

        }, 500);

    }

}

const revealcard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    } 

    if (firstcard === '') {
        target.parentNode.classList.add('reveal-card');
        firstcard = target.parentNode;
    } else if (secondcard === '') {
        target.parentNode.classList.add('reveal-card');
        secondcard = target.parentNode;

        checkCards();
    }

}


const createCard = (characters) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${characters}.png')`;
    

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealcard);
    card.setAttribute('data-characters', characters)

    return card;

}

const loadGame = () => {

    const duplicatecharacters = [...characters, ...characters];

    const shuffledArray = duplicatecharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((characters) => {

        const card = createCard(characters);
        grid.appendChild(card);

    });
}

const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer .innerHTML = currentTime + 1;

    }, 1000);

}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');

    startTimer();
    loadGame();
}



