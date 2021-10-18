console.log('Mortal Kombat')

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1= {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword'],
    attack: function() {
        this.name + 'Fight...'
    }
}

const player2= {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Sword'],
    attack: function() {
        this.name + 'Fight...'
    }
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

    $player.appendChild(progressbar)
    $player.appendChild(character)
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
    
    return $player
}

function changeHp(player) {
    const plyaerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= randomNumber(20);
    console.log(player.hp)
   

    if(player.hp <= 0) {
        player.hp = 0;
    }
    plyaerLife.style.width = player.hp + '%'; 
}

function randomNumber(num) {
    let number = Math.ceil(Math.random() * num);
    return number;
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


randomButton.addEventListener('click', function() {
    changeHp(player1)
    changeHp(player2)

    if( player1.hp === 0 || player2.hp === 0 ) {
        randomButton.disabled = true;
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        arenas.appendChild(winHero(player2.name));
    } else if(player2.hp === 0 && player2.hp < player1.hp) {
        arenas.appendChild(winHero(player1.name));
    } else if ( player1.hp === 0 && player2.hp ===0 ){
        arenas.appendChild(winHero());
    }
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
