import React, { Component} from 'react';
import MapList from './MapList';
import { connect } from 'react-redux';
import MapActionButton from './MapActionButton';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { sort } from '../actions';

class App extends Component {

  onDragEnd = (result) =>{
// the reordering logic is here. will utilize redux to create an action for the reducer
    const { destination, source, draggableId } = result;

    if(!destination){ // if a card to dragged outside a list. destination = null;
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  }
  render() {

    const { lists } = this.props;
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
    <div className="App">
      <h1> testing testing</h1>
      <div style={styles.listsContainer}>
      {lists.map(list => (<MapList listID={list.id} key={list.id} title={list.title} cards={list.cards} /> ))}
    <MapActionButton list />
    </div>
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
