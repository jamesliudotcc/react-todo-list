import React, { Component } from 'react';
import './App.css';

type Props = { doThis: string; key: number };

class ListItem extends Component<Props> {
  render() {
    return <li>{this.props.doThis}</li>;
  }
}
export default ListItem;
