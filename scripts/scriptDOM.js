const container = document.getElementById('container');
const leftSide = document.getElementById('leftSide');
const botonCircular = document.getElementById('botonesSlide');
const rightSide = document.getElementById('rightSide');

const pLeftSideVideo = `    <div id="videoPatternV" class="videoPattern">
                                <img id="rightSideVideo" class="side left" src="./gifs/animationHumo.gif" class="humoVapo">
                            </div>`;

const pRightSideVideo = `   <div id="videoPatternE" class="videoPattern">
                                <div id="patternEnElHall"></div>
                                <video autoplay muted loop id="rightSideVideo" class="side right"> 
                                    <source src="./videos/EN-EL-HALL.mp4" type="video/mp4">
                                </video>
                            </div>`;

const pBotones = `  <button id="botonIzq" class="mitad izquierda" onclick="accionIzquierda()">
                        <img id="anillo1" class="imgAnillo1" src="./logos/PNG-OBJ-SEPARADOS/PNG-ANILLO1.png">
                    </button>
                    <button id="botonDer" class="mitad derecha" onclick="accionDerecha()">
                        <img id="anillo2" class="imgAnillo2" src="./logos/PNG-OBJ-SEPARADOS/PNG-ANILLO2.png">
                    </button>`;

function innerDOM() {
    leftSide.innerHTML = pLeftSideVideo;
    botonCircular.innerHTML = pBotones;
    rightSide.innerHTML = pRightSideVideo;
}

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

innerDOM();
