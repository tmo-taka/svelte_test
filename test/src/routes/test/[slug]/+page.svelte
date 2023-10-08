<script>
	import Card from '@smui/card';
	export let data;
	export const {content} = data;
</script>

<Card>
	<h1>{content.title}</h1>
	<ul>
		{#each content.tags as tag}
		<li>
			<a href="">{tag}</a>
		</li>
		{/each}
	</ul>
	<div>
		<img src={content.imageUrl} alt="">
	</div>
</Card>