console.log('Mortal Kombat')

const Scorpion= {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword'],
    attack: function() {
        this.name + 'Fight...'
    }
}

const Subzero= {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Sword'],
    attack: function() {
        this.name + 'Fight...'
    }
}

const arenas = document.querySelector('.arenas');

function createPlayer(player, myHero,) {
    const player1 = document.createElement('div');
    player1.classList.add(player);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    player1.appendChild(progressbar)
    player1.appendChild(character)

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = myHero.name;

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = myHero.hp + "%";

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    const img = document.createElement('img');
    img.classList.add('img');
    character.appendChild(img);
    img.src = myHero.img;
    
    arenas.appendChild(player1)
}

createPlayer('player1', Scorpion);
createPlayer('player2', Subzero);

console.log('test')