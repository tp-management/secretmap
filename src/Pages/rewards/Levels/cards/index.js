import React, { useContext, useState } from 'react'
import styles from "./CardList.module.css";
import CardItem from './item';
import Modal from './../../../../components/shared/UI/Modal';
import Popup from './popup';
import { CardsData } from './DATA';
import { UpdateLevel } from '../../../../components/utils/user/update';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { notify } from '../../../../components/shared/UI/toast';

const CardList = (props) => {
    const Auth = useContext(AuthContext);
    const [showLevelPopup, setShowLevelPopup] = useState(false);
    const [levelCardId, setLevelCardId] = useState(null);
    const [cardIsHidden, setCardIsHidden] = useState(false);
    const [cardIsUnlocked, setCardIsUnlocked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onModalClose = ()=>{
        setShowLevelPopup(false);
        setIsLoading(false)
    }

    const unlockLevelHandler = async() => {
        setIsLoading(true);

        try {
            const updateLevelRequest = await UpdateLevel(
                {
                    level_id:levelCardId,
                    bonus_price: CardsData[levelCardId - 1].price
                },
                Auth.authenticatedUser.token.access_token    
            )

            if(!updateLevelRequest.status){
                onModalClose();
                return notify(updateLevelRequest.message || "Cannot update your level", "error");
            }
            console.log("resp: ", updateLevelRequest)
            Auth.update({
                data: updateLevelRequest.data, 
                token: 
                {
                  access_token: updateLevelRequest.data.access_token,
                  refresh_token: updateLevelRequest.data.refresh_token
                } 
            })

            setIsLoading(false);

        } catch (error) {
            return notify(error.message || "Cannot update your level", "error");
        }
    }

  return (
    <>
        {   levelCardId &&
            <Modal
                show={showLevelPopup}
                onClose={onModalClose}
            >
                <Popup 
                    isLoading={isLoading}
                    unlocked={cardIsUnlocked}
                    hidden={cardIsHidden}
                    onUnlock={unlockLevelHandler} 
                    onClose={onModalClose} 
                    card={CardsData[levelCardId - 1]}
                />
            </Modal>
        }

        <div className={styles.row}>
            {
                CardsData.map(card => {
                    const AuthData = Auth.authenticatedUser && Auth.authenticatedUser.data;
                    const unlocked = AuthData && AuthData.level < card.no - 1;
                    const hidden = AuthData && AuthData.level > card.no ? true : false;

                    return  (
                        <CardItem 
                            key={card.no} 
                            no={card.no}
                            align_top={card.no % 2 === 0} 
                            level={card.level}
                            caption={card.caption}
                            onSubmitModal={()=>{  
                                setShowLevelPopup(true);
                                setLevelCardId(card.no);
                                setCardIsHidden(hidden);
                                setCardIsUnlocked(unlocked);
                            }}
                            unlocked={unlocked}
                            hidden={hidden}
                        />
                    )
                })
            }
        </div>
    </>
    )
}

export default CardList