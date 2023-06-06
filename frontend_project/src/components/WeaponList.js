import Weapon from "./Weapon";
import axeBtn from "../assets/btn/axe.png"
import swordBtn from "../assets/btn/sword_2.png"
import daggerBtn from "../assets/btn/dagger.png"
import spearBtn from "../assets/btn/spear.png"
const WeaponList = ({shop, buyWeapon}) => {

    const imageArray = [{name: "Great axe", image: axeBtn}, {name: "Sword", image: swordBtn}, {name: "Dagger", image: daggerBtn}, {name: "Spear", image: spearBtn}]

    const availableWeapons = shop.weapons.filter((weapon) => {
        return !weapon.player; 
    })

    const weaponItems = availableWeapons.map((weapon) => {
        return <Weapon key={weapon.id} weapon={weapon} buyWeapon={buyWeapon} />
    })

    return (
        <>   
            <div id="item_btns">
                {availableWeapons.map((availableWeapon) => {
                    return (
                    <div key={availableWeapon.name}>
                        <img src={imageArray.find((image) => image.name === availableWeapon.name).image} id="g_axe" onClick={()=> {buyWeapon(availableWeapon.id)}}/>
                            <div className="hide">
                                <li>Max Damage: {availableWeapon.maxDamage}</li>
                                <li>Min Damage: {availableWeapon.minDamage}</li>
                                <li>Block Chance: {availableWeapon.blockChance}</li>
                                <li>Price: {availableWeapon.price}</li>
                            </div>
                    </div>
                    );
                })}
            </div>
            {weaponItems}
        </>
    )

}

export default WeaponList;