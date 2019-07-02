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

    getInputStyle = () => {
        return {
            display: this.props.todo.editing ? '' : 'none'
        }
    }
    getTitleStyle = () => {
        return {
            display: this.props.todo.editing ? 'none' : ''
        }
    }


    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <div style={myStyle}>
                    <h3 style={this.getTitleStyle()}>{title}</h3>
                    <input type="text" onChange={this.props.handleEditChange} value={this.props.inputValue} style={this.getInputStyle()}></input>
                    <button onClick={this.props.getEdited.bind(this, id)}>Edit</button>
                    <button onClick={this.props.getCompleted.bind(this, id)}>Completed</button>
                    <button onClick={this.props.getDeleted.bind(this, id)}>Delete</button>
                </div>
            </div>
        )
    }
}
const myStyle = {
   display:'inline-block !important'
}