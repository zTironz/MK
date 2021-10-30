import { arenas,createElement,enemyAttack,playerAttack,showResult,generateLogs,randomNumber } from './functions.js';
// import { player1, player2 } from './players.js';
import { Player } from './players.js'

export const formFight= document.querySelector('.control');

export let player1;
export let player2;


export default class Game{
    getplayer = async () => {
        const body = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        return body;
    }

    getEnemy = async () => {
        const body = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res => res.json());
        return body;
    } 

    showResult = () => {
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

    createPlayer(myHero) {
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

    getEnemyAttack = async ({hit,defence} = playerAttack) => {
        const body = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
    method: 'POST',
    body: JSON.stringify({
        hit,
        defence,
    })
});
let result = await body.json();
console.log(result);
return result
    }

    fight = async () => {
        
        const {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = await this.getEnemyAttack();
        const {hit, defence, value} = await this.getEnemyAttack();


        if(defence !== hitEnemy) {
            player1.changeHp(valueEnemy);
            player1.renderHP();
            generateLogs('hit', player2, player1, valueEnemy)
            //generateLogs('defence', player1, player2)
        }
        if(defenceEnemy !== hit) {
            player2.changeHp(value);
            player2.renderHP();
            generateLogs('hit', player1, player2, value)
            //generateLogs('defence', player1, player2)
        }
        if(defence === hitEnemy) {
            generateLogs('defence', player2, player1)
        }
        if(defenceEnemy === hit) {
            generateLogs('defence', player1, player2)
        }
        
        showResult()

    }


    start = async () => {
        
        const players = await this.getplayer();
        const enemy = await this.getEnemy();
        // console.log(players);
        const p1 = players[randomNumber(players.length)-1];
        const p2 = enemy;
        console.log(p1,p2);
        player1 = new Player({
            ...p1,
            player: 1,
            rootSelector: 'arenas',
        });
        player2 = new Player({
            ...p2,
            player: 2,
            rootSelector: 'arenas',
        });
        this.createPlayer(player1);
        this.createPlayer(player2);

        
        generateLogs('start',player1,player2);
        arenas.appendChild(this.createPlayer(player1));
        arenas.appendChild(this.createPlayer(player2));

        
        formFight.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // console.dir(formFight);
            const {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = enemyAttack();
            const {hit, defence, value} = playerAttack();
            
            
            // console.log(player, 'atack');
            // console.log(enemy, 'enemy');
        
            if(defence !== hitEnemy) {
                player1.changeHp(valueEnemy);
                player1.renderHP();
                generateLogs('hit', player2, player1, valueEnemy)
                //generateLogs('defence', player1, player2)
            }
            if(defenceEnemy !== hit) {
                player2.changeHp(value);
                player2.renderHP();
                generateLogs('hit', player1, player2, value)
                //generateLogs('defence', player1, player2)
            }
            if(defence === hitEnemy) {
                generateLogs('defence', player2, player1)
            }
            if(defenceEnemy === hit) {
                generateLogs('defence', player1, player2)
            }
            
            showResult()
            
            // this.fight()
        })
    }



}


