import React from 'react'
import { useDispatch } from 'react-redux';

import { showResultsTab } from '../../actions/ui';


export const ResultsIcon = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        
        dispatch( showResultsTab() );
    }

    return (
        <i
            className="fas fa-trophy"
            onClick={ handleClick }
        ></i>
    )
}
