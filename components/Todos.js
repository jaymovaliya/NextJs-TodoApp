import React, { Component } from 'react';
import TodoItem from './TodoItem'
class Todos extends Component {
    render() {
        return this.props.todos.map((todos) => (
            <TodoItem todo={todos} getCompleted={this.props.getCompleted} getEdited={this.props.getEdited} getDeleted={this.props.getDeleted} />
        ));
    }
}

export default Todos;