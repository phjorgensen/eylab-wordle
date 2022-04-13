import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { tick } from 'svelte';
import GameBoard from './GameBoard.svelte';

type GameBoardProps = {
  numberOfAttempts?: number;
  expectedWord: string;
};

function setUp(props: GameBoardProps) {
  const utils = render(GameBoard, props);

  return {
    utils,
    getGameBoard: () => utils.getByTestId('game-board'),
    getListItems: () => utils.getAllByRole('listitem'),
    getInput: () => utils.getByRole('textbox'),
    getButton: () => utils.getByRole('button'),
  };
}

describe('GameBoard', () => {
  it('should display number of attempts from the start', () => {
    const { getGameBoard } = setUp({ numberOfAttempts: 4, expectedWord: '' });

    expect(getGameBoard().childElementCount).toBe(4);
  });

  it('should start empty', () => {});

  it('should add word to attempt and display result on button click', async () => {
    const { getListItems, getInput, getButton } = setUp({
      expectedWord: 'weary',
    });

    userEvent.type(getInput(), 'weary');
    userEvent.click(getButton());
    await tick();

    const items = getListItems();
    expect(items[0]).toHaveTextContent('W');
    expect(items[1]).toHaveTextContent('E');
    expect(items[2]).toHaveTextContent('A');
    expect(items[3]).toHaveTextContent('R');
    expect(items[4]).toHaveTextContent('Y');
    expect(items[5]).toHaveTextContent('');
  });
});
