import React from 'react';
import { useSelector } from 'react-redux';

import { SelectNumberOfPlayers } from './SelectNumberOfPlayers';
import { SetCardLimit } from './SetCardLimit';
import { SetPlayersNames } from './SetPlayersNames';
import { SetWinningScore } from './SetWinningScore';


export const GameConfig = () => {

    const { showSelectNumberOfPlayers, showSetPlayers, showSetCardLimit, showSetWinningScore } = useSelector( state => state.ui );

    return (
        <div className="game-config">
            {
                ( showSelectNumberOfPlayers ) &&
                    <SelectNumberOfPlayers />
            }

            {
                ( showSetPlayers ) &&
                    <SetPlayersNames />
            }

            {
                ( showSetCardLimit ) &&
                    <SetCardLimit />
            }

            {
                ( showSetWinningScore ) &&
                    <SetWinningScore />
            }
        </div>
    )
}
