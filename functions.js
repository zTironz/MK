import {logs} from './logs.js';
import { player1, player2 } from './players.js';
// import { formFight } from './main.js'
const formFight= document.querySelector('.control');
const date = new Date();
const chat = document.querySelector('.chat');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const randomButton = document.querySelector('.button');


export const arenas = document.querySelector('.arenas');

export let createElement = (tag, className) => {
    const $tag = document.createElement(tag);

    if(className) {
        $tag.classList.add(className);
    }
    
    return $tag;
}


let randomNumber = (num) =>  {
    let number = Math.ceil(Math.random() * num);
    console.log(number);
    return number;
}

let  winHero = (name) => {
    const winTitle = createElement('div','winTitle');
    if(name)
    {
        winTitle.textContent = name + ' WINS';
    }
    else {
        winTitle.textContent = 'DRAW!';
    }

    return winTitle;
}

let  createReloadButton = () => {
    let reloadWrap =  createElement('div', 'reloadWrap');
    let reloadButton = createElement('button', 'button');
    reloadButton.textContent = 'RELOAD';
    arenas.appendChild(reloadWrap);
    reloadWrap.appendChild(reloadButton);
    reloadButton.addEventListener('click', function() {
        window.location.reload();
    })

}

export let  enemyAttack = () => {
    const hit = ATTACK[randomNumber(3) - 1];
    const defence = ATTACK[randomNumber(3) - 1];
    
    return {
        value: randomNumber(HIT[hit]),
        hit,
        defence
    }

}

export let playerAttack = () => {
    const attack = {};

    for(let item of formFight) {
        if(item.checked && item.name === "hit") {
            attack.value = randomNumber(HIT[item.value]);
            attack.hit = item.value;
        }
        if(item.checked && item.name === "defence") {
            attack.defence = item.value;
        }
        item.checked = false;
    }
    return attack;
}

export let showResult = () => {
    if( player1.hp === 0 || player2.hp === 0 ) {
        randomButton.disabled = true;
        createReloadButton();
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        arenas.appendChild(winHero(player2.name));
        generateLogs('end',player2.name,player1.name)
        
    } else if(player2.hp === 0 && player2.hp < player1.hp) {
        arenas.appendChild(winHero(player1.name));
        generateLogs('end',player1.name,player2.name)
       
    } else if ( player1.hp === 0 && player2.hp === 0 ){
        arenas.appendChild(winHero());
        generateLogs('draw')
        
    }
}

export function generateLogs(type, player1, player2, value) {
   
    let text;
    //console.log(text);
    //const el = `<p>${date.getHours()}:${date.getMinutes()} - ${text}</p>`;
    let el;

    switch(type) {
        case 'hit':
            text = logs[type][randomNumber(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)
            el = `<p>${date.getHours()}:${date.getMinutes()} - ${text} -${value} [${player2.hp}/100]</p>`;
            break;
        case 'defence':
            text = logs[type][randomNumber(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)
            el = `<p>${date.getHours()}:${date.getMinutes()} - ${text}</p>`;
            break;
        case 'start':
            text = logs[type].replace('[time]', `${date.getHours()}:${date.getMinutes()}`).replace('[player1]', player1.name).replace('[player2]', player2.name);
            el = `<p>${text}</p>`;
            break;
        case 'end':
            text = logs[type][randomNumber(logs[type].length) - 1].replace('[playerWins]', `${player1}`).replace('[playerLose]', `${player2}`);
             el = `<p>${date.getHours()}:${date.getMinutes()} - ${text}</p>`;
             break;
        case 'draw': 
             text = logs[type];
             el = `<p>${date.getHours()}:${date.getMinutes()} - ${text}</p>`;
             break;

    }

    chat.insertAdjacentHTML('afterbegin', el);
}