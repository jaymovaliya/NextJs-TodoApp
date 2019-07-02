import React, { Component } from 'react';
import Todos from './Todos'
import data from '../data.json'
//import './TodoList.css'

class TODOList extends Component {

    state = {
        todos: null,
        hiddenInput: true,
        todoValue: '',
        inputValue: null
    }

    setDefault = () => {
        data.forEach(item => {
            item['completed'] = false
            item['editing'] = false
        })
        this.setState({ todos: data })
    }

    componentDidMount() {
        this.setDefault()
    }

    inputStyle = () => {
        return {
            display: this.state.hiddenInput ? 'none' : ''
        }
    }

    addInput = () => {
        this.setState({ hiddenInput: !this.state.hiddenInput })
        if (!this.state.hiddenInput) {
            let todos = [...this.state.todos]
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

    getEdited = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.editing = !todo.editing
                }
                return todo
            })
        })
        let todo = this.state.todos.filter(todo => todo.id == id)[0]
        if (todo.editing) {
            //let todos = [...this.state.todos]
            let todoEdit = todo.title
            this.setState({ inputValue: todoEdit })
        }
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

    getDeleted = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo =>
                todo.id !== id
            )]
        })
    }

    handleChange = (e) => {
        let str = e.target.value;
        this.setState({ todoValue: str })
    }

    handleEditChange = (e) => {
        let str = e.target.value;
        this.setState({ inputValue: str })
    }

    render() {
        if (this.state.todos) {
            return (
                <div className="App">
                    <input type="text" onChange={this.handleChange} style={this.inputStyle()} value={this.state.todoValue}></input>
                    <button onClick={this.addInput}>Create New TODO</button>
                    <Todos todos={this.state.todos}
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
                    <h1>ToDo App</h1>
                </div>
            )
        }
    }
}


export default TODOList;
