import { CONSTANTS } from '../actions'

export const addList= title =>{
    return{
        type: CONSTANTS.ADD_LIST,   // next time the action takes a type not a title
        payload: title
    };
};

// Next, wire it up in the reducer