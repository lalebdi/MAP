import React from 'react';
import MapCard from './MapCard';
import MapActionButton from './MapActionButton';

const MapList = ({ title, cards, listID }) => {
    return (
        <div style={ styles.container }>
            <h4>{title}</h4>
            {cards.map(card => (<MapCard key={card.id} text={card.text} />))}
            <MapActionButton listID={listID} />
        </div>
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
