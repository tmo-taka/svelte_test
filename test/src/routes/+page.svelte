<script lang="ts">
    import tippy from 'tippy.js'
    import Form from '../components/Form.svelte'
    export let data;
    const postApi = () => {
        console.log(data);
    }
    const contentsList = data.contents.filter((content: {published: boolean}) => content.published);

    const focusFunc = (node,param) => {
        let tip = tippy(node, { content: param});
        node.focus();
        return {
            update: (newParams) => {
                tip.setProps(newParams);
            },
            destory: () => { tip.destory(); }
        }
    }

    let count = 0;
    $: triple = count * 3;

    const addCount = () => {
        count++
    }
    const removeCount =() => {
        count--
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>こんにちは</p>
<div>aの値{data.a}</div>
<Form />
<button on:click={() => postApi()}>POST</button>
<a href="/contents">テストページへ</a>
<button use:focusFunc={'test'}>
    テスト
</button>

<div>count: {count}</div>
<div>count三倍: {triple}</div>
<div>
    <button on:click={() => addCount()}>増やす</button>
    <button on:click={() => removeCount()}>減らす</button>
</div>

<ul>
    {#each contentsList as content}
        <li>
            <a href="/contents/{content.slug.current}">
                {content.title}
            </a>

        </li>
    {/each}
</ul>