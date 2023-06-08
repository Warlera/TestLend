const burger = document.querySelector('.burger');
const navBTN = document.querySelector('.nav-menu_buttons');
const huckBTN = document.querySelector('.nav-menu_buttons_Huck');

burger.addEventListener('click', () => {
    navBTN .classList.toggle('splase');
    huckBTN.classList.toggle('splase');
})

const accordion1 = document.querySelector('.accordion1');
const panel1 = document.querySelector('.panel1');
const accordion2 = document.querySelector('.accordion2');
const panel2 = document.querySelector('.panel2');
const accordion3 = document.querySelector('.accordion3');
const panel3 = document.querySelector('.panel3');
const accordion4 = document.querySelector('.accordion4');
const panel4 = document.querySelector('.panel4');
const accordion5 = document.querySelector('.accordion5');
const panel5 = document.querySelector('.panel5');
const accordion6 = document.querySelector('.accordion6');
const panel6 = document.querySelector('.panel6');

const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
const arrow4 = document.querySelector('.arrow4');
const arrow5 = document.querySelector('.arrow5');
const arrow6 = document.querySelector('.arrow6');


accordion1.addEventListener('click', () => {
    console.log(window.location.hash);
    panel1.classList.toggle('hidden');
    panel2.classList.add('hidden');
    panel3.classList.add('hidden');
    panel4.classList.add('hidden');
    panel5.classList.add('hidden');
    panel6.classList.add('hidden');
    arrow1.classList.toggle('arrow_rotate');
    arrow2.classList.remove('arrow_rotate');
    arrow3.classList.remove('arrow_rotate');
    arrow4.classList.remove('arrow_rotate');
    arrow5.classList.remove('arrow_rotate');
    arrow6.classList.remove('arrow_rotate');
})
accordion2.addEventListener('click', () => {
    panel2.classList.toggle('hidden');
    panel1.classList.add('hidden');
    panel3.classList.add('hidden');
    panel4.classList.add('hidden');
    panel5.classList.add('hidden');
    panel6.classList.add('hidden');
    arrow2.classList.toggle('arrow_rotate');
    arrow1.classList.remove('arrow_rotate');
    arrow3.classList.remove('arrow_rotate');
    arrow4.classList.remove('arrow_rotate');
    arrow5.classList.remove('arrow_rotate');
    arrow6.classList.remove('arrow_rotate');
})
accordion3.addEventListener('click', () => {
    panel3.classList.toggle('hidden');
    panel2.classList.add('hidden');
    panel1.classList.add('hidden');
    panel4.classList.add('hidden');
    panel5.classList.add('hidden');
    panel6.classList.add('hidden');
    arrow3.classList.toggle('arrow_rotate');
    arrow2.classList.remove('arrow_rotate');
    arrow1.classList.remove('arrow_rotate');
    arrow4.classList.remove('arrow_rotate');
    arrow5.classList.remove('arrow_rotate');
    arrow6.classList.remove('arrow_rotate');
})
accordion4.addEventListener('click', () => {
    panel4.classList.toggle('hidden');
    panel2.classList.add('hidden');
    panel3.classList.add('hidden');
    panel1.classList.add('hidden');
    panel5.classList.add('hidden');
    panel6.classList.add('hidden');
    arrow4.classList.toggle('arrow_rotate');
    arrow2.classList.remove('arrow_rotate');
    arrow3.classList.remove('arrow_rotate');
    arrow1.classList.remove('arrow_rotate');
    arrow5.classList.remove('arrow_rotate');
    arrow6.classList.remove('arrow_rotate');
})
accordion5.addEventListener('click', () => {
    panel5.classList.toggle('hidden');
    panel2.classList.add('hidden');
    panel3.classList.add('hidden');
    panel4.classList.add('hidden');
    panel1.classList.add('hidden');
    panel6.classList.add('hidden');
    arrow5.classList.toggle('arrow_rotate');
    arrow2.classList.remove('arrow_rotate');
    arrow3.classList.remove('arrow_rotate');
    arrow4.classList.remove('arrow_rotate');
    arrow1.classList.remove('arrow_rotate');
    arrow6.classList.remove('arrow_rotate');
})
accordion6.addEventListener('click', () => {
    panel6.classList.toggle('hidden');
    panel2.classList.add('hidden');
    panel3.classList.add('hidden');
    panel4.classList.add('hidden');
    panel5.classList.add('hidden');
    panel1.classList.add('hidden');
    arrow6.classList.toggle('arrow_rotate');
    arrow2.classList.remove('arrow_rotate');
    arrow3.classList.remove('arrow_rotate');
    arrow4.classList.remove('arrow_rotate');
    arrow5.classList.remove('arrow_rotate');
    arrow1.classList.remove('arrow_rotate');
})

const href1 = document.querySelector('.get_block_line_linck');
const href2 = document.querySelector('.btn_link');
const start = window.location.href.split('?start=')[1]
function TGhref1() {
    if(window.location.hash == '') {
        if(start != '' && start != undefined) {
            href1.href = 'https://t.me/megafon_bingo_bot?start=' + start; 
        } else {
            href1.href = 'https://t.me/megafon_bingo_bot'; 
        }
    } else {
        if(start != '' && start != undefined) {
            href1.href = 'https://t.me/megafon_bingo_bot?start=' + start.split('#')[0]; 
        } else {
            href1.href = 'https://t.me/megafon_bingo_bot'; 
        }
    }
}
function TGhref2() {
    if(window.location.hash == '') {
        if(start != '' && start != undefined && start != window.location.hash) {
            href2.href = 'https://t.me/megafon_bingo_bot?start=' + start.split('#')[0]; 
        } else {
            href2.href = 'https://t.me/megafon_bingo_bot'; 
        }
    } else {
        if(start != '' && start != undefined && start != window.location.hash) {
            href2.href = 'https://t.me/megafon_bingo_bot?start=' + start.split('#')[0]; 
        } else {
            href2.href = 'https://t.me/megafon_bingo_bot'; 
        }
    }
}
TGhref2();
TGhref1();

const file = document.querySelector('.file');
const play = document.querySelector('.play_btn');
const playImg = document.querySelector('.playIMG');
const pause = document.querySelector('.pause_btn');
const pauseImg = document.querySelector('.pauseIMG');
const stream = document.querySelector('iframe');
let radio = true;
let playerId;
function IFrame() {
    stream.src = 'https://facecast.net/w/' + playerId;
    stream.id = playerId 
}
function sendRequestStart() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rc.megafonevent.ru/control.json?' + Date.now(), true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const x = JSON.parse(xhr.responseText);
        radio = x.radio;
        if (playerId != x.url) {
            playerId = x.url
            IFrame();
        }
        console.log(radio);
      }
    };
    xhr.send();

}
sendRequestStart()
function sendRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rc.megafonevent.ru/control.json?' + Date.now(), true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const x = JSON.parse(xhr.responseText);
        radio = x.radio;
        if (playerId != x.url) {
            playerId = x.url
            IFrame();
        }
        console.log(radio);
        if (radio == false) {
            file.play();
            playImg.classList.add('splase');
            pauseImg.classList.remove('splase');
            window.frames[0].postMessage('{"frame":"'+ playerId + '","exec":"pause"}', 'https://facecast.net');
        } else {
            file.pause();
            playImg.classList.add('splase');
            pauseImg.classList.remove('splase');
            window.frames[0].postMessage('{"frame":"'+ playerId + '","exec":"play"}', 'https://facecast.net');
            window.frames[0].postMessage('{"frame":"'+ playerId + '","exec":"unmute"}', 'https://facecast.net');
        }
      }
    };

    xhr.send();

}
const songs = ['1','2','3','4','5','6','7','8','9','10',
'11','12','13','14','15','16','17','18','19',
'20','21','22','23']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let songIndex = getRandomInt(songs.length);
function Song(x) {
    file.src = 'https://cdn.megafonevent.ru/mp3/' + x + '.mp3'; 
}

Song(songs[songIndex])
let intervalId;
function startSendingRequest() {
    intervalId = setInterval(sendRequest, 10000); // отправляем запрос каждые 10 секунд
}
function stopSendingRequest() {
    clearInterval(intervalId); // останавливаем отправку запроса
}
function playSong() {
    if (radio == false) {
        file.play();
    } else {
        window.frames[0].postMessage('{"frame":"'+ playerId + '","exec":"play"}', 'https://facecast.net');
        window.frames[0].postMessage('{"frame":"'+ playerId + '","exec":"unmute"}', 'https://facecast.net');
    }
    playImg.classList.add('splase');
    pauseImg.classList.remove('splase');
}
function pauseSong() {
    file.pause();
    window.frames[0].postMessage('{"frame":"'+ playerId + '","exec":"mute"}', 'https://facecast.net'); 
    playImg.classList.remove('splase');
    pauseImg.classList.add('splase');
}

play.addEventListener('click', () => {
    file.currentTime = Math.random() * (file.duration - 1) + 1;
    playSong();
    startSendingRequest();
})
pause.addEventListener('click', () => {
    pauseSong();
    stopSendingRequest();
})
function nextSong() {
    songIndex = getRandomInt(songs.length)
    if (songIndex > songs.length -1) {
        songIndex = 0
    }
    Song(songs[songIndex])
    playSong()
}
file.addEventListener('ended', nextSong);