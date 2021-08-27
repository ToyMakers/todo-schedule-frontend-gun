import React from 'react';
import styled from 'styled-components';
import { InputText } from '../Atom';

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

export default MemberItem;
