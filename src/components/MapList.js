import React from 'react';
import MapCard from './MapCard';
import MapActionButton from './MapActionButton';
import { Droppable } from 'react-beautiful-dnd';

const MapList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={ styles.container }>
            <h4>{title}</h4>
            {cards.map((card, index) => (<MapCard key={card.id} index={index} text={card.text} id={card.id} />))}
            <MapActionButton listID={listID} />
            {provided.placeholder}
        </div>
        )}
        </Droppable>
    )
}

const styles ={
    container: {
        backgroundColor : '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}

export default MapList
