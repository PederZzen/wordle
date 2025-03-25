import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
`; 

export const Letter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1.5px solid #3a3b3c;
    font-size: 25px;
    font-weight: bold;
    background-color: ${props => props.bgclr};
    text-transform: uppercase;
`;