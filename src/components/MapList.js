import React from 'react';
import MapCard from './MapCard';
import MapActionButton from './MapActionButton';

const MapList = ({ title, cards }) => {
    return (
        <div style={ styles.container }>
            <h4>{title}</h4>
            {cards.map(card => (<MapCard key={card.id} text={card.text} />))}
            <MapActionButton  />
        </div>
    )
}

const styles ={
    container: {
        backgroundColor : '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
}

export default MapList
