import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    background-color: skyblue;
    padding: 15px;
`;
const Text = styled.div`
 text-align: center;
 color:white;
`;

export default class Title extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Wrapper>
                <Text>{children}</Text>
            </Wrapper>
        );
    }
}

