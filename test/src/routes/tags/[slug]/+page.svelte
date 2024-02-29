<script lang="ts">
	import Card, {PrimaryAction, Content, Media, MediaContent} from '@smui/card'

	export let data
	const {filterContents} = data

    const pageMove = (slug:string) => {
    	window.location.href = `/contents/${slug}`
    }
</script>

<div class="cardBox">
	{#each filterContents as content}
        <Card style="width: 300px;">
            <PrimaryAction on:click={() => pageMove(content.slug.current)} padded>
                <Media aspectRatio="square">
                    <MediaContent>
                        <img src={content.imageUrl} style:width="100%" alt="">
                    </MediaContent>
                </Media>
                {content.title}
            </PrimaryAction>
		</Card>
    {/each}
</div>

<style>
    .cardBox {
        margin: 0 auto;
        padding: 24px 0;
        width: 840px;
        display: flex;
        justify-content: space-around;
    }
</style>
