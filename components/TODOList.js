import React, { Component } from 'react';

// Todos --> Component that render all Todo Item
import Todos from './Todos'

// data --> Todo data
import data from '../data.json'
import "./TodoItem.scss";

//import './TodoList.css'

class TODOList extends Component {

    state = {
        todos: null, // all todos type(array of object) initialized as null
        hiddenInput: true, // Uses when click on create new todo
        todoValue: '', // value of new todo item
        inputValue: "", // value of edited todo item
        key: 0,
    }

    // set default value to state
    setDefault = () => {
        data.forEach(item => {
            item['completed'] = false
            item['editing'] = false
        })
        this.setState({ todos: data })
    }

    // call when component mounts
    componentDidMount() {
        this.setDefault()
    }

    // dynamic css to handle input tab when click on create new todo
    inputStyle = () => {
        return {
            display: this.state.hiddenInput ? 'none' : ''
        }
    }

    // add new todo to list
    addInput = () => {
        // show input tab to add create new todo
        this.setState({ hiddenInput: !this.state.hiddenInput })
        if (!this.state.hiddenInput) {
            let todos = [...this.state.todos]
            // add element to start of an array
            todos.unshift({
                id: todos.length + 2,
                title: this.state.todoValue,
                description: 'xyz',
                date: new Date(),
                completed: false
            })
            this.setState({ todos: todos })
        }
    }

    // calls when click on edit todo item
    getEdited = (id) => {
        // set editing to true for selected todo to edit that shows input tab for editing
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.editing = !todo.editing
                }
                return todo
            })
        })
        // filters selected todo only
        let todo = this.state.todos.filter(todo => todo.id == id)[0]
        if (todo.editing) {
            //let todos = [...this.state.todos]
            let todoEdit = todo.title
            this.setState({ inputValue: todoEdit })
        }
        // set edited value
        else {
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.title = this.state.inputValue
                    }
                    return todo
                })
            })
        }
    }

    // calls when click on complete todo item
    getCompleted = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    }

    // calls when click on delete todo item
    getDeleted = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo =>
                todo.id !== id
            )]
        })
    }

    // handling change of create new todo value
    handleChange = (e) => {
        let str = e.target.value;
        this.setState({ todoValue: str })
    }

     // handling change of edit todo value
    handleEditChange = (e) => {
        let str = e.target.value;
        this.setState({ inputValue: str })
    }

    render() {
        if (this.state.todos) {
            return (
                <div className="App">
                    <div className="addTaskWrapper">
                        <input 
                            className="taskInputField" 
                            type="text" 
                            onChange={this.handleChange}
                            style={this.inputStyle()} 
                            value={this.state.todoValue}
                            placeholder="Enter the todo task name"
                        ></input>
                        <button className="taskButton" onClick={this.addInput}> + CREATE NEW TODO</button>
                    </div>
                    <Todos 
                    todos={this.state.todos}
                    inputValue={this.state.inputValue}
                    getCompleted={this.getCompleted}
                    getEdited={this.getEdited}
                    getDeleted={this.getDeleted}
                    handleEditChange={this.handleEditChange} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>TODO APP</h1>
                </div>
            )
        }
    }
}


export default TODOList;
