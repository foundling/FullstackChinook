import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    width: 100%;
    height: 100%;
    padding: 20% 0%;
`;

const Wrapper = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    color: white;
`;

const ModalMenu = (props) => (
    <Wrapper>
        <List>
            <li>About</li>
            <li>Credits</li>
            <li>Source</li>
        </List>
    </Wrapper>
); 

export default ModalMenu;
