import React from 'react';
import MemberItem from '../common/MemberSet/MemberItem';
import { MemberForm, MemberList, MemberButton } from '../common/MemberSet';

function LoginView() {
    return (
        <MemberForm>
            <MemberList>
                <MemberItem label="아이디" placeholder="2~15자 이내" />
                <MemberItem label="비밀번호" placeholder="특수문자를 포함한 8~15자" />
            </MemberList>
            <MemberButton>LOGIN</MemberButton>
        </MemberForm>
    );
}

export default LoginView;
