import React from 'react';
import glamourous from 'glamorous-native';
import { View, Button, StyleSheet, TouchableNativeFeedback } from 'react-native';
import InputText from './input-text';

const Item = glamourous.view({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f6f6f6',
    shadowColor: '#313131',
    shadowOpacity: 0.7,
    shadowRadius: 8,
    padding: 8,
    marginBottom: 12,
    width: '100%',
    elevation: 2
});

const Title = glamourous.text({
    fontSize: 24,
    color: '#313131',
    marginBottom: 8
})

const Time = glamourous.text({
    fontSize: 12,
    color: '#a0a0a0',
    marginBottom: 8,
})

type Todo = {
    text: string;
    date: string;
    id: number;
}

type Props = {
    text: Todo;
    date: string;
};
export default class TodoItem extends React.Component {
    state = {
        editing: false
    }
    render() {
        const { todo, time, update, remove } = this.props;
        const { editing } = this.state;
        return (
            <Item>
                <View>
                    { !editing
                        ? <TouchableNativeFeedback
                            onPress={() => this.setState({ editing: !editing })}>
                            <Title> {todo.text} </Title>
                        </TouchableNativeFeedback>
                        : <InputText
                                submit={(newText) => ( update(newText, todo.id), this.setState({editing: !editing}))}
                                default={todo.text}
                            />
                    }
                    <Time> {todo.date} </Time>
                </View>
                <View>
                    <Button
                        onPress={() => remove(todo.id)}
                        color='red'
                        title="X"
                    />
                </View>
            </Item>
        )
    }
}