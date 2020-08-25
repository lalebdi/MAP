import React from 'react';
import MapCard from './MapCard';
import MapActionButton from './MapActionButton';
import { Droppable } from 'react-beautiful-dnd';
import styled from "styled-components";

const ListContainer = styled.div`
        background-color : #ccc;
        border-radius: 3px;
        width: 300px;
        padding: 8px;
        height: 100%;
        margin-right: 8px;
`

const MapList = ({ title, cards, listID }) => {
    
    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
            <ListContainer {...provided.droppableProps} ref={provided.innerRef} >
            <h4>{title}</h4>
            {cards.map((card, index) => (<MapCard key={card.id} index={index} text={card.text} id={card.id} />))}
            <MapActionButton listID={listID} />
            {provided.placeholder}
        </ListContainer>
        )}
        </Droppable>
    )
}



export default MapList
