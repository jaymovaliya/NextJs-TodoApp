import React, { Component } from 'react';
import "./TodoItem.scss";

export default class TodoItem extends Component {
    
    getStyle = () => {
        let style = "dot complete";
        return (
            style = this.props.todo.completed ? "dot complete" : "dot notComplete"
        )
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
            <div className="outsideWrapper">
                <div style={myStyle} className="innerWrapper">
                   <div className="spanWrapper dotWrapper">
                        <span className={this.getStyle()} />
                    </div>
                    <div style={this.getTitleStyle()} className="spanWrapper titleWrapper">
                        <span>{title}</span>
                    </div>
                    <div style={this.getInputStyle()} className="spanWrapper">
                    <input type="text" 
                        onChange={this.props.handleEditChange} 
                        value={this.props.inputValue} 
                        className="inputWrapper"
                        // className="inputField"
                        >
                    </input>
                    </div>
                    <div className="spacer" />
                    <div onClick={this.props.getEdited.bind(this, id)} className="spanWrapper toolButtons first">
                        <button>E</button>
                    </div>
                    <div
                        onClick={this.props.getCompleted.bind(this, id)}
                        className="spanWrapper toolButtons middle"
                    >
                        <button>C</button>
                    </div>
                    <div onClick={this.props.getDeleted.bind(this, id)} className="spanWrapper toolButtons last">
                        <button>D</button>
                    </div>
                </div>
            </div>
        )
    }
}
const myStyle = {
   display:'inline-block !important'
}