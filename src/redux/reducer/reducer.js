import {ADD_CARD, DELETE_CARD} from '../actions/types'

const initialState ={
    myFavorites: [],
}

export default function rootReducer(state = initialState, {type, payload}) {
    switch(type){
        case ADD_CARD:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload],
            }
        case DELETE_CARD:
            const filtered = state.myFavorites.filter(char => char.id !== payload )
            return{
                ...state,
                myFavorites: filtered,
            }
        default:
            return state
    }
}