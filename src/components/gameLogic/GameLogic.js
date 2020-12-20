import React from 'react'
import { useSelector } from 'react-redux';

import { SetChoice } from './SetChoice';


export const GameLogic = () => {

    const { showSetChoices } = useSelector( state => state.ui );
 
    return (
        <>
            {
                ( showSetChoices ) &&
                   <SetChoice />
            }
        </>
        
    )
}
