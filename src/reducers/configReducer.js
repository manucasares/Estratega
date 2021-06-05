import { types } from "../types/types";

const initialState = {
    currentCardsDealt: 1,
}

export const configReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.configSetNumberOfPlayers:
            return {
                ...state,
                totalPlayers: action.payload
            }

        case types.configSetCardLimit:
            return {
                ...state,
                cardLimit: action.payload
            }

        case types.configSetWinningScore:
            return {
                ...state,
                winningScore: action.payload
            }

        case types.configChangeCardsDealt:
            return {
                ...state,
                currentCardsDealt: action.payload
            }

        case types.configIncreaseWinningScore:
            return {
                ...state,
                winningScore: state.winningScore + 10
            }

        default:
            return state;
    }
}