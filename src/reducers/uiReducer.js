import { types } from "../types/types";

// const initialState = {
//     showGameConfig: true,
//     showSelectNumberOfPlayers: true,
// }

const fakeInitialState = {
    showGameConfig: false,
    showSetChoices: true
}


export const uiReducer = ( state = fakeInitialState, action ) => {
    

    switch ( action.type ) {

        
        case types.uiHideSelectNumberOfPlayers:
            return {
                ...state,
                showSelectNumberOfPlayers: false,
                showSetPlayers: true
            }
        
        case types.uiHideSetPlayers:
            return {
                ...state,
                showSetPlayers: false,
                showSetCardLimit: true
            }

        case types.uiHideCardLimit:
            return {
                ...state,
                showSetCardLimit: false,
                showSetWinningScore: true
            }

        case types.uiHideSetWinningScore:
            return {
                ...state,
                showGameConfig: false,
                showSetWinningScore: false,
                showSetChoices: true
            }

    
        default:
            return state;
    }    
}
