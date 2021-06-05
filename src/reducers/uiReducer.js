import { types } from "../types/types";

const initialState = {
    showResultsTab: false,
    sectionScreen: 'game_config',
    currentScreen: 'select_number_of_players'
}

export const uiReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        
        case types.uiShowWinnerScreen:
            return {
                ...state,
                currentScreen: 'winner_screen',
                winnerId: action.payload
            }

        case types.uiShowDrawText:
            return {
                ...state,
                showDrawText: action.payload
            }

        case types.uiToggleShowResultsTab:
            return {
                ...state,
                showResultsTab: !state.showResultsTab
            }

        case types.uiChangeSectionScreen:
            return {
                ...state,
                sectionScreen: action.payload
            }
        
        case types.uiChangeScreen:
            return {
                ...state,
                currentScreen: action.payload
            }
     
        default:
            return state;
    }    
}
