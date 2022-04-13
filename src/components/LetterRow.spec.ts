import { render } from "@testing-library/svelte";
import LetterRow from "./LetterRow.svelte";

type LetterRowProps = {
  word: string;
  expectedWord: string;
  displayResult: boolean;
};

function setUp(props: LetterRowProps) {
  const utils = render(LetterRow, props);

  return {
    utils,
    getList: () => utils.getByRole("list"),
    getListItems: () => utils.getAllByRole("listitem"),
  };
}

describe("LetterRow", () => {
  it("should create five children", () => {
    const { getListItems } = setUp({
      word: "cobra",
      expectedWord: "weary",
      displayResult: false,
    });

    expect(getListItems()).toHaveLength(5);
  });

  it("should display one letter of the word in each letterbox", () => {
    const { getListItems } = setUp({
      word: "cobra",
      expectedWord: "weary",
      displayResult: false,
    });

    const items = getListItems();
    expect(items[0]).toHaveTextContent("C");
    expect(items[1]).toHaveTextContent("O");
    expect(items[2]).toHaveTextContent("B");
    expect(items[3]).toHaveTextContent("R");
    expect(items[4]).toHaveTextContent("A");
  });

  it("should calculate and display status when displayResult is true", () => {
    const { getListItems } = setUp({
      word: "abcde",
      expectedWord: "acbdf",
      displayResult: true,
    });

    const items = getListItems();
    expect(items[0]).toHaveClass("correctPlace");
    expect(items[1]).toHaveClass("correctLetter");
    expect(items[2]).toHaveClass("correctLetter");
    expect(items[3]).toHaveClass("correctPlace");
    expect(items[4]).toHaveClass("wrongLetter");
  });
});
