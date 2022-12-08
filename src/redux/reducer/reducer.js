import {ADD_CARD, DELETE_CARD, FILTER, ORDER} from '../actions/types'

const initialState ={
    myFavorites: [],
    allCharacters: [],
}

export default function rootReducer(state = initialState, {type, payload}) {
    switch(type){
        case ADD_CARD:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case DELETE_CARD:
            const filtered = state.myFavorites.filter(char => char.id !== payload )
            return{
                ...state,
                myFavorites: filtered,
                allCharacters:filtered,
            }
        case FILTER:
            const filterCopy = [...state.allCharacters];
            const filtro = filterCopy.filter(char => char.gender === payload)
            return{
                ...state,
               myFavorites: filtro,
            }
        case ORDER:
            const orderCopy = [...state.allCharacters];
            let orderSort = orderCopy.sort((a,b) => {
                // if(a.id < b.id) {
                //     return payload === 'Ascendente'? a.id-b.id : b.id-a.id
                // }
               
                // if(a.id < b.id){ 
                //     return payload === 'Descendente' ? b.id-a.id : a.id-b.id
                // }
                if(payload === 'Ascendente'){
                    return a.id - b.id
                }
                if(payload === 'Descendente'){
                    return  b.id - a.id
                }
                else return 0
            } )
            return{
                ...state,
               myFavorites: orderSort,
            }
        default:
            return {...state}
    }
}