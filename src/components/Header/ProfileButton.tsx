import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../asset/images/profile.jpg';

const ProfileBtnWrap = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 105px;
    height: 32px;
    padding: 2px;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);
    background-color: #080810;
    cursor: pointer;

    &:hover {
        background-color: #393939;
    }
`;

const ProfileBtnImg = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: url(${ProfileImg}) top left no-repeat;
    background-size: cover;
`;

const ProfileName = styled.div`
    color: #fff;
    font-size: 0.75rem;
    font-weight: 900;
`;

const ProfileArrow = styled.div`
    width: 20px;
    height: 10px;
    margin-top: 8px;
    position: relative;
    overflow: hidden;
    &::after {
        content: '';
        display: block;
        width: 7px;
        height: 7px;
        position: absolute;
        top: -30%;
        left: 50%;
        background-color: #fff;
        transform: translateX(-50%) rotate(45deg);
    }
`;

interface ProfileButtonProps {
    onClick?: () => void;
}

function ProfileButton({ onClick }: ProfileButtonProps) {
    return (
        <ProfileBtnWrap onClick={onClick}>
            <ProfileBtnImg />
            <ProfileName>Gune</ProfileName>
            <ProfileArrow />
        </ProfileBtnWrap>
    );
}

export default ProfileButton;
