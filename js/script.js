const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');


but1.addEventListener('click', () => {
    toggleHide(header);
    toggleHide(card2);
    toggleRot(main);
    toggleHide(footer);
});

but2.addEventListener('click', () => {
    toggleHide(header);
    toggleHide(card1);
    toggleRot(main);
    toggleHide(footer);
});

function toggleHide(obj) {
    if (obj.classList.contains('hide')){
        obj.classList.remove('hide');
    } else {
        obj.classList.add('hide');
    }
}

function toggleRot(obj) {
    if (obj.classList.contains('rotaVid')){
        obj.classList.remove('rotaVid');
    } else {
        obj.classList.add('rotaVid');
    }
}
