import { useState } from "react"
import Avatar from 'avataaars';
import Button from "../button/Button";
import styles from "./Appearance.module.css";

export const Data = {
    Top: [
        "NoHair",
        "EyePatch",
        "Hat",
        "Hijab",
        "Turban",
        "WinterHat1",
        "WinterHat2",
        "WinterHat3",
        "WinterHat4",
        "LongHairBigHair",
        "LongHairBob",
        "LongHairBun",
        "LongHairCurly",
        "LongHairCurvy",
        "LongHairDreads",
        "LongHairFrida",
        "LongHairFro",
        "LongHairFroBand",
        "LongHairNotTooLong",
        "LongHairShavedSides",
        "LongHairMiaWallace",
        "LongHairStraight",
        "LongHairStraight2",
        "LongHairStraightStrand",
        "LongHairDreads01",
        "LongHairDreads02",
        "LongHairFrizzle",
        "LongHairShaggyMullet",
        "LongHairShortCurly",
        "LongHairShortFlat",
        "LongHairShortRound",
        "LongHairShortWaved",
        "LongHairSides",
        "LongHairTheCaesar",
        "LongHairTheCaesarSidePart",
    ],
    Accessories: [
        "Sunglasses",
        "Blank",
        "kurt",
        "Prescription01",
        "Prescription02",
        "Round",
        "Sunglasses",
        "Wayfarers",
    ],
    HatColor: [
        "PastelPink",
        "Auburn",
        "Black",
        "Blonde",
        "BlondeGolden",
        "Brown",
        "BrownDark",
        "PastelPink",
        "Blue",
        "Platinum",
        "Red",
        "SilverGray",
    ],
    FacialHairColor: [
        "Brown",
        "Auburn",
        "Black",
        "Blonde",
        "BlondeGolden",
        "BrownDark",
        "Platinum",
        "Red",
    ],
    Clothes: [
        "Hoodie",
        "BlazerShirt",
        "BlazerSweater",
        "CollarSweater",
        "GraphicShirt",
        "Overall",
        "ShirtCrewNeck",
        "ShirtScoopNeck",
        "ShirtVNeck"
    ],
    Colorfabric: [
        "Black",
        "Blue01",
        "Blue02",
        "Blue03",
        "Gray01",
        "Gray02",
        "Heather",
        "PastelBlue",
        "PastelGreen",
        "PastelOrange",
        "PastelRed",
        "PastelYellow",
        "Pink",
        "Red",
        "White"
    ],
    Eyes: [
        "Close",
        "Cry",
        "Default",
        "Dizzy",
        "EyeRoll",
        "Happy",
        "Hearts",
        "Side",
        "Squint",
        "Suprised",
        "Wink",
        "WinkWacky"
    ],
    EyeBrow: [
        "UpDownNatural",
        "Angry",
        "AngryNatural",
        "Default",
        "DefaultNatural",
        "FlatNatural",
        "RaisedExcited",
        "RaisedExcitedNatural",
        "SadConcerned",
        "SadConcernedNatural",
        "UnibrowNatural",
        "UpDown",
        "UpDownNatural"
    ],
    Mouth: [
        "Concerned",
        "Default",
        "Disbelief",
        "Eating",
        "Grimace",
        "Sad",
        "ScreamOpen",
        "Serious",
        "Smile",
        "Tongue",
        "Twinkle",
        "Vomit"
    ],
    Skin: [
        "Tanned",
        "Yellow",
        "Pale",
        "Light",
        "Black",
        "Brown",
        "DarkBrown",
    ]
}


export const MixAvatarApearance = (props) => {

    const [reload, setReload] = useState(false);


    const topType=Data.Top[Math.floor(Math.random()*Data.Top.length)]
    const accessoriesType=Data.Accessories[Math.floor(Math.random()*Data.Accessories.length)]
    const hatColor=Data.HatColor[Math.floor(Math.random()*Data.HatColor.length)]
    const facialHairType=Data.FacialHairColor[Math.floor(Math.random()*Data.FacialHairColor.length)]
    const clotheType=Data.Clothes[Math.floor(Math.random()*Data.Clothes.length)]
    const clotheColor=Data.Colorfabric[Math.floor(Math.random()*Data.Colorfabric.length)]
    const eyeType=Data.Eyes[Math.floor(Math.random()*Data.Eyes.length)]
    const eyebrowType=Data.EyeBrow[Math.floor(Math.random()*Data.EyeBrow.length)]
    const mouthType=Data.Mouth[Math.floor(Math.random()*Data.Mouth.length)]
    const skinColor=Data.Skin[Math.floor(Math.random()*Data.Skin.length)]
    

    const image_url = `https://avataaars.io/?avatarStyle=${'Transparent'}&topType=${topType}&accessoriesType=${accessoriesType}&hatColor=${hatColor}&facialHairType=${facialHairType}&clotheType=${clotheType}&clotheColor=${clotheColor}&eyeType=${eyeType}&eyebrowType=${eyebrowType}&mouthType=${mouthType}&skinColor=${skinColor}`;

    const submitHandler = () => {
        props.onSubmit(image_url);
    }

    return <div className={styles.avatar_container}>
        <Avatar
            className={styles.avatar}
            topType={topType}
            accessoriesType={accessoriesType}
            hatColor={hatColor}
            facialHairType={facialHairType}
            clotheType={clotheType}
            clotheColor={clotheColor}
            eyeType={eyeType}
            eyebrowType={eyebrowType}
            mouthType={mouthType}
            skinColor={skinColor}
        /> 

        <div className={styles.buttons_container}>


            <div className={styles.randomize_btn}>
                <Button
                    height="auto"  
                    onSubmit={() => setReload(!reload)} 
                    border="2px solid #EE7D15"
                    color="rgba(255, 255, 255, 0.8)" 
                >
                    <h1 style={{ padding: "0.7rem" }}>Randomize</h1>
                </Button>
            </div>

            <div className={styles.continue_btn}>
                <Button
                    height="auto"  
                    onSubmit={submitHandler} 
                    color="#EE7D15" 
                    border="2px solid #EE7D15" 
                >
                <h1 style={{ padding: "0.7rem", color: "white" }}>Continue</h1>
                </Button>
            </div>

        </div>

        
      </div>

}