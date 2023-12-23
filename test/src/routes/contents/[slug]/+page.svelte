<script lang="ts">
	import Card from '@smui/card';
	export let data: {content: Content};
	export const {content} = data;
</script>

<Card padded>
	<h1>{content.title}</h1>
	<ul>
		{#each content.tags as tag}
		<li>
			<a href=/tags/{tag.id.current}>{tag.name}</a>
		</li>
		{/each}
	</ul>
	<div>
		<img src={content.imageUrl} alt="">
	</div>
</Card>