<script lang="ts">
    import { fade, slide } from 'svelte/transition'
    import { page } from '$app/stores';
    import TabBar from '@smui/tab-bar';
    import Tab, { Label }from '@smui/tab';
    import { getUserName, initialSetUserName } from '$lib/store/auth';
    export let data;
    const {path} = data;
    initialSetUserName();
    const userName = getUserName();

    const sitePath = new Map<string, string>([
        ['/','HOME'],
        ['/contents','Contents'],
        ['/tags','Tags'],
    ])

    const tabs:string[] = [...sitePath.values()];

    const copyArr:[string,string][] = [...sitePath];
    const valueToKey = (tab:string) => {
        const searchObj:[string,string] | undefined = copyArr.find(([key, value]) => value == tab);
        return searchObj ? searchObj[0] : '/'
    };

    // TODO: typescript adjust
    const reverseKeyArr = [...sitePath.keys()].reverse();
    const getKeypath = reverseKeyArr.find(key => path.includes(key));
    console.log(getKeypath)
    let active = sitePath.get(getKeypath);
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>
<div>
    <TabBar tabs={tabs} let:tab bind:active>
        <Tab {tab} href={valueToKey(tab)}>
            <Label>
                {tab}
            </Label>
        </Tab>
    </TabBar>
    { $userName }
    {#key data.path}
        <div
            in:fade={{ delay: 100 }}
            out:slide
            class="wrap"
        >
            <slot />
        </div>
    {/key}
</div>

<style>
    .wrap {
        padding: 16px;
    }
</style>