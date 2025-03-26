import { Letter, Wrapper } from "./style";

const getColorStatuses = (guess, answer) => {
    const result = Array(5).fill("gray");
    const answerLetters = answer.split('');
    const guessLetters = guess.split('');

    // First pass: correct spot = green
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === answerLetters[i]) {
            result[i] = "green";
            answerLetters[i] = null;
            guessLetters[i] = null;
        }
    }

    // Second pass: wrong spot = yellow
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] && answerLetters.includes(guessLetters[i])) {
            result[i] = "yellow";
            answerLetters[answerLetters.indexOf(guessLetters[i])] = null;
        }
    }

    return result;
};

const Guess = ({ guess, answer, isGuessed }) => {
    const colorStatuses = isGuessed ? getColorStatuses(guess, answer) : [];

    const colorMap = {
        green: "#538d4e",
        yellow: "#b59f3b",
        gray: "#3a3a3c",
        transparent: "transparent"
    };

    return (
        <Wrapper>
            {new Array(5).fill().map((_, idx) => {
                const letter = guess[idx] || "";
                const status = colorStatuses[idx] || "transparent";
                return (
                    <Letter bgclr={colorMap[status]} key={idx}>
                        {letter}
                    </Letter>
                );
            })}
        </Wrapper>
    );
};

export default Guess;
