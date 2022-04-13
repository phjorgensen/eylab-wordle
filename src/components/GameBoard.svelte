<script lang="ts">
  import LetterRow from './LetterRow.svelte';

  export let numberOfAttempts = 6;
  export let expectedWord: string;

  let wordAttempt = '';
  let lastAttemptIndex = 0;
  let isPlaying = true;

  $: attempts = Array(numberOfAttempts).fill({
    word: '',
    displayResult: false,
  });

  function submitAttempt() {
    attempts[lastAttemptIndex++] = {
      word: wordAttempt,
      displayResult: true,
    };

    wordAttempt = undefined;
    if (lastAttemptIndex === numberOfAttempts) {
      gameOver();
    }
  }

  function gameOver() {
    isPlaying = false;
  }
</script>

<article data-testid="game-input">
  {#if isPlaying}
    <input bind:value={wordAttempt} class="border m-2 rounded p-2 text-lg" />
    <button class="border bg-blue-300 p-2 rounded-lg" on:click={submitAttempt}>
      Submit
    </button>
  {/if}

  {#if !isPlaying}
    <div>{expectedWord}</div>
  {/if}
</article>

<article class="flex flex-col gap-2" data-testid="game-board">
  {#each attempts as attempt}
    <LetterRow
      word={attempt.word}
      {expectedWord}
      displayResult={attempt.displayResult}
    />
  {/each}
</article>
