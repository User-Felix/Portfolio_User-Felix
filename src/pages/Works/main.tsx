import Toolbar from "../../components/toollbar/toolbar";
import './works.css';
import Calculadora from "../../assets/Calculadora.png";
import DetonaHalph from "../../assets/detona-halp.png";
import GameMania from "../../assets/game-mania.png";
import Maratona from "../../assets/MaratonaDiscover.png";
import Memoria from "../../assets/memoria.png";
import IMC from "../../assets/IMC.png"
import JokenPo from "../../assets/JKP.png";
import Piano from "../../assets/piano.png";
import Pomodoro from "../../assets/Pomodoro.png"
import Stock from "../../assets/stock.png"
import ToDoList from "../../assets/TO-DO-LIST.png";
import YuGiYo from "../../assets/yu-gi-yo.png";
import Working from "../../assets/Progress _Outline.svg"

export default function Works() {
    return (
        <>
            <Toolbar />
            <main id="container-works">
                <div id="content-works">
                    <div id="card">
                        <img src={Maratona}/>
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/Maratona_Discover/index.html"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                    <div id="card">
                        <img src={GameMania}/>
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/Game_Mania/"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                    <div id="card">
                        <img src={JokenPo}/>
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/Jokenpo/" rel="noopener noreferrer">WEBSITE</a>
                    </div>
                </div>
                <div id="content-works">
                    <div id="card">
                        <img src={Calculadora}/>
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/Calculadora-Simples/"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                    <div id="card">
                        <img src={IMC} />
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/IMC/" rel="noopener noreferrer">WEBSITE</a>
                    </div>
                    <div id="card">
                        <img src={Pomodoro} />
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/Pomodoro/"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                </div>
                <div id="content-works">
                    <div id="card">
                        <img src={ToDoList} />
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/TO-DO-List-simple/"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                    <div id="card">
                        <img src={Stock} />
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/Inventory-management/pages/home/index.html"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                    <div id="card">
                        <img src={YuGiYo} />
                        <a target="_blank" id="btn-a" href="https://raposa-dev.github.io/js-yugioh-assets/index.html"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                </div>
                <div id="content-works">
                    <div id="card">
                        <img src={Piano} />
                        <a href="https://raposa-dev.github.io/Simulador-De-Piano/index.html" id="btn-a" target="_blank"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                    <div id="card">
                        <img src={Memoria} />
                        <a href="https://raposa-dev.github.io/Game-Memory/index.html" id="btn-a" target="_blank"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                    <div id="card">
                        <img src={DetonaHalph} />
                        <a href="https://raposa-dev.github.io/Game-Detona-Ralph/index.html" id="btn-a" target="_blank"
                            rel="noopener noreferrer">WEBSITE</a>
                    </div>
                </div>
                <div id="content-works">
                    <div id="card">
                        <img src={Working} />
                        <p>Working...</p>
                    </div>
                    <div id="card">
                        <img src={Working} />
                        <p>Working...</p>
                    </div>
                    <div id="card">
                        <img src={Working} />
                        <p>Working...</p>
                    </div>
                </div>
            </main>
        </>
    )
}