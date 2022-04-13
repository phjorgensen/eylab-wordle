import { render } from "@testing-library/svelte";
import LetterBox from "./LetterBox.svelte";
import type { LetterBoxStatus } from "./types";

type LetterBoxProps = {
  letter?: string;
  status?: LetterBoxStatus;
};

function setUp(props: LetterBoxProps) {
  const utils = render(LetterBox, props);

  return {
    utils,
    getLetter: () => utils.getByTestId("letter-box"),
  };
}

describe("LetterBox", () => {
  it("should display the letter", () => {
    const { getLetter } = setUp({ letter: "P" });

    expect(getLetter()).toHaveTextContent("P");
  });

  it("should have empty class with no status", () => {
    const { getLetter } = setUp({});

    expect(getLetter()).toHaveClass("empty");
  });

  it("should have wrongLetter class with wrongLetter status", () => {
    const { getLetter } = setUp({ status: "wrongLetter" });

    expect(getLetter()).toHaveClass("wrongLetter");
  });

  it("should have correctLetter class with correctLetter status", () => {
    const { getLetter } = setUp({ status: "correctLetter" });

    expect(getLetter()).toHaveClass("correctLetter");
  });

  it("should have correctPlace class with correctPlace status", () => {
    const { getLetter } = setUp({ status: "correctPlace" });

    expect(getLetter()).toHaveClass("correctPlace");
  });
});
