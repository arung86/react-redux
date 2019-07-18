import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Item = styled.div`
 background-color: whitesmoke;
 margin-bottom:5px;
 padding:15px;
`;

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`;

export default class List extends React.Component {

    renderItem = (text, i) => {
        const { onClickItem } = this.props;
        return (
            <Item key={i} onClick={() => { onClickItem(i) }}>
                {text}
            </Item>
        )
    }

    render() {
        const { list } = this.props;
        return (
            <Wrapper>
                {list.map(this.renderItem)}
            </Wrapper>
        );
    }
}
