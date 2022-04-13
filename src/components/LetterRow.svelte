<script lang="ts">
  import LetterBox from './LetterBox.svelte';
  import type { LetterBoxStatus } from './types';

  export let word: string;
  export let expectedWord: string;
  export let displayResult = false;

  $: calculateResult(displayResult);

  const results: LetterBoxStatus[] = [];

  function calculateResult(displayResult: boolean): void {
    const letters = word.split('');

    const getStatus = (letter: string, index: number) => {
      if (!displayResult) {
        return undefined;
      } else if (!expectedWord.includes(letter)) {
        return 'wrongLetter';
      } else if (letter === expectedWord[index]) {
        return 'correctPlace';
      } else {
        return 'correctLetter';
      }
    };

    letters.forEach((letter, index) => {
      results[index] = getStatus(letter, index);
    });
  }
</script>

<ul class="flex gap-2">
  <LetterBox letter={word[0]} status={results[0]} />
  <LetterBox letter={word[1]} status={results[1]} />
  <LetterBox letter={word[2]} status={results[2]} />
  <LetterBox letter={word[3]} status={results[3]} />
  <LetterBox letter={word[4]} status={results[4]} />
</ul>
