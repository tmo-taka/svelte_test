<script lang="ts">
    import ContentList from '$lib/components/ContentList.svelte';

    export let data;
    console.log(data);
</script>

<h1>コンテンツ一覧</h1>
<ContentList lists={data.contentsLists} />