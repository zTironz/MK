import { arenas,createElement,enemyAttack,playerAttack,showResult,generateLogs } from './functions.js';
import { player1, player2 } from './players.js';

export const formFight= document.querySelector('.control');



export default class Game{
    constuctor() {
 
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

    

    start() {
        generateLogs('start',player1,player2);
        arenas.appendChild(this.createPlayer(player1));
        arenas.appendChild(this.createPlayer(player2));
        formFight.addEventListener('submit', function(e) {
            e.preventDefault();
            console.dir(formFight);
            const enemy = enemyAttack();
            const player = playerAttack();
            
            console.log(player, 'atack');
            console.log(enemy, 'enemy');
        
            if(player.defence !== enemy.hit) {
                player1.changeHp(enemy.value);
                player1.renderHP();
                generateLogs('hit', player2, player1, enemy.value)
                //generateLogs('defence', player1, player2)
            }
            if(enemy.defence !== player.hit) {
                player2.changeHp(player.value);
                player2.renderHP();
                generateLogs('hit', player1, player2, player.value)
                //generateLogs('defence', player1, player2)
            }
            if(player.defence === enemy.hit) {
                generateLogs('defence', player2, player1)
            }
            if(enemy.defence === player.hit) {
                generateLogs('defence', player1, player2)
            }
        
            showResult()
            
        })
    }



}


