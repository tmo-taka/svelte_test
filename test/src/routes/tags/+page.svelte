<script lang="ts">
    import TagLists from "$lib/components/TagLists.svelte";

    export let data: {tagsLists: TagsLists};
    const { tagsLists } = data
</script>

<h1>タグ一覧</h1>
<TagLists lists={tagsLists} />