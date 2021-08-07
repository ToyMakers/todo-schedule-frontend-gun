import React from 'react';
import styled, { css } from 'styled-components';
import ProfileImg from '../../asset/images/profile.jpg';

const ProfileWrap = styled.aside<{ status: boolean }>`
    width: 200px;
    min-height: 500px;
    padding: 0 20px;
    position: absolute;
    top: 43px;
    right: 0;
    background-color: rgba(0, 0, 0, 0.85);
    ${({ status }) =>
        status
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `}
`;

const ProfileInfo = styled.div`
    display: block;
    padding: 50px 0;
`;

const ProfilePhoto = styled.div`
    margin: 0 auto;
    width: 105px;
    height: 105px;
    overflow: hidden;
    border-radius: 50%;
    background: url(${ProfileImg}) top left/cover no-repeat;
`;

const ProfileName = styled.div`
    padding-top: 25px;
    color: #eee;
    text-align: center;
`;

const ProfileIntroduce = styled.p`
    padding-top: 25px;
    color: #eee;
    font-size: 0.9rem;
    line-height: 1.1rem;
`;

type profileStatus = {
    status: boolean;
};

function Profile({ status }: profileStatus) {
    console.log(status);
    return (
        <ProfileWrap status={status}>
            <ProfileInfo>
                <ProfilePhoto />
                <ProfileName>Gune</ProfileName>
                <ProfileIntroduce>
                    👨‍💻 Front-end Engineer
                    <br />
                    Play React intensively.
                </ProfileIntroduce>
            </ProfileInfo>
        </ProfileWrap>
    );
}

export default Profile;
