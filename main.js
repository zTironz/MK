console.log('Mortal Kombat')

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const ATTACK = ['head', 'body', 'foot'];

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
const formFight= document.querySelector('.control');
const chat = document.querySelector('.chat');
const date = new Date();

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

function playerAttack() {
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

function showResult() {
    if( player1.hp === 0 || player2.hp === 0 ) {
        randomButton.disabled = true;
        createReloadButton();
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        arenas.appendChild(winHero(player2.name));
        showEndMessage('end',player2.name,player1.name)
        
    } else if(player2.hp === 0 && player2.hp < player1.hp) {
        arenas.appendChild(winHero(player1.name));
        showEndMessage('end',player1.name,player2.name)
       
    } else if ( player1.hp === 0 && player2.hp === 0 ){
        arenas.appendChild(winHero());
        showDraw('draw')
        
    }
}

function generateLogs(type, player1, player2, value) {
   
    const text = logs[type][randomNumber(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
    //console.log(text);
    //const el = `<p>${date.getHours()}:${date.getMinutes()} - ${text}</p>`;
    let el;

    switch(type) {
        case 'hit':
            el = `<p>${date.getHours()}:${date.getMinutes()} - ${text} -${value} [${player2.hp}/100]</p>`;
            break;
        case 'defence':
            el = `<p>${date.getHours()}:${date.getMinutes()} - ${text}</p>`;
    }

    chat.insertAdjacentHTML('afterbegin', el);
}

function showStartMessage(type) {
    const text = logs[type].replace('[time]', `${date.getHours()}:${date.getMinutes()}`).replace('[player1]', player1.name).replace('[player2]', player2.name);
    const el = `<p>${text}</p>`;
    chat.insertAdjacentHTML('afterbegin', el);
}

function showEndMessage(type,player1,player2) {
    const text = logs[type][randomNumber(logs[type].length) - 1].replace('[playerWins]', `${player1}`).replace('[playerLose]', `${player2}`);
    const el = `<p>${date.getHours()}:${date.getMinutes()} - ${text}</p>`;
    chat.insertAdjacentHTML('afterbegin', el);
}

function  showDraw(type) {
    const text = logs[type];
    const el = `<p>${date.getHours()}:${date.getMinutes()} - ${text}</p>`;
    chat.insertAdjacentHTML('afterbegin', el);
}

showStartMessage('start');

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