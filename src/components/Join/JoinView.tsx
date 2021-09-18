import React from 'react';
import { MemberForm, MemberList, MemberButton } from '../MemberSet';
import MemberItem from '@Components/MemberSet/MemberItem';

function JoinView() {
    return (
        <MemberForm>
            <MemberList>
                <MemberItem label="아이디" placeholder="2~15자 이내" />
                <MemberItem label="비밀번호" placeholder="특수문자를 포함한 8~15자" />
                <MemberItem label="비밀번호 확인" placeholder="비밀번호와 일치" />
                <MemberItem label="이름" placeholder="10자 이내" />
                <MemberItem label="설명" placeholder="50자 이내" />
            </MemberList>
            <MemberButton>JOIN US</MemberButton>
        </MemberForm>
    );
}

export default JoinView;
