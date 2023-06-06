import {Link} from "react-router-dom";
import './Lobby.css';
import battleBtn from "../assets/btn/battle_btn.png"
import shopBtn from "../assets/btn/shop_btn2.png"
import Hero from '../components/Hero_sprite.js';  

const Lobby = ({activePlayer, startLevel1, startLevel2, startLevel3}) => {

    const handleStartGame = (event) => {
        if (activePlayer.numberOfWins === 0) {
            startLevel1();
        } else if (activePlayer.numberOfWins === 1) {
            startLevel2();
        } else {
            startLevel3();
        }
    }

    return(

        <section className="lobby-section" id="lobby">
            <div className="lobby-buttons"> 
                <Link to="/Shop"><img id="to-shop-btn" src={shopBtn} /></Link>
                <h4>Make sure you have a weapon before going to the battle</h4>
                <Link to="/Battle"><img id="to-battle-btn" src={battleBtn} onClick={handleStartGame}/></Link>

            </div>
            <div>
                <Hero/>
            </div>
        </section>

    )
}

export default Lobby;