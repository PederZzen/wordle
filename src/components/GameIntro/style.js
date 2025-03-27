import styled from "styled-components";

export const GameIntroContainer = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 15px;
    max-width: 300px;

    .container span {
        padding: 5px;
        border: 1px solid gray;
        border-radius: 5px;
        margin-right: 5px;
    }

    .green {
        background-color: #538d4e;
    }

    .yellow {
        background-color: #b59f3b;
    }

    .gray {
        background-color: #3a3a3c;
    }
`