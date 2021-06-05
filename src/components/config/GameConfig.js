import React from 'react';
import { useSelector } from 'react-redux';

import { SelectNumberOfPlayers } from './SelectNumberOfPlayers';
import { SetCardLimit } from './SetCardLimit';
import { SetPlayersNames } from './SetPlayersNames';
import { SetWinningScore } from './SetWinningScore';


export const GameConfig = () => {

    const { currentScreen } = useSelector( state => state.ui );

    return (
        <main className="game-config">
            {
                ( currentScreen === 'select_number_of_players' ) &&
                    <SelectNumberOfPlayers />
            }

            {
                ( currentScreen === 'set_player_names' ) &&
                    <SetPlayersNames />
            }

            {
                ( currentScreen === 'set_card_limit' ) &&
                    <SetCardLimit />
            }

            {
                ( currentScreen === 'set_winning_score' ) &&
                    <SetWinningScore />
            }
        </main>
    )
}
