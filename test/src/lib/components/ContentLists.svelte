<script lang="ts">
    import List, { Item, Text, Group } from '@smui/list';

    export let lists:ContentsLists;

    const movePage = (content:Content) => {
        // Page遷移
        const createPath ='/contents/' + content.slug.current;
        window.location.href = createPath;
    }
</script>

<Group>
    <List class="list">
        {#each lists as content}
            <Item on:SMUI:action={() => (movePage(content))}>
                <Text>{content.title}</Text>
            </Item>
        {/each}
    </List>
</Group>

<style>
    * :global(.list) {
        max-width: 300px;
        border-left: 1px solid
    }
</style>