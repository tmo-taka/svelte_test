<script lang="ts">
    import ContentLists from '$lib/components/ContentLists.svelte'

    export let data: {contentsLists: ContentsLists}
    const {contentsLists} = data
</script>

<h1>コンテンツ一覧</h1>
<ContentLists lists={contentsLists} />
