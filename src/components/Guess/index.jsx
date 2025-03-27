import { getColorStatuses } from "../../functions/logic";
import { Letter, Wrapper } from "./style";

const Guess = ({ guess = "", answer, isGuessed }) => {
  const colorStatuses = isGuessed ? getColorStatuses(guess, answer) : [];

  const colorMap = {
    green: "#538d4e",
    yellow: "#b59f3b",
    gray: "#3a3a3c",
    transparent: "transparent",
  };

  return (
    <Wrapper>
      {new Array(5).fill().map((_, idx) => {
        const letter = guess[idx] || "";
        const color = isGuessed ? colorMap[colorStatuses[idx]] : "transparent";
        return (
          <Letter bgclr={color} key={idx}>
            {letter}
          </Letter>
        );
      })}
    </Wrapper>
  );
};

export default Guess;
