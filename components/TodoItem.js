import React, { Component } from 'react';
import "./TodoItem.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip'

export default class TodoItem extends Component {
    

    // dynamic css to set dot to complete when clicked on completed todo
    getStyle = () => {
        let style = "dot complete";
        return (
            style = this.props.todo.completed ? "dot complete" : "dot notComplete"
        )
    }

    // dynamic css to handle input tab when clicked on edit todo
    getInputStyle = () => {
        return {
            display: this.props.todo.editing ? '' : 'none'
        }
    }

    // dynamic css to handle title when clicked on edit todo
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
                        {/* <button>Edit</button> */}
                        <button>
                            <label data-tip="Edit">
                                <FontAwesomeIcon icon="edit" className="backHover"/>
                                <ReactTooltip/>
                            </label>
                        </button>
                    </div>
                    <div
                        onClick={this.props.getCompleted.bind(this, id)}
                        className="spanWrapper toolButtons middle"
                    >
                        {/* <button>Done</button> */}
                        <button>
                            <label data-tip="Complete">
                                <FontAwesomeIcon icon="check" className="backHover"/>
                            </label>
                        </button>
                    </div>
                    <div onClick={this.props.getDeleted.bind(this, id)} className="spanWrapper toolButtons last">
                        {/* <button>Delete</button> */}
                        <button>
                            <label data-tip="Delete">
                                <FontAwesomeIcon icon="trash" className="backHover"/>
                            </label>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
const myStyle = {
   display:'inline-block !important'
}