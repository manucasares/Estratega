import { types } from "../types/types";

const initialState = {
    showGameConfig: true,
    showSelectNumberOfPlayers: true,
}

const fakeInitialState = {
    showGameConfig: false,
    showSetChoices: true,
    showResults: false
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
        
        case types.uiHideSetChoices:
            return {
                ...state,
                showSetChoices: false,
                showSetResults: true
            }
        
        case types.uiHideSetResults:
            return {
                ...state,
                showSetResults: false,
                showResults: true
            }

        case types.uiHideResults:
            return {
                ...state,
                showSetChoices: true,
                showResults: false,
                showDrawText: false
            }

        case types.uiShowWinnerScreen:
            return {
                ...state,
                showResults: false,
                showWinnerScreen: true,
                winnerId: action.payload
            }

        case types.uiShowDrawText:
            return {
                ...state,
                showDrawText: true
            }
    
        default:
            return state;
    }    
}
