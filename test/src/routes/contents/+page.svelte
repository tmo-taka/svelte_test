<script lang="ts">
    import ContentList from '$lib/components/ContentList.svelte';

    export let data: {contentsLists: ContentsLists};
    const {contentsLists} = data;
</script>

<h1>コンテンツ一覧</h1>
<ContentList lists={contentsLists} />