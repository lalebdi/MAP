import React, { Component} from 'react';
import MapList from './MapList';
import { connect } from 'react-redux';

class App extends Component {
  render() {

    const { lists } = this.props;
  return (
    <div className="App">
      <h1> testing testing</h1>
      {lists.map(list => (<MapList title={list.title} cards={list.cards} /> ))}
    </div>
  );
  }
}

const mapStateToProps = state => ({
  lists: state.lists   // from the ListsReducer
})

export default connect(mapStateToProps) (App);
