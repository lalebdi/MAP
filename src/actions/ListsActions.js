import { CONSTANTS } from '../actions'

export const addList= title =>{
    return{
        title: CONSTANTS.ADD_LIST,
        payload: title
    };
};

// Next, wire it up in the reducer