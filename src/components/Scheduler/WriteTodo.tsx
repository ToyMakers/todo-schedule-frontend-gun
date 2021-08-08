import React from 'react';
import styled from 'styled-components';

const WriteWrap = styled.div`
    display: flex;
    justify-content: center;
    max-width: 310px;
    padding: 20px 0 10px;
    margin: 0 auto;
`;

const WriteInput = styled.input`
    width: 82.5%;
    padding: 10px;
    border-radius: 5px;
`;

const WriteBtn = styled.button`
    width: 15%;
    padding: 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    margin-left: 2.5%;
    background-color: #393939;
`;

function WriteTodo() {
    return (
        <WriteWrap>
            <WriteInput type="text" />
            <WriteBtn>Add</WriteBtn>
        </WriteWrap>
    );
}

export default WriteTodo;