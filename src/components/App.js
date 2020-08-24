import React from 'react';
import MapList from './MapList';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1> testing testing</h1>
      <MapList title="test" />
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.lists   // from the ListsReducer
})

export default connect(mapStateToProps) (App);
