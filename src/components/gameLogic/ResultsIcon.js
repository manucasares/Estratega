import React from 'react'
import { useDispatch } from 'react-redux';

import { toggleShowResultsTab } from '../../actions/ui';


export const ResultsIcon = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        
        dispatch( toggleShowResultsTab() );
    }

    return (
        <i
            className="fas fa-trophy"
            onClick={ handleClick }
        ></i>
    )
}
