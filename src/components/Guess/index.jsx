import { Letter, Wrapper } from "./style";

const Guess = ({ guess, answer, isGuessed }) => {
    return (
        <Wrapper>
            {new Array(5).fill().map((_, idx) => {
                const bgclr =! isGuessed 
                    ? "transparent"
                    : guess[idx] === answer[idx]
                    ? "#538d4e"
                    : answer.includes(guess[idx])
                    ? "#b59f3b"
                    : "#3a3a3c";
                return (
                    <Letter bgclr={bgclr} key={idx}>
                        {guess[idx]}
                    </Letter>
                );
            })}
        </Wrapper>
    );
};

export default Guess;