import React, { Component} from 'react';
import MapList from './MapList';
import { connect } from 'react-redux';

class App extends Component {
  render() {

    const { lists } = this.props;
  return (
    <div className="App">
      <h1> testing testing</h1>
      <div style={styles.listsContainer}>
      {lists.map(list => (<MapList key={list.id} title={list.title} cards={list.cards} /> ))}
    </div>
    </div>
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
