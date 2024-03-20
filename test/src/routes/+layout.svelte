<script lang="ts">
  import {fade, slide} from 'svelte/transition'
  import Header from '$lib/components/Header.svelte'

  export let data
  const {path, locals} = data
  const localsUser = locals?.user
</script>

<svelte:head>
  <title>svelteテスト</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
</svelte:head>
<div>
  <Header {path} {localsUser} />
  {#key data.path}
    <div in:fade={{delay: 100}} out:slide class="wrap">
      <slot />
    </div>
  {/key}
</div>

<style>
  .wrap {
    padding: 16px;
  }
</style>
