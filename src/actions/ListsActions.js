import { CONSTANTS } from '../actions'
import { Draggable } from 'react-beautiful-dnd';

export const addList= title =>{
    return{
        type: CONSTANTS.ADD_LIST,   // next time the action takes a type not a title
        payload: title
    };
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexSEnd,
    draggableId,
    type
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: { 
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexSEnd,
            draggableId,
            type
        }
    }
}

// Next, wire it up in the reducer