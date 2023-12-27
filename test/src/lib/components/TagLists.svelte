<script lang="ts">
import List, { Item, Text, Group } from '@smui/list';

    export let lists:TagLists;

    const movePage = (tag:Tag) => {
        // Page遷移
        const createPath ='/tags/' + tag.id.current;
        window.location.href = createPath;
    }
</script>

<Group>
    <List class="list">
        {#each lists as tag}
            <Item on:SMUI:action={() => (movePage(tag))}>
                <Text>{tag.name}</Text>
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