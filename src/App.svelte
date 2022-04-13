<script lang="ts">
  import './styles.pcss';
  import { onMount } from 'svelte';
  import * as allWords from './data/words.json';
  import GameBoard from './components/GameBoard.svelte';

  let word: string;

  onMount(() => {
    const words = Object.keys(allWords);
    word = getRandomWord(words);
  });

  function getRandomWord(words: string[]): string {
    const numberOfWords = words.length;
    const randomIndex = getRandomIndex(1, numberOfWords);
    const word = words[randomIndex];
    // TODO: if word contains more of same character, repeat
    return word;
  }

  function getRandomIndex(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
</script>

<main class="w-full h-full">
  <GameBoard numberOfAttempts={5} expectedWord={word} />
</main>
