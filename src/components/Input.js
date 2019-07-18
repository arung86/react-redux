import React from 'react';
import styled from 'styled-components';

const TextField = styled.input`
    box-sizing:border-box;
    font-size: 100%;
    padding: 15px;
    border-width: 0;
    width:100%;
`;

export default class Input extends React.Component {

    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    handleKeyPress = event => {
        if (event.key !== "Enter") return;
        const { onSubmitEditing } = this.props;
        const { value } = this.state;
        if (!value) return;
        onSubmitEditing(value);
        this.setState({ value :'' });
    }

    render() {
        const { placeholder } = this.props;
        const { value } = this.state;
        return (
            <TextField type="text"
                value={value}
                placeholder={placeholder}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
        );
    }
}