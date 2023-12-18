<script>
    export let word = 'Hello World'
    // $: document.word = word
    const updateValue = (event) => {
        word = event.target.value;
    }
</script>

{#if word.length < 10}
    <div>{word}</div>
{:else}
    <div>文字を見せれない</div>
{/if}
<input type="text" value="{word}" on:input="{updateValue}"/>