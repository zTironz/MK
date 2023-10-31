// export const player1= {
//     player: 1,
//     name: 'Scorpion',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//     weapon: ['Sword'],
//     attack: function() {
//         this.name + 'Fight...'
//     },
//     changeHp,
//     renderHP,
//     elHP
// }


// export const player2= {
//     player: 2,
//     name: 'Sub-Zero',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
//     weapon: ['Sword'],
//     attack: function() {
//         this.name + 'Fight...'
//     },
//     changeHp,
//     renderHP,
//     elHP
// }


// export function elHP() {
//     const plyaerLife = document.querySelector('.player' + this.player + ' .life');
//     console.log(this);
//     return plyaerLife;
// }

// export function renderHP() {
//     let hpRender = this.elHP();
//     hpRender.style.width = this.hp + '%';
// }

// export function changeHp(num) {
//     this.hp -= num;
//     if (this.hp <= 0) {
//         this.hp = 0;
//     }
// }


export class Player {
    constructor(props) {
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
    }
    elHP() {
        const plyaerLife = document.querySelector('.player' + this.player + ' .life');
        // console.log(this);
        return plyaerLife;
    }
    renderHP() {
        let hpRender = this.elHP();
        hpRender.style.width = this.hp + '%';
    }
    changeHp(num) {
        this.hp -= num;
        if (this.hp <= 0) {
            this.hp = 0;
        }
    }

    attack() {
        return this.name + ' Fight...'
            }
}

export const player1 = new Player(
    {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: './assets/scorpion.gif',
}
)



export const player2 = new Player(
    {
        player: 2,
        name: 'Sub-Zero',
        hp: 100,
        img: './assets/scorpion.gif',
}
)
