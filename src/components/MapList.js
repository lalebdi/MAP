import React from 'react';
import MapCard from './MapCard';

const MapList = ({title}) => {
    return (
        <div style={ styles.container}>
            <h4>{title}</h4>
            <MapCard />
        </div>
    )
}

const styles ={
    container: {
        backgroundColor : '#ccc',
        borderRadius: 3,
        width: 300
    }
}

export default MapList
