import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './todoListRedux';

import Title from './components/Title';
import Input from './components/Input';
import List from './components/List';

const mapStateToProps = (state) => ({
  todos: state.todos
})

class App extends React.Component {

  todos = [];

  onAddTodo = (text) => {
    console.log(text);
    const {dispatch} = this.props;
    dispatch(actionCreators.add(text));
  }
  onRemoveTodo = (index) => {
    console.log(index, 'to remove');
    const {dispatch} = this.props;
    dispatch(actionCreators.remove(index));
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <Title>To-Do List</Title>
        <Input placeholder={'Type a Todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onClickItem={this.onRemoveTodo} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);