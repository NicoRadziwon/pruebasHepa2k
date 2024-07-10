const container = document.getElementById('container');
const leftSide = document.getElementById('leftSide');
const botonCircular = document.getElementById('botonesSlide');
const rightSide = document.getElementById('rightSide');

const pLeftSideVideo = `    <div id="videoPatternV" class="videoPattern">
                            <div id="patternVapo"></div>
                                <video autoplay muted loop id="leftSideVideo" class="side left">
                                    <source src="./videos/VAPO.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div id="likesVapo" class="likesVapo"></div>`;

const pRightSideVideo = `   <div id="videoPatternE" class="videoPattern">
                                <div id="patternEnElHall"></div>
                                <video autoplay muted loop id="rightSideVideo" class="side right"> 
                                    <source src="./videos/EN-EL-HALL.mp4" type="video/mp4">
                                </video>
                                </div>
                            <div id="likesEnElHall" class="likesEnElHall"></div>`;

const pBotones = `  <img class="imgLogo" src="./logos/logo.jpg">
                    <button id="botonIzq" class="mitad izquierda" onclick="accionIzquierda1()">
                        <img id="anillo1" class="imgAnillo1" src="./logos/PNG-OBJ-SEPARADOS/PNG-ANILLO1.png">
                    </button>
                    <button id="botonDer" class="mitad derecha" onclick="accionDerecha1()">
                        <img id="anillo2" class="imgAnillo2" src="./logos/PNG-OBJ-SEPARADOS/PNG-ANILLO2.png">
                    </button>`;

const pLikesE = `    <label class="containerLikeEnElHall">
                        <input type="checkbox" onclick="likeEnElHall()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="50px" width="50px" class="like">
                        <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"></path>
                        </svg>
                        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" class="celebrate">
                            <polygon points="0,0 10,10"></polygon>
                            <polygon points="0,25 10,25"></polygon>
                            <polygon points="0,50 10,40"></polygon>
                            <polygon points="50,0 40,10"></polygon>
                            <polygon points="50,25 40,25"></polygon>
                            <polygon points="50,50 40,40"></polygon>
                        </svg>
                    </label>`;

function innerDOM() {
    leftSide.innerHTML = pLeftSideVideo;
    botonCircular.innerHTML = pBotones;
    rightSide.innerHTML = pRightSideVideo;

    setTimeout(() => {
        document.getElementById("patternVapo").classList.add('patternVapo');
        document.getElementById("patternEnElHall").classList.add('patternEnElHall');
    }, 100);
}
innerDOM();
