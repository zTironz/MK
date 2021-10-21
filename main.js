console.log('Mortal Kombat')

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
const formFight= document.querySelector('.control');

const player1= {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword'],
    attack: function() {
        this.name + 'Fight...'
    },
    changeHp,
    renderHP,
    elHP
}

const player2= {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Sword'],
    attack: function() {
        this.name + 'Fight...'
    },
    changeHp,
    renderHP,
    elHP
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if(className) {
        $tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(myHero) {
    const $player = createElement('div','player' + myHero.player);
    const progressbar = createElement('div','progressbar');
    const character = createElement('div','character');
    const life = createElement('div','life');
    const name = createElement('div','name');
    const img = createElement('img');

    name.textContent = myHero.name;
    life.style.width = myHero.hp + "%";
    img.src = myHero.img;

    $player.appendChild(progressbar);
    $player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
    
    return $player
}
function randomNumber(num) {
    let number = Math.ceil(Math.random() * num);
    console.log(number);
    return number;
}

function changeHp(num) {
    this.hp -= num;
    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHP() {
    const plyaerLife = document.querySelector('.player' + this.player + ' .life');
    console.log(this);
    return plyaerLife;
}

function renderHP() {
    let hpRender = this.elHP();
    hpRender.style.width = this.hp + '%';
}


function winHero(name) {
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

function createReloadButton() {
    let reloadWrap =  createElement('div', 'reloadWrap');
    let reloadButton = createElement('button', 'button');
    reloadButton.textContent = 'RELOAD';
    arenas.appendChild(reloadWrap);
    reloadWrap.appendChild(reloadButton);
    reloadButton.addEventListener('click', function() {
        window.location.reload();
    })

}


// randomButton.addEventListener('click', function() {
//     // changeHp(player1)
//     // changeHp(player2)
//     console.log(player1.hp)
//     player1.changeHp(randomNumber(20))
//     console.log(player1.hp)
//     player1.renderHP()
//     player2.changeHp(randomNumber(20))
//     player2.renderHP()

//     if( player1.hp === 0 || player2.hp === 0 ) {
//         randomButton.disabled = true;
//         createReloadButton()
//     }

//     if(player1.hp === 0 && player1.hp < player2.hp) {
//         arenas.appendChild(winHero(player2.name));
        
//     } else if(player2.hp === 0 && player2.hp < player1.hp) {
//         arenas.appendChild(winHero(player1.name));
       
//     } else if ( player1.hp === 0 && player2.hp ===0 ){
//         arenas.appendChild(winHero());
        
//     }
// })

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

function enemyAttack() {
    const hit = ATTACK[randomNumber(3) - 1];
    const defence = ATTACK[randomNumber(3) - 1];
    
    return {
        value: randomNumber(HIT[hit]),
        hit,
        defence
    }

}

formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    console.dir(formFight);
    const enemy = enemyAttack();
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
    console.log(attack, 'atack');
    console.log(enemy, 'enemy');


    if(attack.hit != enemy.defence) {
        player2.changeHp(attack.value);
        player2.renderHP();
    }

    if(enemy.hit != attack.defence) {
        player1.changeHp(enemy.value);
        player1.renderHP();
    }
    // player1.changeHp(enemy.value)
    // player1.renderHP()
    // player2.changeHp(attack.value)
    // player2.renderHP()
    if( player1.hp === 0 || player2.hp === 0 ) {
        randomButton.disabled = true;
        createReloadButton();
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        arenas.appendChild(winHero(player2.name));
        
    } else if(player2.hp === 0 && player2.hp < player1.hp) {
        arenas.appendChild(winHero(player1.name));
       
    } else if ( player1.hp === 0 && player2.hp ===0 ){
        arenas.appendChild(winHero());
    }
})