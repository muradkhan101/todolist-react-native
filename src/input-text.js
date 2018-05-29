import React from 'react';
import glamourous from 'glamorous-native';
import { Text, TouchableNativeFeedback } from 'react-native';
const Container = glamourous.view({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 40,
    minWidth: '55%'
})

const Input = glamourous.textInput({
    backgroundColor: 'white',
    marginRight: 8,
    flex: 1,
    zIndex: 10
})


type Props = {};
export default class InputText extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            text: props.default || '',
        }
    } 
    updateText(text) {
        this.setState({ text });
    }
    render() {
        const { text } = this.state;
        const { submit, color, style } = this.props;
        const SubmitButton = glamourous.text({
            backgroundColor: color || '#5ace46',
            color: '#efefef',
            padding: 8
        })
        return (
            <Container style={style}>
                <Input
                    onChangeText={this.updateText.bind(this)}
                    value={text}
                ></Input>
                <TouchableNativeFeedback
                    onPress={() => ( submit(text), this.setState({text: ''})) }>
                    <SubmitButton>Submit</SubmitButton>
                </TouchableNativeFeedback>
            </Container>
        )
    }
}