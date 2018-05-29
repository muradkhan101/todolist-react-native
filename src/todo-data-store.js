import React from 'react';
import { Subject } from 'rxjs';

const defaultState = {
    todos: [],
};
export const TodoContext = React.createContext(defaultState);


export class TodoStore extends React.Component {
    state = {
        dispatch: new Subject(),
        todos: []
    }
    subscription = undefined;
    static id = 0;
    componentDidMount() {
        this.subscription = this.state.dispatch.subscribe( (action) => {
            console.log('ACTION:', action)
            switch (action.type) {
                case 'ADD_TODO':
                    // Pass entire action to avoid have to deal with changed params
                    this.addTodo(action);
                    break;
                case 'REMOVE_TODO':
                    this.removeTodo(action);
                    break;
                case 'UPDATE_TODO':
                    this.updateTodo(action);
                    break;
            }
        } );
    }
    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
    currentDate() {
        let d = new Date();
        return d.toDateString() + ' ' + d.toLocaleTimeString();
    }
    makeTodo = (text) => ({
        text,
        date: this.currentDate(),
        id: TodoStore.id++
    });
    addTodo = ({text}) => this.setState({
        todos: [...this.state.todos, this.makeTodo(text)]
    })

    updateTodo = ({text, id}) => {
        let todos = this.state.todos.map(todo =>
            todo.id === id
                ? Object.assign(todo, {
                    text: text,
                    date: this.currentDate()
                })
                : todo
        );
        this.setState({ todos });
    }
    removeTodo = ({id}) => this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
    });

    render() {
        console.log('DATA-STORE:', this.state);
        return (
            <TodoContext.Provider value={this.state}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}