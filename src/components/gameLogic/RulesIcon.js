import React from 'react'
import { useDispatch } from 'react-redux';

import { toggleShowRulesScreen } from '../../actions/ui';


export const RulesIcon = () => {

    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch( toggleShowRulesScreen() );
    }

    return (
        <i
            className="icon fas fa-book"
            onClick={ handleToggle }
        ></i>
    )
}
