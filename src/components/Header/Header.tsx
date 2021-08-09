import React, { useState } from 'react';
import styled from 'styled-components';
import Inner from '../common/Inner';
import Profile from '../Profile/Profile';
import ProfileButton from './ProfileButton';

const HeaderArea = styled.header`
    height: 43px;
    /* border-bottom: 1px solid #ccc; */
    background-color: #000;
`;

const HeaderInner = styled(Inner)`
    position: relative;
`;

const HeaderLogo = styled.div`
    width: 100%;
    height: 43px;
    color: #eee;
    font-size: 1.1rem;
    font-weight: 300;
    text-align: center;
    line-height: 43px;
    & strong {
        font-weight: 500;
    }
`;

function Header() {
    const [profileState, setProfileState] = useState<boolean>(false);
    const onClick = () => setProfileState(!profileState);

    return (
        <HeaderArea>
            <HeaderInner>
                <HeaderLogo>
                    <strong>Gune</strong>'s Scheduler
                </HeaderLogo>
                <ProfileButton onClick={onClick} />
                <Profile status={profileState} />
            </HeaderInner>
        </HeaderArea>
    );
}

export default Header;
