import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { addList } from '../actions/ListsActions'

class MapActionButton extends Component {
    state ={
        formOpen: false,
        text: ""
    };

    openForm = () =>{
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {  // this added to the onBlur so when the user clicks outsude the form closes
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () =>{
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text){
            dispatch(addList(text))
        }
        return;
    }

    // for adding another list or a card in the list:
    renderAddButton = () =>{
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
        return (
            <div 
            onClick={this.openForm}
            style={{   
                        ...styles.openFormButtonGroup,
                        opacity: buttonTextOpacity,
                        color: buttonTextColor, 
                        backgroundColor: 
                        buttonTextBackground}}>
                <AddIcon>add</AddIcon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm =()=>{
        const { list } = this.props;

        const placeholder = list ? "Enter list title..." : "Enter a title for this card...";

        const buttonTitle = list ? "Add List" : "Add Card";

        return (
        <div> 
            <Card style={{
                overflow: "visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
                <TextareaAutosize
                placeholder={placeholder}
                autoFocus
                onBlur={this.closeForm}
                value={this.state.text}
                onChange={this.handleInputChange}
                style={{
                    resize: "none",
                    width: "100%",
                    outline: "none",
                    border: "none",
                    overflow: "hidden"
                }}
                />
                
            </Card>
            <div style={styles.formButtonGroup}>
                <Button onMouseDown={this.handleAddList} variant="contained" style={{ color: "white", backgroundColor:"#5aac44"}}> 
                {buttonTitle}{" "}</Button>
                <CloseIcon style={{ marginLeft: 8, cursor: "pointer" }}>Close</CloseIcon>
            </div>
        </div>
        )
    }

    render() {
        return this.state.formOpen? this.renderForm() : this.renderAddButton();
    }
}

const styles ={
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup:{
        marginTop: 8,
        display: "flex",
        alignItems: 'center'
    }
}

export default connect()(MapActionButton)

//  onMouseDown is used becuase it fires before the onBlurr does. if I used onClick no new list will be created.