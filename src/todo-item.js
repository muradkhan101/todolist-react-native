import React from 'react';
import glamourous from 'glamorous-native';

const Item = glamourous.view({
    backgroundColor: '#e0e0e0',
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

type Props = {
    title: 'string';
};
export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Item>
                <Title> {this.props.title} </Title>
            </Item>
        )
    }
}