import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';

export default class MapActionButton extends Component {

    // for adding another list or a card in the list:
    renderAddButton = () =>{
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
        return (
            <div style={{   
                        ...styles.openForButtonGroup,
                        opacity: buttonTextOpacity,
                        color: buttonTextColor, 
                        backgroundColor: 
                        buttonTextBackground}}>
                <AddIcon>add</AddIcon>
                <p>{buttonText}</p>
            </div>
        )
    }

    render() {
        return this.renderAddButton();
    }
}

const styles ={
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    }
}
