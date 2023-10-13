<script>
	import Card from '@smui/card';
	export let data;
	const {filterContents} = data;
</script>


	{#each filterContents as content}
        <Card>
            <a href="/contents/{content.slug.current}">
                {content.title}
            </a>
		</Card>
    {/each}