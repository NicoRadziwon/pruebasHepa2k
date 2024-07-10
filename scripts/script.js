const leftSideVideo = document.getElementById('leftSideVideo');
const rightSideVideo = document.getElementById('rightSideVideo');
const botonIzq = document.getElementById('botonIzq');
const botonDer = document.getElementById('botonDer');
const smokeFilter = document.getElementById('smokeFilter');
const anillo1 = document.getElementById('anillo1');
const anillo2 = document.getElementById('anillo2');
const likesVapo = document.getElementById('likesVapo');
const likesEnElHall = document.getElementById('likesEnElHall');
const patternVapo = document.getElementById('patternVapo');
const patternEnElHall = document.getElementById('patternEnElHall');

const getMobileOS = () => {
    const ua = navigator.userAgent
    if (/android/i.test(ua)) {
      return "Android"
    }
    else if (/iPad|iPhone|iPod/.test(ua)){
      return "iOS"
    }
    return "Other"
}

const os = getMobileOS();

const URLapi = 'https://668c33570b61b8d23b0cc0e8.mockapi.io/metrica/likes';

let side = null;
let banderaV = false;
let banderaE = false;
let countV = 0;
let countE = 0;
let contadorVE = [];
let totalV = 0;
let totalE = 0;

function accionIzquierda() {
    if (leftSide.classList.contains("vistoLeft") && rightSide.classList.contains("vistoRight") && 1 == 2){
        resetSides();
        videosVistos();
    } else {
        if (side !== 'left'){
            if (window.innerWidth > 1024){
                leftSide.style.visibility = "visible";
                leftSide.style.flex = 1;
                rightSide.style.flex = 0;
                rightSide.style.visibility = "hidden";
                botonCircular.style.left = "90%";
            } else {
                if (os == 'Android' || os == 'Other') {
                    botonCircular.style.left = "80%";
                    container.style.transform = "rotate(90deg)";
                } else {
                    botonCircular.style.left = "70%";
                }
                leftSide.style.removeProperty('display');
                container.style.width = "100vh";
                container.style.height = "100vw";
                rightSide.style.display = "none";
                
            }
            botonCircular.style.right = "0";
            patternVapo.style.display = "none";
            patternEnElHall.style.display = "none";
            leftSideVideo.muted = false;
            leftSideVideo.volume = 0.3;
            leftSideVideo.load();
            rightSideVideo.muted = true;
            side = 'left';
            leftSide.classList.add("vistoLeft");
            likesVapo.style.display = "block";
            likesEnElHall.style.display = "none";
        } else {
            resetSides(); 
            leftSideVideo.muted = true;
            rightSideVideo.muted = true;
        }
    }
}
    

function accionDerecha() {
    if (leftSide.classList.contains("vistoLeft") && rightSide.classList.contains("vistoRight") && 1 == 2){
        resetSides();
        videosVistos();
    } else {
        if (side !== 'right'){
            if (window.innerWidth > 1024){
                rightSide.style.visibility = "visible";
                leftSide.style.flex = 0;
                rightSide.style.flex = 1;
                leftSide.style.visibility = "hidden";
                botonCircular.style.right = "90%";
            } else {
                if (os == 'Android' || os == 'Other') {
                    botonCircular.style.right = "80%";
                    container.style.transform = "rotate(90deg)";
                } else {
                    botonCircular.style.right = "70%";
                }
                rightSide.style.removeProperty('display');
                container.style.width = "100vh";
                container.style.height = "100vw";
                leftSide.style.display = "none";
            }
            botonCircular.style.left = "0";
            patternVapo.style.display = "none";
            patternEnElHall.style.display = "none";
            rightSideVideo.muted = false;
            rightSideVideo.volume = 0.3;
            rightSideVideo.load();
            leftSideVideo.muted = true;
            side = 'right';
            rightSide.classList.add("vistoRight");
            likesEnElHall.style.display = "block";
            likesVapo.style.display = "none";
        } else {
            resetSides(); 
            leftSideVideo.muted = true;
            rightSideVideo.muted = true;
            
        }
    }
}

const svgs = `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="50px" width="50px" class="like">
                    <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"></path>
                </svg>
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" class="celebrate">
                    <polygon points="0,0 10,10"></polygon>
                    <polygon points="0,25 10,25"></polygon>
                    <polygon points="0,50 10,40"></polygon>
                    <polygon points="50,0 40,10"></polygon>
                    <polygon points="50,25 40,25"></polygon>
                    <polygon points="50,50 40,40"></polygon>
                </svg>`;

function accionIzquierda1() {
    if(container.classList.contains('botonesMedio')){
        container.classList.add('botonesIzquierda');
        container.classList.remove('botonesMedio');
        document.getElementById('videoPatternV').innerHTML = '';
        document.getElementById('videoPatternE').innerHTML = '';
        const videoVapo = ` <video autoplay load volume="0.3" id="leftSideVideo" class="side left"> 
                                <source src="./videos/VAPO.mp4" type="video/mp4">
                            </video>`;
        const pLikesV = `   <label id="labelSvg" class="containerLikeVapo">
                                <input type="checkbox" onclick="likeVapo()">
                            </label>`;
        document.getElementById("videoPantallaCompletaVapo").innerHTML = videoVapo;
        document.getElementById('likesVapo').innerHTML = pLikesV;
        document.getElementById('labelSvg').innerHTML += svgs;
        setTimeout(() => {
            document.getElementById('botonesSlide').style.left = "80%";
        }, 100);
    } else if (container.classList.contains('botonesIzquierda')){
        container.classList.add('botonesMedio');
        container.classList.remove('botonesIzquierda','botonesDerecha');
        document.getElementById("videoPantallaCompletaVapo").removeChild(document.getElementById("leftSideVideo"));
        document.getElementById('leftSide').innerHTML = pLeftSideVideo;
        document.getElementById('rightSide').innerHTML = pRightSideVideo;
        setTimeout(() => {
            document.getElementById('botonesSlide').style.left = "0";
            document.getElementById("patternVapo").classList.add('patternVapo');
            document.getElementById("patternEnElHall").classList.add('patternEnElHall');
        }, 100);
    }
}

function accionDerecha1() {
    if(container.classList.contains('botonesMedio')){
        container.classList.add('botonesDerecha');
        container.classList.remove('botonesMedio');
        document.getElementById('videoPatternV').innerHTML = '';
        document.getElementById('videoPatternE').innerHTML = '';
        const videoEnElHall = ` <video autoplay load volume="0.3" id="rightSideVideo" class="side right"> 
                                    <source src="./videos/EN-EL-HALL.mp4" type="video/mp4">
                                </video>`;
        const pLikesE = `   <label id="labelSvg" class="containerLikeEnElHall">
                                <input type="checkbox" onclick="likeEnElHall()">
                            </label>`;
        document.getElementById("videoPantallaCompletaEnElHall").innerHTML = videoEnElHall;
        document.getElementById('likesEnElHall').innerHTML = pLikesE;
        document.getElementById('labelSvg').innerHTML += svgs;
        setTimeout(() => {
            document.getElementById('botonesSlide').style.right = "80%";
        }, 100);
    } else if (container.classList.contains('botonesDerecha')){
        container.classList.add('botonesMedio');
        container.classList.remove('botonesIzquierda','botonesDerecha');
        document.getElementById("videoPantallaCompletaEnElHall").removeChild(document.getElementById("rightSideVideo"));
        document.getElementById('leftSide').innerHTML = pLeftSideVideo;
        document.getElementById('rightSide').innerHTML = pRightSideVideo;
        setTimeout(() => {
            document.getElementById('botonesSlide').style.right = "0";
            document.getElementById("patternVapo").classList.add('patternVapo');
            document.getElementById("patternEnElHall").classList.add('patternEnElHall');
        }, 100);
    }
}

function resetSides() {
    if (window.innerWidth > 1024){
        leftSide.style.flex = 1;
        rightSide.style.flex = 1;
        rightSide.style.visibility = "visible";
        leftSide.style.visibility = "visible";

    } else {
        if (os == 'Android' || os == 'Other') {
            container.style.transform = "rotate(0deg)";
        } 
        leftSide.style.removeProperty('display');
        rightSide.style.removeProperty('display');
        container.style.transform = "rotate(0deg)";
        container.style.width = "100vw";
        container.style.height = "auto";
    }
    patternVapo.style.display = "block";
    patternEnElHall.style.display = "block";
    botonCircular.style.left = "0";
    botonCircular.style.right = "0";
    side = null;
    likesEnElHall.style.display = "none";
    likesVapo.style.display = "none";
}

function videosVistos() {
    botonDer.style.backgroundColor = "transparent";
    botonIzq.style.backgroundColor = "transparent";
    leftSideVideo.muted = true;
    rightSideVideo.muted = true;
    botonIzq.innerHTML = "";
    botonDer.innerHTML = "";
}

function likeVapo() {
    if(banderaV == false) {
        countV = 1;
        banderaV = true;
        CrearObjeto(countV, 0);
    }
}

function likeEnElHall() {
    if(banderaE == false) {
        countE = 1;
        banderaE = true;
        CrearObjeto(0, countE);
    }
}

function EnviarDatos(objeto, totalV) {
    const opciones = {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(objeto)
    }
    fetch(URLapi, opciones)
        .then((response) => {
            if(response.status == 201){
                console.log(totalV);
                return response.json();
            }
        })
}

function CrearObjeto(countV, countE) {
    let objeto = {
        id: "",
        name: "",
        likeCountV: countV,
        likeCountE: countE,
        viewDate: new Date().toLocaleString()
    }
    EnviarDatos(objeto);
}


function conexionAPI() {
    fetch(URLapi)
        .then((response) => response.json())
        .then((data) => contadorVE.push(...data))
        .then(() => {
            if (contadorVE.length > 0) {
                contadorVE.forEach(registro => {
                    totalV += registro.likeCountV;
                    totalE += registro.likeCountE;
                    
                });
                console.log('Video Vapo: ' + totalV);
                console.log('Video En el Hall: ' + totalE);
            }
        });
}