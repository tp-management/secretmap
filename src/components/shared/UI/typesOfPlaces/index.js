import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./interestsFlex.module.css"
import { DEFAULT_OPTIONS } from './Data';

const TypesOfInterests = (props) => {

    const [selectedInterestsArray, setSetectedInterestsArray] = useState(props.selected_types || []);

    
    const FlexItem = ({item}) => {

    
        const ItemClickHandler = () => {

            const doesItemExists = selectedInterestsArray.filter(element => element.key === item.key).length>0;

            if(!doesItemExists)setSetectedInterestsArray([...selectedInterestsArray, item])
            else{
                setSetectedInterestsArray(
                    selectedInterestsArray.filter(element => {
                        return element.key !== item.key
                    })
                )
            }

        }

        const isSelected = selectedInterestsArray.filter(interest => {
            return item && (interest.key === item.key);
        }) ;

    
        return <div onClick={ItemClickHandler} className={`${styles.fl_box}`}>
            <div className={`${styles.flex_item} ${isSelected[0] && styles.flex_item_selected}`}>
                <img src={item.icon} alt='' />
                <p>{item && item.value}</p>
            </div>
        </div>
    }

    useEffect(() => {
        props.onChangeState(selectedInterestsArray);
    })

    return (
        <div className={styles.container}>
            {DEFAULT_OPTIONS.map((item, key) => <FlexItem key={key} item={item} />)}
        </div>
    );
}

export default TypesOfInterests;