import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { TodoContext } from './todo-data-store';

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
    subject = undefined;
    addTodo = (text) => this.subject.next({
        type: 'ADD_TODO',
        text
    })
    updateTodo = (text, id) => this.subject.next({
            type: 'UPDATE_TODO',
            text,
            id
        })
    removeTodo = (id) => this.subject.next({
        type: 'REMOVE_TODO',
        id
    })
    render() {
        return (
            <TodoContext.Consumer>
                {({dispatch, todos}) => {
                    if (!this.subject) this.subject = dispatch;
                    return <KeyboardAvoidingView style={styles.container}>
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
                            color='#5ace46'
                        ></InputText>
                    </KeyboardAvoidingView>
                    }
                }
            </TodoContext.Consumer>
        );
    }
}