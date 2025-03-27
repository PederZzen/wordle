import { Key, KeyboardContainer } from "./style";

const Keyboard = ({ onKeyPress, keyStatuses }) => {
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  const getKeyColor = (letter) => {
    const status = keyStatuses[letter];
    if (status === "green") return "#538d4e";
    if (status === "yellow") return "#b59f3b";
    if (status === "gray") return "#3a3a3c";
    return "#818384"; // default key color
  };

  return (
    <KeyboardContainer>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          {rowIndex === 2 && (
            <Key onClick={() => onKeyPress("ENTER")}>ENTER</Key>
          )}

          {row.split("").map((letter) => (
            <Key
              key={letter}
              onClick={() => onKeyPress(letter)}
              style={{ backgroundColor: getKeyColor(letter) }}
            >
              {letter}
            </Key>
          ))}

          {rowIndex === 2 && (
            <Key onClick={() => onKeyPress("BACKSPACE")}>&#8678;</Key>
          )}
        </div>
      ))}
    </KeyboardContainer>
  );
};

export default Keyboard;
