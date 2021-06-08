import React from 'react'
import { useSelector } from 'react-redux';

import { SetChoice } from './SetChoice';
import { SetResults } from './SetResults';
import { Scores } from './Scores';
import { WinnerScreen } from './WinnerScreen';
import { ResultsIcon } from './ResultsIcon';
import { ResultsTab } from './ResultsTab';


export const GameLogic = () => {

    const { showResultsTab, currentScreen } = useSelector( state => state.ui );

    return (
        <main>
            {
                ( currentScreen === 'set_choices' ) &&
                   <SetChoice />
            }

            {
                ( currentScreen === 'set_results' ) &&
                    <SetResults />
            }

            {
                ( currentScreen === 'scores' ) &&
                    <Scores />
            }

            {
                ( currentScreen === 'winner_screen' ) &&
                    <WinnerScreen />
            }

            {
                ( showResultsTab ) &&
                    <ResultsTab />
            }

            <ResultsIcon />
        </main>
    )
}
