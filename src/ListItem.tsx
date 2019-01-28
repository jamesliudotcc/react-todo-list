import React, { Component } from 'react';
import './App.css';

type Props = { doThis: string; key: number; deleteHandler: Function };

class ListItem extends Component<Props> {
  deleteHandler = (e: React.FormEvent) => {
    this.props.deleteHandler(this.props.doThis);
  };
  render() {
    return (
      <li>
        {this.props.doThis}
        <button onClick={this.deleteHandler}>x</button>
      </li>
    );
  }
}
export default ListItem;
