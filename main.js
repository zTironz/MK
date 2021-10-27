console.log('Mortal Kombat')

import { player1, player2 } from './players.js';
import { arenas,createElement,enemyAttack,playerAttack,showResult,generateLogs } from './functions.js'
export const formFight= document.querySelector('.control');



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


generateLogs('start',player1,player2);

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