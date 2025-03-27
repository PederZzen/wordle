import styled from "styled-components";

export const GameIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 20px;

  ul {
    margin-left: 20px;

    * {
      margin-bottom: 5px;
    }
  }

  .examples {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .example-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .example {
    display: flex;
    gap: 5px;
    font-size: 25px;
    font-weight: bold;
  }

  .example span {
    border: 1px solid gray;
    padding: 10px;
    min-width: 50px;
    text-align: center;
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
`;
