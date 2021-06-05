import React from 'react'
import { useSelector } from 'react-redux';

import { SetChoice } from './SetChoice';
import { SetResults } from './SetResults';
import { Results } from './Results';
import { WinnerScreen } from './WinnerScreen';
import { ResultsIcon } from './ResultsIcon';
import { ResultsTab } from './ResultsTab';


export const GameLogic = () => {

    const { showResultsTab, currentScreen } = useSelector( state => state.ui );
 
    // FIXME: Cuidado que el orden de los players tiene que estar bien,
    // quizá es medio confuso para el usuario quién tiene que estar anotado primero.

    return (
        <>
            {
                ( currentScreen === 'set_choices' ) &&
                   <SetChoice />
            }

            {
                ( currentScreen === 'set_results' ) &&
                    <SetResults />
            }

            {
                ( currentScreen === 'results' ) &&
                    <Results />
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
        </>   
    )
}
