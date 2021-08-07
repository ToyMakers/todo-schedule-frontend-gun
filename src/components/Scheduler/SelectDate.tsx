import React from 'react';
import styled, { css } from 'styled-components';

const DayList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`;

const DayItem = styled.li`
    display: block;
    width: 15%;
`;

const DayWay = styled(DayItem)`
    width: 5%;
`;

const DayBtn = styled.button<{ today?: boolean }>`
    padding: 10px 0;
    border-radius: 10px;
    width: 100%;
    text-align: center;

    ${({ today }) =>
        today &&
        css`
            background: linear-gradient(145deg, #282828, #212121);
            box-shadow: 6px 6px 15px #171717, -6px -6px 15px #333333;
        `}
`;

function SelectDate() {
    return (
        <DayList>
            <DayWay>
                <DayBtn>&lt;</DayBtn>
            </DayWay>
            <DayItem>
                <DayBtn>08.04</DayBtn>
            </DayItem>
            <DayItem>
                <DayBtn>08.05</DayBtn>
            </DayItem>
            <DayItem>
                <DayBtn today>08.06</DayBtn>
            </DayItem>
            <DayItem>
                <DayBtn>08.07</DayBtn>
            </DayItem>
            <DayItem>
                <DayBtn>08.08</DayBtn>
            </DayItem>
            <DayWay>
                <DayBtn>&gt;</DayBtn>
            </DayWay>
        </DayList>
    );
}

export default SelectDate;
