import { CARDS_ALL, CARDS_LIKE } from "../types";


export const setAllCards = (cards) => ({
    type: CARDS_ALL,
    payload: {
        cards
    }
})

export const getAllCards = () => (dispatch) => {
        fetch("http://localhost:3001/")
        .then((response) => response.json()) 
        .then((data) => dispatch(setAllCards(data.response)))

}

export const setCardsLike = (cards) => ({
    type: CARDS_LIKE,
    payload: {
        cards
    }
})

export const getCardLike = (id) => (dispatch) => {
        fetch("http://localhost:3001/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
            }),
            credentials: "include",
    })
        .then((response) => response.json())
        .then((data) => dispatch(setCardsLike(data.response)))
    };