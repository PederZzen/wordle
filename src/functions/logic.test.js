import { getColorStatuses } from './logic';

describe("Wordle feedback logic", () => {
  it("all letters green when guess is correct", () => {
    const result = getColorStatuses("LEMON", "LEMON");
    expect(result).toEqual(["green", "green", "green", "green", "green"]);
  });

  it("yellow for correct letters in wrong places", () => {
    const result = getColorStatuses("NOMEL", "LEMON");
    expect(result).toEqual(["yellow", "yellow", "green", "yellow", "yellow"]);
  });

  it("no extra yellows when guess has duplicate letters", () => {
    const result = getColorStatuses("LLAMA", "LEMON");
    expect(result).toEqual(["green", "gray", "gray", "yellow", "gray"]);
  });  

  it("mix of green and yellow", () => {
    const result = getColorStatuses("MELON", "LEMON");
    expect(result).toEqual(["yellow", "green", "yellow", "green", "green"]);
  });
  

  it("guess has more of a letter than answer", () => {
    const result = getColorStatuses("PIZZA", "PARTY");
    expect(result).toEqual(["green", "gray", "gray", "gray", "yellow"]);
  });
  
});
