import styled from 'styled-components';

const Modification = styled.button`
    display: block;
    width: 27px;
    height: 27px;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 2px solid #fff;
    border-radius: 50%;
    background: rgba(204, 204, 204, 0.3);
    cursor: pointer;
    transition: ease-in-out 0.2s;
    overflow: hidden;

    &:hover {
        transform: rotate(-25deg);
    }
`;

export default Modification;
