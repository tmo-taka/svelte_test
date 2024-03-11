<script lang="ts">
  import Button, {Label} from '@smui/button'
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()

  const clickButton = () => {
    dispatch('clickButton')
  }
</script>

<Button on:click={() => clickButton()} variant="raised" type="submit">
  <Label>
    <slot>ボタン</slot>
  </Label>
</Button>
