import { types } from "../types/types";


const initialState = {
    playerSelector: 0
}

export const playersReducer = ( state = initialState, action ) => {
 
    switch ( action.type ) {
        
        case types.playersSetPlayers:
            return {
                ...state,
                players: action.payload
            }

        case types.playersSetChoice:

            const { id, choice } = action.payload;

            return {
                ...state,
                players: state.players.map( player => {
                    
                    if ( player.id === id ) {
                        player.choice = choice  
                    } 
 
                     return player;
                    
                })
            };

        case types.playersChangeSelector:
            return {
                ...state,
                playerSelector: action.payload
            }

        case types.playersSetRoundWin:
            return {
                ...state,
                players: state.players.map( player => {

                    if ( player.id === action.payload ) {
                        player.won = true;
                    }

                    return player;
                })
            }

        case types.playersSetRoundLose:
            return {
                ...state,
                players: state.players.map( player => {

                    if ( player.id === action.payload ) {
                        player.won = false;
                    }

                    return player;
                })
            }

        case types.playersSetScores:
            return {
                ...state,
                players: state.players.map( player => {

                    const { won, score, choice } = player;

                    if ( won ) {

                        const pointsWon = choice ? 5 + choice : 1;

                        score.push( score[ score.length - 1 ] + pointsWon );  

                    } else {
                        // si pierde pusheamos el mismo score que tenía
                        score.push( score[ score.length - 1 ] );
                    }

                    return player;
                })
            }

        case types.playersReset:
            return {
                ...state,
                playerSelector: 0,
                players: state.players.map( player => {

                    player.choice = null
                    player.won = null

                    return player;
                })
            }

        case types.playersChangePlayersOrder:
            return {
                ...state,
                players: state.players.map( ( player, index, arr ) => {

                    // si es el ultimo que se convierta en el primero
                    return ( index === ( arr.length - 1 ) )
                        ? arr[ 0 ]
                        : arr[ index + 1 ]

                })
            }
    
        default:
            return state;
    }
}