<script lang="ts">
    import tippy from 'tippy.js'
    import List, { Item, Text, Group } from '@smui/list';
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

    const movePage = (content) => {
        // Page遷移
        const createPath ='/contents/' + content.slug.current;
        window.location.href = createPath;
    }
</script>

<div>
    <h1>これはブログです</h1>

    <section>
        <h2>フォーム</h2>
        <Form />
        <button on:click={() => postApi()}>POST</button>
        <button use:focusFunc={'test'}>
            テスト
        </button>

        <div>count: {count}</div>
        <div>count三倍: {triple}</div>
        <div>
            <button on:click={() => addCount()}>増やす</button>
            <button on:click={() => removeCount()}>減らす</button>
        </div>
    </section>

    <section>
        <h2>記事一覧</h2>
        <Group>
            <List class="list">
                {#each contentsList as content}
                    <Item on:SMUI:action={() => (movePage(content))}>
                        <Text>{content.title}</Text>
                    </Item>
                {/each}
            </List>
        </Group>
    </section>
</div>

<style>
    * :global(.list) {
        max-width: 300px;
        border-left: 1px solid
    }
</style>