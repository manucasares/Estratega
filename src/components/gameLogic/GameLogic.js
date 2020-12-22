import React from 'react'
import { useSelector } from 'react-redux';

import { SetChoice } from './SetChoice';
import { SetResults } from './SetResults';
import { Results } from './Results';


export const GameLogic = () => {

    const { showSetChoices, showSetResults, showResults } = useSelector( state => state.ui );
 
    // FIXME: Cuidado que el orden de los players tiene que estar bien,
    // quizá es medio confuso para el usuario quién tiene que estar anotado primero.

    return (
        <>
            

            {
                ( showSetChoices ) &&
                   <SetChoice />
            }

            {
                ( showSetResults ) &&
                    <SetResults />
            }

            {
                ( showResults ) &&
                    <Results />
            }
        </>
        
    )
}
