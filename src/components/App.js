import React, { Component} from 'react';
import MapList from './MapList';
import { connect } from 'react-redux';
import MapActionButton from './MapActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {

  onDragEnd = () =>{

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
