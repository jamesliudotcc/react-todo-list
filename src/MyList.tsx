import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

type Props = { theList: string[] };

class MyList extends Component<Props> {
  render() {
    const toDoItems = this.props.theList.map((item, index) => {
      return <ListItem doThis={item} key={index} />;
    });
    return (
      <div className="App">
        <h1>Things I should stop procrastinating</h1>
        <ul>{toDoItems}</ul>
      </div>
    );
  }
}

export default MyList;
