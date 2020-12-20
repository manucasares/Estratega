import { types } from "../types/types";


const fakeInitialState = {
    totalPlayers: 3,
    cardLimit: 7,
    currentCardsDealt: 1,
    winningScore: 25,
}


export const configReducer = ( state = fakeInitialState, action ) => {

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

        default:
            return state;;
    }


}