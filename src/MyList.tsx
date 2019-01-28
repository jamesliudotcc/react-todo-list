import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

type Props = {};
type State = { listItems: string[]; input: string };

class MyList extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { listItems: [], input: '' };
  }
  storeInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ input: e.currentTarget.value });
  };
  addNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    let newList = this.state.listItems;
    newList.push(this.state.input);
    this.setState({
      input: '',
      listItems: newList,
    });
  };
  deleteHander = (item: string) => {
    let newList = this.state.listItems;
    let deleteIndex = newList.indexOf(item);
    newList.splice(deleteIndex, 1);
    this.setState({ listItems: newList });
  };
  render() {
    const toDoItems = this.state.listItems.map((item, index) => {
      return (
        <ListItem doThis={item} key={index} deleteHandler={this.deleteHander} />
      );
    });
    return (
      <div className="App">
        <h1>Things I should stop procrastinating</h1>
        <ul className="list pl0">{toDoItems}</ul>
        <form>
          <input
            type="text"
            name="itemToDo"
            id="itemToDo"
            placeholder="Enter new task"
            value={this.state.input}
            onChange={this.storeInput}
          />
          <button onClick={this.addNewItem}>Add To Do</button>
        </form>
      </div>
    );
  }
}

export default MyList;
