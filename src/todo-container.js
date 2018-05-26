import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native';

import TodoItem from './todo-item';
import InputText from './input-text';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 8,
        width: '100%'
    }
});

type Props = {};
export default class TodoContainer extends React.Component<Props> {
    static id = 0;
    state = {
        todos: []
    }
    currentDate() {
        let d = new Date();
        return d.toDateString() + ' ' + d.toLocaleTimeString();
    }
    addTodo = (text) => {
        let todo = {
            text,
            date: this.currentDate(),
            id: TodoContainer.id++
        };
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    updateTodo = (newText, id) => {
        let todos = this.state.todos.map(todo =>
                        todo.id === id
                            ? Object.assign(todo, {
                                text: newText,
                                date: this.currentDate()
                            })
                            : todo
                        );
        this.setState({todos});
    }
    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }
    render() {
        const { todos } = this.state;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    {todos.map( (todo) => (
                        <TodoItem
                            todo={todo}
                            update={this.updateTodo}
                            remove={this.removeTodo}
                            key={todo.id}/>
                    ))}
                </ScrollView>

                <InputText
                    submit={this.addTodo}
                    color='violet'
                ></InputText>
            </KeyboardAvoidingView>
        );
    }
}