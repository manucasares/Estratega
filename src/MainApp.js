import React from 'react';
import { useSelector } from 'react-redux';


import { GameConfig } from './components/config/GameConfig';
import { GameLogic } from './components/gameLogic/GameLogic';




// TODO:  Chequear por win


export const MainApp = () => {

    const { showGameConfig } = useSelector( state => state.ui );


    return (
        
        <>
        
            {
                ( showGameConfig ) &&
                    <GameConfig />
            }

            {
                ( !showGameConfig ) &&
                    <GameLogic />
            }

        </>
    )
}
