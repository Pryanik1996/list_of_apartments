import { combineReducers } from "redux";
import cardsReducer from "./cards.reducer"

const reducer = combineReducers({
    cards: cardsReducer,
});

export default reducer;
