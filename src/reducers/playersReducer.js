import { types } from "../types/types";


const fakeInitialState = {
    playerSelector: 0,
    players: [
        {
            id: 0,
            name: 'Manu',
            score: 0
        },
        {
            id: 1,
            name: 'Chuqui',
            score: 0
        },
        {
            id: 2,
            name: 'Rusa',
            score: 0
        },
    ]
}


// initialState = {};



export const playersReducer = ( state = fakeInitialState, action ) => {

    
    switch ( action.type ) {
        

        case types.playersSetPlayers:
            return {
                ...state,
                // acá creo que hay un error, porque borré un "players"
                // antes estaba players dentro de players
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
    
        default:
            return state;
    }

}