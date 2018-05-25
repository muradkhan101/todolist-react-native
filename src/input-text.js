import React from 'react';
import glamourous from 'glamorous-native';
import { Text, TouchableNativeFeedback } from 'react-native';
const Container = glamourous.view({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
})

const Input = glamourous.textInput({
    backgroundColor: 'white',
    flex: 1,
    marginRight: 8
})


type Props = {};
export default class InputText extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    } 
    updateText(text) {
        this.setState({ text });
    }
    render() {
        const { text } = this.state;
        const { submit, color } = this.props;
        const SubmitButton = glamourous.text({
            backgroundColor: color || '#5ace46',
            color: '#efefef',
            padding: 8
        })
        return (
            <Container>
                <Input
                    onChangeText={this.updateText.bind(this)}
                    value={text}
                ></Input>
                <TouchableNativeFeedback
                    onPress={() => submit(text)}>
                    <SubmitButton>Submit</SubmitButton>
                </TouchableNativeFeedback>
            </Container>
        )
    }
}