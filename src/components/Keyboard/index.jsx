import { Key, KeyboardContainer } from "./style";

const Keyboard = () => {
    const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

    let handleButtonClick = (e) => {
        console.log(e);
    }
  
    return (
      <KeyboardContainer>
        {keys.map((row, idx) => (
          <div key={idx}>
            {row.split("").map((key) => (
              <Key key={key} onClick={handleButtonClick(key)}>{key}</Key>
            ))}
          </div>
        ))}
      </KeyboardContainer>
    )
  }
  
  export default Keyboard