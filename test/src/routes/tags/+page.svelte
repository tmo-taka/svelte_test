<script lang="ts">
    export let data: {tags: TagLists};
    const tagsList = data.tags
    console.log(tagsList)
</script>

<h1>タグ一覧</h1>
<ul>
    {#each tagsList as tag}
        <li>
            <a href="/tags/{tag.id.current}">
                {tag.name}
            </a>

        </li>
    {/each}
</ul>