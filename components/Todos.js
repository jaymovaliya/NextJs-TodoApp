import React, { Component } from 'react';

// TodoItem --> component that handles single todo Item
import TodoItem from './TodoItem'
class Todos extends Component {
    render() {
        return this.props.todos.map((todos) => (
            <TodoItem todo={todos} inputValue={this.props.inputValue} getCompleted={this.props.getCompleted} getEdited={this.props.getEdited} getDeleted={this.props.getDeleted}handleEditChange={this.props.handleEditChange} />
        ));
    }
}

export default Todos;