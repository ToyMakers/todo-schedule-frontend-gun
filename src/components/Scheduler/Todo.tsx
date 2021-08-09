import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { mockTodoType } from '../../../utils/mock/mockTodo.dummy';

const TodoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 310px;
    padding: 10px;
    margin: 0 auto;

    background-color: #353535;

    &:not(:first-child) {
        margin-top: 10px;
    }
`;

const TodoEachItem = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const TodoCheckBox = styled.div`
    width: 15px;
    height: 15px;
    position: relative;
    border-radius: 5px;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);
`;

const TodoCheck = styled.input`
    visibility: hidden;
`;

const TodoCheckLabel = styled.label<{ checkStatus: boolean }>`
    display: block;
    width: 15px;
    height: 15px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #222222 0%, #45484d 100%);
    border-radius: 4px;
    box-shadow: inset 0px 1px 1px rgb(0 0 0 / 50%), 0px 1px 0px rgb(255 255 255 / 40%);

    &::after {
        content: '';
        width: 7px;
        height: 4px;
        position: absolute;
        top: 4px;
        left: 3px;
        border: 2px solid #fcfff4;
        border-top: none;
        border-right: none;
        background: transparent;
        transform: rotate(-45deg);
        opacity: ${({ checkStatus }) => (checkStatus ? 1 : 0.1)};
    }
`;

const TodoPara = styled.p<{ checkStatus: boolean }>`
    max-width: 240px;
    padding-left: 10px;
    position: relative;
    text-overflow: ellipsis;
    overflow: hidden;
    user-select: none;
    ${({ checkStatus }) =>
        checkStatus &&
        css`
            color: #666;
            &::after {
                content: '';
                width: 100%;
                height: 2px;
                position: absolute;
                top: 50%;
                left: 6px;
                transform: tranlateY(-50%);
                background-color: #222;
            }
        `}
`;

const DeleteBtn = styled.button`
    width: 15px;
    height: 15px;
    position: relative;
    text-indent: -9999px;
    font-size: 0.1px;
    color: tranparent;

    &::before,
    &::after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: #c92a2a;
    }

    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(135deg);
    }
`;

function Todo({ para, progress }: mockTodoType) {
    const [check, setCheck] = useState<boolean>(progress);
    const toggleCheck = () => setCheck(!check);
    return (
        <TodoItem>
            <TodoEachItem onClick={toggleCheck}>
                <TodoCheckBox>
                    <TodoCheck type="checkbox" checked={check} />
                    <TodoCheckLabel checkStatus={check}></TodoCheckLabel>
                </TodoCheckBox>
                <TodoPara checkStatus={check}>{para}</TodoPara>
            </TodoEachItem>
            <DeleteBtn>Delete</DeleteBtn>
        </TodoItem>
    );
}

export default Todo;
