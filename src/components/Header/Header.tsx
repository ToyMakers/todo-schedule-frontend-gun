import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Inner from '../common/Inner';
import Profile from '../Profile/Profile';
import ProfileButton from './ProfileButton';

export const headerHeight = 50;

const HeaderArea = styled.header`
    height: ${headerHeight}px;
    /* border-bottom: 1px solid #ccc; */
    background-color: #000;
`;

const HeaderInner = styled(Inner)`
    position: relative;
`;

const HeaderLogo = styled.div`
    width: 100%;
    height: ${headerHeight}px;
    color: #eee;
    font-size: 1.1rem;
    font-weight: 300;
    text-align: center;
    line-height: ${headerHeight}px;
    & strong {
        font-weight: 500;
    }
`;

const HeaderJoin = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);
    gap: 10px;
`;

type HeaderLogin = {
    login: boolean;
};

function Header({ login }: HeaderLogin) {
    const [profileState, setProfileState] = useState<boolean>(false);
    const onClick = () => setProfileState(!profileState);
    return (
        <HeaderArea>
            <HeaderInner>
                <HeaderLogo>
                    <Link to="/">
                        <strong>{login ? 'Gune' : 'Wonderful Guest'}</strong>'s Scheduler
                    </Link>
                </HeaderLogo>
                {login ? (
                    <>
                        <ProfileButton onClick={onClick} />
                        <Profile status={profileState} />
                    </>
                ) : (
                    <HeaderJoin>
                        <Link to="/join">JOIN</Link>
                        <Link to="/login">LOGIN</Link>
                    </HeaderJoin>
                )}
            </HeaderInner>
        </HeaderArea>
    );
}

export default Header;
