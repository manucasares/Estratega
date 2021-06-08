import React from 'react';
import { useSelector } from 'react-redux';

import { GameConfig } from './components/config/GameConfig';
import { GameLogic } from './components/gameLogic/GameLogic';
import { GameRules } from './components/config/GameRules';
import { RulesIcon } from './components/gameLogic/RulesIcon';


export const MainApp = () => {

    const { sectionScreen, showRulesScreen } = useSelector( state => state.ui );

    return (
        <>  
            {
                ( sectionScreen === 'game_config' ) &&
                    <GameConfig />
            }

            {
                ( sectionScreen === 'game_logic' ) &&
                    <GameLogic />
            }

            {
                ( showRulesScreen ) &&
                    <GameRules />
            }

            <RulesIcon />

        </>
    )
}
