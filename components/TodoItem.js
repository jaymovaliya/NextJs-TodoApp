import React, { Component } from 'react'

export default class TodoItem extends Component {
    getStyle = () => {
        return {
            textAlign: 'center',
            backgroundColor: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '2px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                    {title}
                    <span><input type="text"></input></span>
                    <button onClick={this.props.getEdited.bind(this, id)}>Edit</button>
                    <button onClick={this.props.getCompleted.bind(this, id)}>Completed</button>
                    <button onClick={this.props.getDeleted.bind(this, id)}>Delete</button>
            </div>
        )
    }
}
const crossRed = {
    backgroundColor: 'red',
    color:'white',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '50%',
    float: 'right'
}