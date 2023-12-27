<script lang="ts">
    import TagLists from "$lib/components/TagLists.svelte";
    export let data: {tagLists: TagLists};
    const { tagLists } = data
    console.log(tagLists)
</script>

<h1>タグ一覧</h1>
<TagLists lists={tagLists} />