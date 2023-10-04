<script>
    import Form from '../components/Form.svelte'
    export let data;
    const postApi = () => {
        console.log(data);
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>こんにちは</p>
<div>aの値{data.a}</div>
<Form />
<button on:click={() => postApi()}>POST</button>
<a href="/test">テストページへ</a>

<ul>
    {#each data.word as word}
        <li>{word.name}</li>
    {/each}
</ul>