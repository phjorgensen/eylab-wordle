<script lang="ts">
  import type { LetterBoxStatus } from './types';

  export let letter = '';
  export let status: LetterBoxStatus = undefined;
</script>

<li
  aria-label="Letter box"
  class="flex items-center justify-center w-20 h-20 border-2 rounded text-[2rem] {status
    ? status
    : 'empty'}"
  data-testid="letter-box"
>
  {letter.toUpperCase()}
</li>

<style lang="postcss">
  .empty {
    @apply bg-white;
  }

  .wrongLetter {
    @apply bg-gray-400;
  }

  .correctLetter {
    @apply bg-yellow-400;
  }

  .correctPlace {
    @apply bg-green-500;
  }
</style>
