import React from 'react';
import styled from 'styled-components';

import Header from './MenuHeader';
import LandingContent from './LandingContent';

const Wrapper = styled.section`
    height: 100%;
    width: 100%;
`;

function Landing(props) {

    return (
        <Wrapper>
            <Header/>
            <LandingContent />
        </Wrapper>
    );

}

export default Landing;
