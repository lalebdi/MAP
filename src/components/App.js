import React, { Component} from 'react';
import MapList from './MapList';
import { connect } from 'react-redux';
import MapActionButton from './MapActionButton';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListContainer = styled.div`
    display: flex;
    flexDirection: row;
`

class App extends Component {

  onDragEnd = (result) =>{
// the reordering logic is here. will utilize redux to create an action for the reducer
    const { destination, source, draggableId, type } = result;

    if(!destination){ // if a card to dragged outside a list. destination = null;
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  }
  render() {

    const { lists } = this.props;
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
    <div className="App">
      <h1> testing testing</h1>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          {lists.map((list, index) => (<MapList listID={list.id} key={list.id} title={list.title} cards={list.cards} index={index}/> ))}
        <MapActionButton list />
        </ListContainer>
        )}
    </Droppable>
    </div>
    </DragDropContext>
  );
  }
}

const styles ={
  listsContainer:{
    display: "flex",
    flexDirection: "row"
  }
}

const mapStateToProps = state => ({
  lists: state.lists   // from the ListsReducer
})

export default connect(mapStateToProps) (App);
