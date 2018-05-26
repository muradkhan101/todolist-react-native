import React from 'react';
import glamourous from 'glamorous-native';
import { View, Button, StyleSheet } from 'react-native';
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
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 8,
})

const styles = StyleSheet.create({
    button: {
        rotation: 45
    }
})

type Props = {
    title: 'string';
};
export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editing: false }
    }
    render() {
        const { title, time, update } = this.props;
        const { editing } = this.state;
        return (
            <Item>
                <View>
                    { !editing
                        ? <Title> {title} </Title>
                        : <InputText
                                submit={(text) => ( update(title, text), this.setState({editing: !editing}))}
                                default={title}
                            ></InputText>
                    }
                    <Time> {time} </Time>
                </View>
                <View>
                    <Button
                        onPress={() => this.setState({editing: !editing})}
                        color='violet'
                        title="X"
                        style={styles.button}>
                    </Button>
                </View>
            </Item>
        )
    }
}