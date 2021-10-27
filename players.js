export const player1= {
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


export const player2= {
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


export function elHP() {
    const plyaerLife = document.querySelector('.player' + this.player + ' .life');
    console.log(this);
    return plyaerLife;
}

export function renderHP() {
    let hpRender = this.elHP();
    hpRender.style.width = this.hp + '%';
}

export function changeHp(num) {
    this.hp -= num;
    if (this.hp <= 0) {
        this.hp = 0;
    }
}
