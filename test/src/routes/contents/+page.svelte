<script lang="ts">
    export let data;
    const contentsList = data.contents.filter((content: {published: boolean}) => content.published)
</script>

<h1>コンテンツ一覧</h1>
<ul>
    {#each contentsList as content}
        <li>
            <a href="/contents/{content.slug.current}">
                {content.title}
            </a>
        </li>
    {/each}
</ul>