import React from 'react';
import MapCard from './MapCard';

const MapList = ({ title, cards }) => {
    return (
        <div style={ styles.container }>
            <h4>{title}</h4>
            {cards.map(card => (<MapCard text={card.text} />))}
            
        </div>
    )
}

const styles ={
    container: {
        backgroundColor : '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}

export default MapList
