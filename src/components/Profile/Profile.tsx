import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import ProfileImg from '@/asset/images/profile.jpg';
import { headerHeight } from '../Header/Header';
import { Modification } from '@Components/common/Atom';
import Pencil from '@/asset/images/pencil.svg';

const Pen = styled(Pencil)`
    width: 11px;
    height: 11px;
    position: relative;
    z-index: 10;
`;

const ProfileWrap = styled.aside<{ status: boolean }>`
    width: 200px;
    min-height: 500px;
    padding: 0 20px;
    position: absolute;
    top: ${headerHeight}px;
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
    position: relative;
    width: 105px;
    height: 105px;
    margin: 0 auto;
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

const Upload = styled.input`
    display: block;
    width: 1px;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
`;

type profileStatus = {
    status: boolean;
};

function Profile({ status }: profileStatus) {
    const imageUpload = useRef<HTMLInputElement>(null);
    const uploadEvent = () => imageUpload.current?.click();
    return (
        <ProfileWrap status={status}>
            <ProfileInfo>
                <ProfilePhoto>
                    <Modification onClick={uploadEvent}>
                        <Pen />
                    </Modification>
                    <Upload type="file" ref={imageUpload} />
                </ProfilePhoto>
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
