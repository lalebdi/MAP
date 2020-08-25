//  initial state => array of lists each with an array of cards
import { CONSTANTS } from '../actions';

let listID = 2 // this is temporary
let cardID = 3 // this is temporary

const initialState =[
    {
        title: "Last Epi",
        id: 0,
        cards: [
            {
                id: 0,
                text: "this is a test card"
            },
            {
                id: 1,
                text: "this is a dummy card"
            }
        ]
    },
    {
        title: "second Epi",
        id: 1,
        cards: [
            {
                id: 0,
                text: "this is a test card"
            },
            {
                id: 1,
                text: "this is a dummy card"
            },
            {
                id: 2,
                text: "this is a blah card"
            }
        ]
    }

]



const ListReducer = (state = initialState, action ) =>{ //take a state if there's not take the initial state
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList ={
                title: action.payload,
                cards: [],
                id: listID
            }
            listID +=1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard ={
                text: action.payload.text,
                id: cardID
            };
            cardID+=1;

            // console.log("action done", action) found the bug and eliminated it

            const newState = state.map(list =>{
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })

            return newState;
        default:
            return state;
    }
};

export default ListReducer;