import React from 'react';
import styled from 'styled-components';
import { InputText } from '@Components/Atoms';

const TextList = styled.li`
    display: flex;
    width: 310px;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    gap: 7px;
`;

const TextLabel = styled.label`
    display: block;
`;

const TextInput = styled(InputText)`
    display: block;
`;

interface TextItemType {
    label: string;
    placeholder: string;
}

function MemberItem({ label, placeholder }: TextItemType) {
    return (
        <TextList>
            <TextLabel>{label}</TextLabel>
            <TextInput placeholder={placeholder} />
        </TextList>
    );
}

MemberItem.defaultProps = {
    label: '기입 내용',
    placeholder: '16자 이내로 작성',
};

export default MemberItem;
