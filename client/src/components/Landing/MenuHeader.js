import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    padding: 2%;
    height: 15%;
    background: rgb(40,40,40);
    display: flex;
    flex-direction: row;
`;

const Img = styled.img`
    height: 100%;
    width: 50px;
`;

const MenuHeader = (props) => (
    <Header>
        <Img src='wind.svg' />
    </Header>
);

export default MenuHeader;

