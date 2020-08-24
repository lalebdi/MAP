//  initial state => array of lists each with an array of cards
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
                id: 0,
                text: "this is a dummy card"
            }
        ]
    }

]



const ListReducer = (state = initialState, action ) =>{ //take a state if there's not take the initial state
    switch (action.type) {
        default:
            return state;
    }
};

export default ListReducer;