import { types } from "../types/types";


const fakeInitialState = {
    totalPlayers: 3,
    cardLimit: [ 1, 3, 5, 7 ],
    currentCardsDealt: 1,
    winningScore: 5,
}

const initialState = {
    currentCardsDealt: 1,
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

        case types.configChangeCardsDealt:
            return {
                ...state,
                currentCardsDealt: action.payload
            }

        default:
            return state;
    }


}