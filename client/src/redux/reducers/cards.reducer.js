import {CARDS_ALL, CARDS_LIKE} from "../types"


const cardsReducer = (state = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case CARDS_ALL: {
            const {cards} = payload;
            return [...state, ...cards];
        }
        case CARDS_LIKE: {
            const {cards} = payload
            return [ ...cards]
        }
        default: {
            return state;
        }
    }
}

export default cardsReducer;